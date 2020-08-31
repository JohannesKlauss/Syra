function createPointCloud(values, smoothing, halfHeight) {
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
 * @param channelLeftData The buffer to read the values from
 * @param channelRightData The buffer to read the values from
 * @param steps       The number of steps. This acts as resolution.
 */
function windowedWaveformAlgorithm(channelLeftData, channelRightData, steps) {
  const mathAbs = Math.abs, mathMax = Math.max, mathMin = Math.min; // Local copies for performance increase

  const length = channelLeftData.length;
  const sampleStep = Math.ceil(length / steps); // This number indicates how many samples are grouped together.
  const peakValues = new Float32Array(steps * 2); // Stores the peak values. Positives go to first half, negatives to second half.

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

function createWindowedWaveformV2(channelLeftData, channelRightData, width, height, smoothing = 2) {
  const steps = Math.ceil(width / smoothing) + 1;
  const peakValues = windowedWaveformAlgorithm(channelLeftData, channelRightData, steps);

  return createPointCloud(peakValues, smoothing, height / 2);
}

self.onmessage = function(evt) {
  if (evt.data.channelLeftData && evt.data.channelRightData) {
    const {channelLeftData, channelRightData, width, height, smoothing} = evt.data;

    const localLeft = new Float32Array(channelLeftData);
    const localRight = new Float32Array(channelRightData);

    postMessage(createWindowedWaveformV2(localLeft, localRight, width, height, smoothing));
  }
};