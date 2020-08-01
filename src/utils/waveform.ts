export function createPointCloud(values: Float32Array, smoothing: number, halfHeight: number) {
  const pointCloud = [0, halfHeight];
  const halfLength = values.length / 2;

  for (let i = 0; i < values.length; i++) {
    if (i === halfLength) {
      pointCloud.push(0, halfHeight);
    }

    pointCloud.push(i < halfLength ? (i + 1) * smoothing : (i - halfLength + 1) * smoothing, halfHeight - (values[i + 1] || 0) * halfHeight);
  }

  // Update the last value to end in the middle zero line of the canvas.
  pointCloud[pointCloud.length - 1] = halfHeight;
  pointCloud[(pointCloud.length / 2) - 1] = halfHeight;

  return pointCloud;
}

/**
 * @param audioBuffer The buffer to read the values from
 * @param steps       The number of steps. This acts as resolution.
 */
export function windowedWaveformAlgorithm(audioBuffer: AudioBuffer, steps: number) {
  const mathAbs = Math.abs, mathMax = Math.max, mathMin = Math.min; // Local copies for performance increase

  const length = audioBuffer.getChannelData(0).length;
  const sampleStep = Math.ceil(length / steps); // This number indicates how many samples are grouped together.
  const peakValues = new Float32Array(steps * 2); // Stores the peak values. Positives go to first half, negatives to second half.
  const channelLeftData = audioBuffer.getChannelData(0); // If the buffer has only one channel, the left one is mono.
  const channelRightData = audioBuffer.numberOfChannels > 1 ? audioBuffer.getChannelData(1) : new Float32Array(length);

  let k = 0, min = 1, max = -1;

  for (let i = 0; i < steps; i++) {
    min = 0;
    max = 0;

    for (let j = 0; j < sampleStep; j++) {
      const dataLeft = channelLeftData[(i * sampleStep) + j]; // (i * step) is the bucket or starting index of the bucket.
      const dataRight = channelRightData[(i * sampleStep) + j];

      max = mathMax(mathAbs(dataLeft), mathAbs(dataRight), max);
      min = mathMin(dataLeft, dataRight, min);
    }

    peakValues[k] = max;
    peakValues[k + steps] = min;

    k++;
  }

  return peakValues;
}

export function createWindowedWaveformV2Factory(audioBuffer: AudioBuffer, width: number, height: number, smoothing: number = 2) {
  const steps = Math.ceil(width / smoothing);
  const peakValues = windowedWaveformAlgorithm(audioBuffer, steps);

  return createPointCloud(peakValues, smoothing, height / 2);
}