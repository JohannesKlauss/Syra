function createPath(points, resolution, halfHeight) {
  const region = new Path2D();
  region.moveTo(0, halfHeight);

  for(let i = 0; i < points.length; i++) {
    if (i === points.length - 1) {
      region.lineTo(i * resolution + 1, halfHeight);
      region.lineTo(0, halfHeight);
    }
    else {
      region.lineTo((i + 1) * resolution, halfHeight - points[i + 1] * halfHeight);
    }
  }

  region.closePath();

  return region;
}

function smoothWaveformAlgorithm(audioBuffer, width, height, color, ctx, smoothing = 2) {
  const length = audioBuffer.getChannelData(0).length;
  const step = Math.ceil(length / (width / smoothing));
  const halfHeight = height / 2;

  ctx.fillStyle = color;
  ctx.clearRect(0, 0, width, height);

  const negativeValuesPath = [];
  const positiveValuesPath = [];

  for (let i = 0; i < Math.ceil(width / smoothing); i++) {
    let min = 1, max = -1;

    for (let j = 0; j < step; j++) {
      let bufferVal = 0;

      for (let k = 0; k < audioBuffer.numberOfChannels; k++) {
        const data = audioBuffer.getChannelData(k);

        if (Math.abs(data[(i * step) + j]) > Math.abs(bufferVal)) { // (i * step) is the bucket or starting index of the bucket.
          bufferVal = data[(i * step) + j];
        }
      }

      if (bufferVal < min) {
        min = bufferVal;
      }

      if (bufferVal > max) {
        max = bufferVal;
      }
    }

    negativeValuesPath.push(min);
    positiveValuesPath.push(max);
  }

  ctx.fill(createPath(positiveValuesPath, smoothing, halfHeight));
  ctx.fill(createPath(negativeValuesPath, smoothing, halfHeight));
}

function convertToWaveform(data) {
  smoothWaveformAlgorithm(data.audioBuffer, data.width, data.height, data.color, data.ctx, data.smoothing);
}

onmessage = ({data}) => {
  switch (data.type) {
    case 'CONVERT':
      convertToWaveform(data.data);
  }
}