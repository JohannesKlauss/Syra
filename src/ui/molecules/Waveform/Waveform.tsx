/** Inspiration for this is taken from https://stackoverflow.com/a/25838151/735226 */
import React, { useEffect, useRef } from 'react';
import { styled } from '@material-ui/core';

interface Props {
  audioBuffer?: AudioBuffer;
  height: number;
  width: number;
  offsetX?: number;
}

interface CanvasProps {
  offsetX: number;
}

const CustomCanvas = styled('canvas')({
  marginLeft: ({offsetX}: CanvasProps) => offsetX,
});

function Waveform({ audioBuffer, height, width, offsetX = 0 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // TODO: THIS HAS TO BE HEAVILY OPTIMIZED. DURING RECORDING WE RECREATE EVERY LINE WHEN A NEW BUFFER CHUNK COMES IN.
  // WHAT WE SHOULD DO IS CHECK THE RECORDING STATE OF THE REGION AND THEN JUST DRAW OUT THE NEW LINES AND KEEP THE OLD ONES.
  useEffect(() => {
    const draw = () => {
      if (canvasRef.current === null || audioBuffer == null) {
        return;
      }

      const ctx = canvasRef.current.getContext('2d');
      const length = audioBuffer.getChannelData(0).length;
      const step = Math.ceil(length / width); // TODO: THIS STEP RESOLUTION IS ACTUALLY DETERMINED BY THE ZOOM LEVEL OF THE ARRANGE WINDOW.
      const halfHeight = height / 2;

      if (ctx) {
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
    };

    requestAnimationFrame(draw);
  }, [audioBuffer, canvasRef, width, height]);

  return (
    <CustomCanvas ref={canvasRef} width={width} height={height} offsetX={offsetX}/>
  );
}

export default Waveform;
