const worker = new Worker('/worker/SuperpoweredAnalyzer.js');

export async function analyzeAudio(buffer: AudioBuffer): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const inputSabLeftChannel = new Float32Array(new SharedArrayBuffer(buffer.length * 4)); // A Float32 is 4 byte and we use interleaved format, so 2 channels.
    const inputSabRightChannel = new Float32Array(new SharedArrayBuffer(buffer.length * 4)); // A Float32 is 4 byte and we use interleaved format, so 2 channels.

    // TODO: THIS NEEDS TO WORK WITH STEREO CHANNELS TOO.
    inputSabLeftChannel.set(buffer.getChannelData(0), 0);

    if (buffer.numberOfChannels > 1) {
      inputSabRightChannel.set(buffer.getChannelData(1), 0);
    } else {
      // If we have a mono buffer, we just fill the second one.
      inputSabRightChannel.fill(0);
    }

    worker.onmessage = e => {
      console.log('got message', e.data);

      switch(e.data.type) {
        case 'SUCCESS':
          resolve(e.data.outputSab);
          break;
        case 'IS_NOT_READY':
          console.log('SuperpoweredAnalyzer is not ready yet.');
          reject('Was not able to analyze waveform');
          break;
        default:
          reject('Was not able to analyze waveform');
      }
    };

    worker.postMessage({
      type: 'ANALYZE_PEAK',
      inputSabLeftChannel,
      inputSabRightChannel,
      sampleRate: buffer.sampleRate,
      duration: buffer.duration,
    });
  });
}