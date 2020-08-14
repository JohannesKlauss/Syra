importScripts('https://unpkg.com/konva@7.0.5/konva.min.js');

const offscreenCanvas = new OffscreenCanvas(1, 1);
const offscreenContext = offscreenCanvas.getContext('2d');

// monkeypatch Konva for offscreen canvas usage
Konva.Util.createCanvasElement = () => {
  offscreenCanvas.style = {};
  return offscreenCanvas;
};

// now we can create our canvas content
const stage = new Konva.Stage({
  width: 200,
  height: 200,
});

const layer = new Konva.Layer();

const waveform = new Konva.Line({
  points: [],
  fill: '#ffffff',
  closed: true,
  shadowForStrokeEnabled: false,
});

stage.add(layer);
layer.add(waveform);

layer.on('draw', async () => {
  offscreenContext.drawImage(layer.getCanvas()._canvas, 0, 0);

  postMessage(URL.createObjectURL(await offscreenCanvas.convertToBlob()));
});

self.onmessage = function(evt) {
  if (evt.data.points) {
    stage.setSize({
      width: evt.data.width,
      height: evt.data.height,
    });

    waveform.fill(evt.data.color);
    waveform.setAttr('points', evt.data.points);
    layer.draw();
  }
};
