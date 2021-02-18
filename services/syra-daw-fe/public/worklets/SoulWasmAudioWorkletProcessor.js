// Based on https://github.com/GoogleChromeLabs/web-audio-samples/blob/master/audio-worklet/design-pattern/wasm/wasm-worklet-processor.js
// This is taken from the https://soul.dev site itself. But we might have to tinker with it a bit and probably use a share audio buffer concept.

class SoulWasmAudioWorkletProcessor extends AudioWorkletProcessor {
  midiMessages = [];
  transportOffsetInSamples = -1;
  isCycleActive = 0;
  cycleEnd = 0;

  static get parameterDescriptors() {
    return [
      {
        name: 'transportOffsetInSamples',
        defaultValue: -1,
      },
      {
        name: 'isCycleActive',
        defaultValue: 0,
      },
      {
        name: 'cycleStart',
        defaultValue: -1,
      },
      {
        name: 'cycleEnd',
        defaultValue: -1,
      },
    ];
  }

  /**
   * @constructor
   */
  constructor(options) {
    super();

    this.ready = false;

    this.process = this.process.bind(this);

    this.port.onmessage = (e) => {
      switch (e.data.type) {
        case 'PARAMETER_UPDATE':
          this.instance.exports.onParameterUpdate(e.data.value.parameterId, e.data.value.normalisedValue);
          break;
        case 'MIDI_MESSAGE':
          {
            const messageLength = e.data.value.length;
            if (messageLength <= this.midiData.length) {
              for (let n = 0; n < messageLength; n++) this.midiData[n] = e.data.value[n];

              this.instance.exports.onMidiMessage(messageLength);
            }
          }
          break;
        case 'DELETE_PRE_SCHEDULED_MIDI_MESSAGES':
          this.midiMessages = [];
          break;
        case 'PRE_SCHEDULE_MIDI_MESSAGES':
          this.midiMessages = e.data.value;
          break;
        case 'AUDIO_INPUT_CHANGE':
          this.instance.exports.setAudioInput(e.data.value ? 1 : 0);
          break;
        case 'GET_ENDPOINTS':
          this.port.postMessage({
            type: 'ENDPOINTS',
            value: this.getEndpoints(),
          });
          break;
        case 'KILL':
          this.ready = false;
          break;
      }
    };

    this.setup(
      options.processorOptions.module,
      options.processorOptions.sampleRate,
      false,
      options.processorOptions.bufferSize,
    );
  }

  // Asynchronously setup the WebAssembly instance, using the compiled module which we passed in through
  // the constructor (as we can't compile it in the AudioWorkerGlobalScope)
  // todo - toying with passing initialParameter values here..
  async setup(ourModule, sampleRate, initialParamUserValues, bufferSize) {
    this.instance = await WebAssembly.instantiate(ourModule);
    this.instance.exports.prepareToPlay(sampleRate);
    this.endpoints = this.getEndpoints();
    this.endpoints.totalInputs = this.instance.exports.getNumInputChannels();
    this.endpoints.totalOutputs = this.instance.exports.getNumOutputChannels();
    this.bufferSize = bufferSize;

    // Store two Float32Array's pointing to the data in the shared memory for each channel
    this.channelOutData = [];
    for (let i = 0; i < this.endpoints.totalOutputs; i++) {
      this.channelOutData[i] = new Float32Array(
        this.instance.exports.memory.buffer,
        this.instance.exports.getOutData(i),
        this.bufferSize,
      );
    }

    this.channelInData = [];
    for (let i = 0; i < this.endpoints.totalInputs; i++) {
      this.channelInData[i] = new Float32Array(
        this.instance.exports.memory.buffer,
        this.instance.exports.getInData(i),
        this.bufferSize,
      );
    }

    this.midiData = new Uint8Array(
      this.instance.exports.memory.buffer,
      this.instance.exports.getMidiBuffer(),
      this.instance.exports.getMidiBufferLength(),
    );

    this.setInitialWasmValues();

    this.port.postMessage({
      type: 'ENDPOINTS',
      value: this.endpoints,
    });

    if (initialParamUserValues) {
      Object.keys(initialParamUserValues).forEach((key) => {
        this.instance.exports.onParameterUpdate(Number(key), Number(initialParamUserValues[key]).toFixed(8));
      });
    }
    this.ready = true;
  }

  setInitialWasmValues() {
    if (this.endpoints.parameters) {
      this.endpoints.parameters.forEach((parameter) => {
        this.instance.exports.onParameterUpdate(Number(parameter.index), Number(parameter.initialValue).toFixed(8));
      });
    }
  }

