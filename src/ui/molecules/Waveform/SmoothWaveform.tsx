import React, { useEffect, useRef } from 'react';
import { styled } from '@material-ui/core';
import { smoothWaveformAlgorithm } from '../../../utils/waveform';

interface CanvasProps {
  offsetX: number;
}

const CustomCanvas = styled('canvas')({
  marginLeft: ({offsetX}: CanvasProps) => offsetX,
});

interface Props {
  audioBuffer?: AudioBuffer;
  height: number;
  width: number;
  color?: string;
  offsetX?: number;
}

function SmoothWaveform({audioBuffer, height, width, color = '#fff', offsetX = 0}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const draw = () => {
      if (canvasRef.current === null || audioBuffer == null) {
        return;
      }

      const ctx = canvasRef.current.getContext('2d');

      if (ctx) {
        smoothWaveformAlgorithm(audioBuffer, width, height, color, ctx);
      }
    };

    requestAnimationFrame(draw);
  }, [audioBuffer, canvasRef, width, height, color]);

  return (
    <>
      Test
      <CustomCanvas ref={canvasRef} width={width} height={height} offsetX={offsetX}/>

    </>
  );
}

export default SmoothWaveform;
