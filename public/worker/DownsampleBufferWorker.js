function downsampleBuffer(leftChannel, rightChannel, fromSampleRate, toSampleRate) {
  const stepSize = Math.ceil(toSampleRate / fromSampleRate);
  const mathAbs = Math.abs, mathMax = Math.max, mathMin = Math.min;

  console.log('leftChannel', leftChannel);

  const result = new Float32Array(Math.ceil(leftChannel.length * (toSampleRate / fromSampleRate)));

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

    result[resultIndex++] = mathAbs(min) > mathAbs(max) ? min : max;
  }

  return result;
}

self.onmessage = function(evt) {
  const { channelLeftSab, channelRightSab, ctxSampleRate, toSampleRate } = evt.data; // These are SharedArrayBuffers

  postMessage(downsampleBuffer(new Float32Array(channelLeftSab), new Float32Array(channelRightSab), ctxSampleRate, toSampleRate));
};

