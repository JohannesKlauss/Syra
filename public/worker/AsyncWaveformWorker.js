importScripts('https://unpkg.com/konva@7.0.5/konva.min.js');

const offscreenCanvas = new OffscreenCanvas(1, 1);

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
stage.add(layer);

const waveform = new Konva.Line({
  points: [],
  fill: '#ffffff',
  closed: true,
  shadowForStrokeEnabled: false,
});
layer.add(waveform);

self.onmessage = function(evt) {
  // when canvas is passes we can start our worker
  // we can try to use that canvas for the layer with some manual replacement (and probably better performance)
  // but for simplicity we will just copy layer content into passed canvas
  if (evt.data.canvas) {
    const canvas = evt.data.canvas;
    // adapt stage size
    // we may need to add extra event to resize stage on a fly
    stage.setSize({
      width: evt.data.width,
      height: evt.data.height,
    });

    const ctx = canvas.getContext('2d');
    const offscreenContext = offscreenCanvas.getContext('2d');

    // Konva.Layer has support for "draw" event
    // so every time the layer is re-rendered we need to update the canvas
    layer.on('draw', async () => {
      // clear content
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // draw layer content
      //ctx.drawImage(layer.getCanvas()._canvas, 0, 0);
      offscreenContext.drawImage(layer.getCanvas()._canvas, 0, 0);

      ctx.drawImage(offscreenCanvas, 0, 0);

      postMessage({
        type: 'done',
        image: await offscreenCanvas.convertToBlob(),
      })
    });

    waveform.fill(evt.data.color);
    waveform.setAttr('points', evt.data.points);
    layer.draw();
  }
};