  /**
   * set(sub(0, 10), 0); first 10 samples
   * set(sub(0, 30), 10); next 30 samples | 40 total
   * set(sub(0, 60), 40); next 60 samples | 100 total
   * set(sub(0, 28), 100); last 28 samples | 128 total
   *
   * @param outputs         The outputs array from the process function
   * @param samples         The number of samples to copy from the WASM buffer
   * @param offsetSamples   The offset of sample to where to copy the samples into the outputs array.
   */
  processSampleBlock(outputs, samples = 128, offsetSamples = 0) {
    this.instance.exports.processBlock(samples);

    if (outputs[0].length > 1 && this.endpoints.totalOutputs === 1) {
      // Soul Plugin is Mono
      for (let ch = 0; ch < outputs[0].length; ch++) {
        // Copy the mono source to all channels
        outputs[0][ch].set(this.channelOutData[0].subarray(0, samples), offsetSamples);
      }
    } else if (outputs[0].length > 1 && this.endpoints.totalOutputs >= 2) {
      // Soul Plugin is Stereo (or multichannel)
      for (let ch = 0; ch < 2; ch++) {
        outputs[0][ch].set(this.channelOutData[ch].subarray(0, samples), offsetSamples);
      }
    }
  }

  /**
   * System-invoked process callback function.
   * @param  {Array} inputs Incoming audio stream.
   * @param  {Array} outputs Outgoing audio stream.
   * @param  {Object} parameters AudioParam data. // not to be confused with initial parameters!
   * @return {Boolean} Active source flag.
   */
  process(inputs, outputs, parameters) {
    if (!this.ready) return false;

    let samplesToProcess = outputs[0][0].length;
    let offsetSamples = 0;

    if (this.endpoints.totalInputs === 1 && inputs[0].length >= 1) {
      this.channelInData[0].set(inputs[0][0]);
    }

    if (this.endpoints.totalInputs > 1 && inputs[0].length >= 2) {
      for (let ch = 0; ch < 2; ch++) {
        this.channelInData[ch].set(inputs[0][ch]);
      }
    }

    const transportOffsetInSamples = parameters['transportOffsetInSamples'];
    this.isCycleActive = parameters['isCycleActive'][0];
    this.cycleEnd = parameters['cycleEnd'][0];

    let didSetOffset = false;

    // This determines if the transport is playing or not and saves the sample offset of the transport relative to the
    // transports starting point. This is clock independent.
    for (let i = 0; i < transportOffsetInSamples.length; i++) {
      if (this.transportOffsetInSamples === -1) {
        if (transportOffsetInSamples[i] > -1 && !didSetOffset) {
          didSetOffset = true;
          this.transportOffsetInSamples = transportOffsetInSamples[i];
        }
      }
      else if (transportOffsetInSamples[i] === -1 && !didSetOffset) {
        this.transportOffsetInSamples = -1;
      }
    }

    // This checks if there are midi messages to trigger during the block.
    // It advances to the midi message, triggers it and advances again to the next.
    if (this.transportOffsetInSamples > -1) {
      const messages = this.midiMessages.filter(msg =>
        msg[3] >= this.transportOffsetInSamples && msg[3] < this.transportOffsetInSamples + samplesToProcess
      );

      // Check if we have to reset this.transportOffsetInSamples because we reached the end of the cycle.
      if (this.isCycleActive === 1 && this.cycleEnd - this.transportOffsetInSamples <= 128) {
        const samplesUntilCycleEnd = this.cycleEnd - this.transportOffsetInSamples;

        // TODO: THIS IS NOT SAMPLE ACCURATE! THE CYCLE SHIFTS BY THE SAMPLES LEFT.
        // For now this is ok.
        this.transportOffsetInSamples = transportOffsetInSamples[0] - samplesUntilCycleEnd - 1;
      }

      for (let j = 0; j < messages.length; j++) {
        const msg = messages[j];
        const skipSamples = msg[3] - this.transportOffsetInSamples;

        if (skipSamples > 128) {
          break;
        }

        this.processSampleBlock(outputs, skipSamples, offsetSamples);

        offsetSamples += skipSamples;
        samplesToProcess -= skipSamples;

        this.transportOffsetInSamples += skipSamples;

        for (let n = 0; n < 3; n++) this.midiData[n] = msg[n];
        this.instance.exports.onMidiMessage(3);
      }

      this.transportOffsetInSamples += samplesToProcess;
    }

    this.processSampleBlock(outputs, samplesToProcess, outputs[0][0].length - samplesToProcess);

    return true;
  }

  getEndpoints() {
    let descriptionData = new Uint8Array(
      this.instance.exports.memory.buffer,
      this.instance.exports.getDescription(),
      this.instance.exports.getDescriptionLength(),
    );
    let s = '';
    for (let i = 0; i < descriptionData.length; i++) {
      s += String.fromCharCode(descriptionData[i]);
    }
    return JSON.parse(s);
  }
}

registerProcessor('soul-wasm-audio-worklet-processor', SoulWasmAudioWorkletProcessor);
