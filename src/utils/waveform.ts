export function smoothWaveformAlgorithm(audioBuffer: AudioBuffer, width: number, height: number, color: string, ctx: CanvasRenderingContext2D, smoothing: number = 0.7) {
  const length = audioBuffer.getChannelData(0).length;
  const step = Math.ceil(length / width);
  const halfHeight = height / 2;

  if (ctx) {
    ctx.fillStyle = color;
  }

  for (let i = 0; i < width; i++) {
    let min = 1, max = -1;

    for (let j = 0; j < step; j++) {
      let bufferVal = 0;

      for (let k = 0; k < audioBuffer.numberOfChannels; k++) {
        const data = audioBuffer.getChannelData(k);

        if (Math.abs(data[(i * step) + j]) > Math.abs(bufferVal)) {
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

    ctx?.fillRect(i, (1 + min) * halfHeight, 1, Math.max(1, (max - min) * halfHeight));
  }
}