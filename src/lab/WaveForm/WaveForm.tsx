/** Inspiration for this is taken from https://stackoverflow.com/a/25838151/735226 */
import React, { useEffect, useRef } from 'react';

interface Props {
  audioBuffer?: AudioBuffer;
}

function WaveForm({ audioBuffer }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current === null || audioBuffer == null) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d');
    const width = 300;
    const length = audioBuffer.getChannelData(0).length;
    const step = Math.ceil( length / width); // TODO: THIS STEP RESOLUTION IS ACTUALLY DETERMINED BY THE ZOOM LEVEL OF THE ARRANGE WINDOW.
    const halfHeight = 35; // TODO: THIS WILL BE DERIVED FROM THE arrangeWindowStore ONCE WE GET ZOOMABLE TRACKS GOING.

    if(ctx) {
      ctx.fillStyle = '#fff';
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
  }, [audioBuffer, canvasRef]);

  return (
    <canvas ref={canvasRef}/>
  );
}

export default WaveForm;
