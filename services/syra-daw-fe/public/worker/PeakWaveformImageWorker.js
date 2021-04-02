
const scaleY = (amplitude, height) => {
  const range = 256;
  const offset = 128;

  return height - ((amplitude + offset) * height) / range;
};

onmessage = e => {
  const { width, height, color, correlation, waveform } = e.data;

  console.log('data', e.data);

  const canvas = new OffscreenCanvas(width, height);

  const instance = canvas.getContext('2d');

  instance.fillStyle = color;
  instance.beginPath();

  const channel = waveform.channel(0);

  // Loop forwards, drawing the upper half of the waveform
  for (let x = 0; x < waveform.length; x++) {
    const val = channel.max_sample(x);

    instance.lineTo(x * correlation + 0.5, scaleY(val, height) + 0.5);
  }

  // Loop backwards, drawing the lower half of the waveform
  for (let x = waveform.length - 1; x >= 0; x--) {
    const val = channel.min_sample(x);

    instance.lineTo(x * correlation + 0.5, scaleY(val, height) + 0.5);
  }

  instance.closePath();
  instance.stroke();
  instance.fill();

  postMessage({
    image: instance.getImageData(0, 0, width, height),
  })
}