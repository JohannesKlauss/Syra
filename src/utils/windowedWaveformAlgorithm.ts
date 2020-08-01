export function createPointCloud(values: Float32Array, smoothing: number, halfHeight: number) {
  const t = performance.now();

  const pointCloud = [0, halfHeight];
  const halfLength = values.length / 2;

  for (let i = 0; i < values.length; i++) {
    if (i === halfLength) {
      pointCloud.push(0, halfHeight);
    }

    pointCloud.push(i < halfLength ? (i + 1) * smoothing : (i - halfLength + 1) * smoothing, halfHeight - values[i + 1] * halfHeight);
  }

  // Update the last value to end in the middle zero line of the canvas.
  pointCloud[pointCloud.length - 1] = halfHeight;
  pointCloud[(pointCloud.length / 2) - 1] = halfHeight;

  console.log('createPointCloud', performance.now() - t);

  return pointCloud;
}

/**
 * Reads a windowed part of a given audioBuffer
 * @param audioBuffer The buffer to read the values from
 * @param steps       The number of steps. This acts as resolution.
 */
export function windowedWaveformAlgorithm(audioBuffer: AudioBuffer, steps: number) {
  let t = performance.now();

  const length = audioBuffer.getChannelData(0).length;
  const sampleStep = Math.ceil(length / steps); // This number indicates how many samples are grouped together.

  const peakValues = new Float32Array(steps * 2); // Stores the peak values. Positives go to first half, negatives to second half.

  const channelLeftData = audioBuffer.getChannelData(0); // If the buffer has only one channel, the left one is mono.


  const channelRightData = audioBuffer.numberOfChannels > 1 ? audioBuffer.getChannelData(1) : new Float32Array(length);
  console.log('array creation', performance.now() - t);

  t = performance.now();

  let k = 0, min = 1, max = -1, bufferVal = 0;

  for (let i = 0; i < steps; i++) {
    min = 1;
    max = -1;

    for (let j = 0; j < sampleStep; j++) {
      bufferVal = 0;

      const dataLeft = channelLeftData[(i * sampleStep) + j];
      const dataRight = channelRightData[(i * sampleStep) + j];

      if (Math.abs(dataLeft) > Math.abs(bufferVal)) { // (i * step) is the bucket or starting index of the bucket.
        bufferVal = dataLeft;
      }

      if (Math.abs(dataRight) > Math.abs(dataRight)) {
        bufferVal = dataRight;
      }

      if (bufferVal < min) {
        min = bufferVal;
      }

      if (bufferVal > max) {
        max = bufferVal;
      }
    }

    peakValues[k] = max;
    peakValues[k + steps] = min;

    k++;
  }

  console.log('peakValues', performance.now() - t);

  return peakValues;
}
