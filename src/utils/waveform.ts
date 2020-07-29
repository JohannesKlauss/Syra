function memoizedPath(bufferId: string): (points: number[][], resolution: number, halfHeight: number, color: string) => HTMLCanvasElement {
  const cache: { [name: string]: HTMLCanvasElement } = {}; // Key is composed of {bufferId}.{points.length}.{resolution}.{halfHeight}
  const scale = window.devicePixelRatio;

  return (points: number[][], resolution: number, halfHeight: number, color: string) => {
    const key = `${bufferId}.${points[0].length}.${resolution}.${halfHeight}`;

    if (cache[key]) {
      console.log('from cache', key);

      return cache[key];
    }

    console.log('recalc');

    const width = (resolution + 1) * points[0].length;
    const canvasTemp = document.createElement('canvas');

    const tCtx = canvasTemp.getContext('2d');

    if (tCtx) {
      tCtx && tCtx.scale(scale, scale);

      canvasTemp.width = Math.floor(width * scale);
      canvasTemp.height = Math.floor(halfHeight * 2 * scale);

      tCtx.clearRect(0, 0, width, halfHeight * 2);
      tCtx.fillStyle = color;
      tCtx.fill(createPath(points[0], resolution, halfHeight));
      tCtx.fill(createPath(points[1], resolution, halfHeight));

      cache[key] = tCtx.canvas;

      return tCtx.canvas;
    }

    throw new Error('Waveform Caching: Temporary canvas is not available.');
  };
}

function createPath(points: number[], resolution: number, halfHeight: number) {
  const path = new Path2D();
  path.moveTo(0, halfHeight);

  for (let i = 0; i < points.length; i++) {
    if (i === points.length - 1) {
      path.lineTo(i * resolution + 1, halfHeight);
      path.lineTo(0, halfHeight);
    } else {
      path.lineTo((i + 1) * resolution, halfHeight - points[i + 1] * halfHeight);
    }
  }

  path.closePath();

  return path;
}

function smoothWaveformAlgorithm(audioBuffer: AudioBuffer, width: number, height: number, color: string, smoothing: number = 2) {
  const length = audioBuffer.getChannelData(0).length;
  const step = Math.ceil(length / (width / smoothing));

  const negativeValues = [];
  const positiveValues = [];

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

    negativeValues.push(min);
    positiveValues.push(max);
  }

  return { negativeValues, positiveValues };
}

export function createCachedWaveformFactory(bufferId: string) {
  const pathCreator = memoizedPath(bufferId);

  return (audioBuffer: AudioBuffer, width: number, height: number, color: string, ctx: CanvasRenderingContext2D, smoothing: number = 2) => {
    const { positiveValues, negativeValues } = smoothWaveformAlgorithm(audioBuffer, width, height, color, smoothing);

    const canvas = pathCreator([positiveValues, negativeValues], smoothing, height / 2, color);

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(canvas, 0, 0);
  };
}