import React, { useEffect, useRef } from 'react';
import { styled } from '@material-ui/core';
import { createCachedWaveformFactory } from '../../../utils/waveform';
import useAudioContext from '../../../hooks/audio/useAudioContext';
import { createNewId } from '../../../utils/createNewId';
import useCanvasScaling from '../../../hooks/ui/useCanvasScaling';

interface CanvasProps {
  offsetX: number;
  origWidth: number; // This is to support sharp edges on retina displays.
  origHeight: number;
}

const CustomCanvas = styled('canvas')({
  marginLeft: ({ offsetX }: CanvasProps) => offsetX,
  width: ({origWidth}: CanvasProps) => origWidth,
  height: ({origHeight}: CanvasProps) => origHeight,
});

interface Props {
  buffer?: AudioBuffer | ArrayBuffer;
  bufferId?: string;
  height: number;
  width: number;
  smoothing?: number;
  color?: string;
  offsetX?: number;
}

const SmoothWaveform: React.FC<Props> = React.memo(({ buffer, height, width, color = '#fff', offsetX = 0, smoothing, bufferId }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContext = useAudioContext();
  const waveformCreator = useRef(createCachedWaveformFactory(bufferId || createNewId('buffer-')));

  useEffect(() => {
    const draw = async () => {
      if (canvasRef.current === null || buffer == null) {
        return;
      }

      const ctx = canvasRef.current.getContext('2d');

      if (ctx) {
        const audioBuffer = (buffer instanceof ArrayBuffer) ? await audioContext.decodeAudioData(buffer) : buffer;

        waveformCreator.current(audioBuffer, width, height, color, ctx, smoothing);
      }
    };

    requestAnimationFrame(draw);
  }, [buffer, canvasRef, width, height, color, audioContext, smoothing]);

  useCanvasScaling(canvasRef, width, height);

  return (
    <CustomCanvas ref={canvasRef} width={width} height={height} offsetX={offsetX} origWidth={width} origHeight={height}/>
  );
});

// @ts-ignore
SmoothWaveform.whyDidYouRender = true;

export default SmoothWaveform;
