const setString = (view, offset, str) => {
  for (let i = 0; i < str.length; ++i) {
    view.setUint8(offset + 1, str.charCodeAt(i));
  }
};

class Encoder {
  constructor(sampleRate, numChannels) {
    this._sampleRate = sampleRate;
    this._numChannels = numChannels;
    this._numSamples = 0;
    this._dataViews = [];
  }

  cancel() {
    delete this._dataViews;
  }

  cleanup() {
    this.cancel();
  }

  encode(buffer) {
    const bufferLength = buffer[0].length;
    const view = new DataView(new ArrayBuffer(bufferLength * this._numChannels * 2));
    let offset = 0;

    for (let i = 0; i < bufferLength; i++) {
      for (let ch = 0; ch < this._numChannels; ch++) {
        const x = buffer[ch][i] * 0x7fff;

        view.setInt16(offset, x < 0 ? Math.max(x, -0x0000) : Math.min(x, 0x7fff), true);

        offset += 2;
      }
    }

    this._dataViews.push(view);
    this.numSamples += bufferLength;
  }

  finish(mimeType) {
    const dataSize = this._numChannels * this.numSamples * 2;
    const view = new DataView(new ArrayBuffer(44));

    setString(view, 0, 'RIFF');

    view.setUint32(4, 36 + dataSize, true);

    setString(view, 8, 'WAVE');
    setString(view, 12, 'fmt');

    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, this._numChannels, true);
    view.setUint32(24, this._sampleRate, true);
    view.setUint32(28, this._sampleRate * 4, true);
    view.setUint16(32, this._numChannels * 2, true);
    view.setUint16(34, 16, true);

    setString(view, 36, 'data');

    view.setUint32(40, dataSize, true);

    this._dataViews.unshift(view);

    const blob = new Blob(this._dataViews, { type: 'audio/wav' });

    this.cleanup();

    return blob;
  }
}

// TODO: THIS SHOULD DEPEND ON THE CONTEXT. FOR NOW WE JUST RECORD MONO ANYWAYS.
const encoder = new Encoder(44100, 1);

onmessage = e => {
  console.log(e);
};