function downsampleBuffer(leftChannel, rightChannel, result, fromSampleRate, toSampleRate) {
  const stepSize = Math.ceil(fromSampleRate / toSampleRate);
  const mathAbs = Math.abs, mathMax = Math.max, mathMin = Math.min;

  let resultIndex = 0;
  let min = 1;
  let max = -1;

  for (let i = 0; i < leftChannel.length; i += stepSize) {
    min = 1;
    max = -1;

    for (let j = 0; j <= stepSize; j++) {
      const leftData = leftChannel[i + j];
      const rightData = rightChannel[i + j];

      max = mathMax(mathAbs(leftData), mathAbs(rightData), max);
      min = mathMin(leftData, rightData, min);
    }

    result[resultIndex++] = Math.round(mathAbs(min) > mathAbs(max) ? min * 255 : max * 255);
  }

  return result;
}

self.onmessage = function(evt) {
  const { channelLeftSab, channelRightSab, resultSab, ctxSampleRate, toSampleRate } = evt.data; // These are SharedArrayBuffers

  const result = new Uint8Array(resultSab);

  downsampleBuffer(new Float32Array(channelLeftSab), new Float32Array(channelRightSab), result, ctxSampleRate, toSampleRate)

  postMessage('done');
};

