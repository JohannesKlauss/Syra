// The basis of this is this gist by Andrey Salomatin: https://gist.github.com/flpvsk/047140b31c968001dc563998f7440cc1

class RecorderWorkletProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [{
      name: 'isRecording',
      defaultValue: 0
    }];
  }

  constructor() {
    super();
    this._bufferSize = 32768;
    this._buffer = new Float32Array(this._bufferSize);
    this._initBuffer();
  }

  _initBuffer() {
    this._bytesWritten = 0;
  }

  _isBufferEmpty() {
    return this._bytesWritten === 0;
  }

  _isBufferFull() {
    return this._bytesWritten === this._bufferSize;
  }

  _appendToBuffer(value) {
    if (this._isBufferFull()) {
      this._flush();
    }

    this._buffer[this._bytesWritten] = value;
    this._bytesWritten += 1;
  }

  _flush() {
    let buffer = this._buffer;
    if (this._bytesWritten < this._bufferSize) {
      buffer = buffer.slice(0, this._bytesWritten);
    }

    this.port.postMessage({
      eventType: 'data',
      audioBuffer: buffer
    });

    this._initBuffer();
  }

  _recordingStopped() {
    this.port.postMessage({
      eventType: 'stop'
    });
  }

  process(inputs, outputs, parameters) {
    // Let sound pass through unaltered.
    const output = outputs[0];
    const input = inputs[0];

    for (let i = 0; i < input.length; i++) {
      const channel = input[i];

      for(let j = 0; j < channel.length; j++) {
        output[i][j] = channel[j];
      }
    }

    // Fill buffer if recording is active
    const isRecordingValues = parameters.isRecording;

    const sampleParam = isRecordingValues.length === 128;

    if (input && input.length > 0) {
      const inputChannel = input[0];

      for (let i = 0; i < inputChannel.length; i++) {
        const shouldRecord = isRecordingValues[sampleParam ? i : 0] === 1;

        if (!shouldRecord && !this._isBufferEmpty()) {
          this._flush();
          this._recordingStopped();
        }

        if (shouldRecord) {
          this._appendToBuffer(inputChannel[i]);
        }
      }
    }

    return true;
  }
}

registerProcessor('recorder-worklet', RecorderWorkletProcessor);