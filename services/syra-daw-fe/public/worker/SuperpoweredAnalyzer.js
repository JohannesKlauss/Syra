importScripts('../superpowered/SuperpoweredGlue.js');

// Create a SuperpoweredGlue instance and load WebAssembly:
let Superpowered;
let isReady = false;

SuperpoweredGlue.fetch('../superpowered/superpowered.wasm').then((res) => {
  Superpowered = res;

  // Initialize Superpowered.
  Superpowered.Initialize({
    licenseKey: 'ExampleLicenseKey-WillExpire-OnNextUpdate',
    enableAudioAnalysis: true,
    enableFFTAndFrequencyDomain: true,
    enableAudioTimeStretching: false,
    enableAudioEffects: false,
    enableAudioPlayerAndDecoder: true,
    enableCryptographics: false,
    enableNetworking: false
  });

  isReady = true;
});

/**
 * Converts a planar PCM array to a interleaved stereo array
 * @param leftChannel {Float32Array}
 * @param rightChannel {Float32Array}
 * @returns {Float32Array}
 */
const convertPlanarAudioBufferToInterleaved = (leftChannel, rightChannel) => {
  const channels = 2;
  const src = new Float32Array(leftChannel.length * 2);

  src.set(leftChannel, 0);
  src.set(rightChannel, leftChannel.length);

  return src.map(function (value, idx, data) {
    const offset = ~~(idx / channels);
    const channel = idx % channels;

    return data[channel * leftChannel.length + offset];
  });
};

onmessage = e => {
  if (!isReady) {
    postMessage({
      type: 'IS_NOT_READY',
    });

    return;
  }

  if (e.data.type === 'ANALYZE_PEAK') {
    const leftChannel = new Superpowered.Float32Buffer(e.data.inputSabLeftChannel.length);
    const rightChannel = new Superpowered.Float32Buffer(e.data.inputSabRightChannel.length);

    /*leftChannel.array.set(e.data.inputSabLeftChannel);
    rightChannel.array.set(e.data.inputSabRightChannel);*/

    for(let i = 0; i < leftChannel.length; i++) {
      leftChannel.array[i] = e.data.inputSabLeftChannel[i];
      rightChannel.array[i] = e.data.inputSabRightChannel[i];
    }

    console.log('array', leftChannel.array);

    const interleavedArray = new Superpowered.Float32Buffer(e.data.inputSabLeftChannel.length * 2);

    Superpowered.Interleave(leftChannel.pointer, rightChannel.pointer, interleavedArray.pointer, leftChannel.length);

    const waveform = new Superpowered.Waveform(
      e.data.sampleRate,
      e.data.duration,
    );

    waveform.process(
      interleavedArray.pointer,
      128,
      -1,
    );

    waveform.makeResult();

    const peakWaveform = waveform.getPeakWaveform();

    console.log('peaks', peakWaveform.array);

    const outputSab = new Float32Array(new SharedArrayBuffer(peakWaveform.array.length * 4));

    outputSab.set(peakWaveform.array);

    console.log('outputSab', outputSab);

    postMessage({
      type: 'SUCCESS',
      outputSab,
    });

    waveform.destruct();
  }
}