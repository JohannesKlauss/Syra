importScripts('https://unpkg.com/konva@7.0.5/konva.min.js');

// monkeypatch Konva for offscreen canvas usage
Konva.Util.createCanvasElement = () => {
  const canvas = new OffscreenCanvas(1, 1);
  canvas.style = {};
  return canvas;
};

// now we can create our canvas content
var stage = new Konva.Stage({
  width: 200,
  height: 200,
});

var layer = new Konva.Layer();
stage.add(layer);

// "add more bunnies" button
var button = new Konva.Label({
  x: 5,
  y: 5,
  opacity: 0.75,
});
layer.add(button);

button.add(
  new Konva.Tag({
    fill: 'black',
  }),
);

button.add(
  new Konva.Text({
    text: 'Push me to add bunnies',
    fontFamily: 'Calibri',
    fontSize: 18,
    padding: 5,
    fill: 'white',
  }),
);

self.onmessage = function(evt) {
  // when canvas is passes we can start our worker
  // we can try to use that canvas for the layer with some manual replacement (and probably better performance)
  // but for simplicity we will just copy layer content into passed canvas
  if (evt.data.canvas) {
    var canvas = evt.data.canvas;
    // adapt stage size
    // we may need to add extra event to resize stage on a fly
    stage.setSize({
      width: canvas.width,
      height: canvas.height,
    });

    const ctx = canvas.getContext('2d');

    // Konva.Layer has support for "draw" event
    // so every time the layer is re-rendered we need to update the canvas
    layer.on('draw', async () => {
      // clear content
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // draw layer content
      ctx.drawImage(layer.getCanvas()._canvas, 0, 0);

      postMessage({
        type: 'done',
        image: await ctx.getImageData(0, 0, canvas.width, canvas.height),
      })
    });

    layer.draw();
  }
};
