import React, { useEffect, useRef } from 'react';
import { Box, styled } from '@material-ui/core';
import useAudioContext from '../../../hooks/audio/useAudioContext';
import { createWindowedWaveformV2 } from '../../../utils/waveform';
import { useRecoilState } from 'recoil/dist';
import { audioBufferStore } from '../../../recoil/audioBufferStore';
import useTrimmedRegionWidth from '../../../hooks/ui/region/useTrimmedRegionWidth';
import useWorker from '../../../hooks/core/useWorker';

interface WaveformProps {
  width: number; // This is to support sharp edges on retina displays.
  height: number;
}

const Waveform = styled(Box)({
  width: ({ width }: WaveformProps) => width,
  height: ({ height }: WaveformProps) => height,
  willChange: 'transform',
  position: 'absolute',
  top: 0,
});

interface Props {
  buffer?: AudioBuffer | ArrayBuffer | null;
  bufferId: string | null;
  height: number;
  completeWidth: number;
  smoothing?: number;
  color?: string;
}

function WindowedWaveform({ buffer, height, completeWidth, color = '#fff', smoothing, bufferId }: Props) {
  const pointCloudId = `${bufferId}.${completeWidth}.${height}.${smoothing}`;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioBuffer = useRef<AudioBuffer | ArrayBuffer | null | undefined>(buffer);
  const [waveformPointCloud, setWaveformPointCloud] = useRecoilState(audioBufferStore.waveform(pointCloudId));
  const [waveformImage, setWaveformImage] = useRecoilState(audioBufferStore.waveformImage(pointCloudId));
  const audioContext = useAudioContext();
  const trimmedWidth = useTrimmedRegionWidth();
  const worker = useWorker('worker/AsyncWaveformWorker.js');

  useEffect(() => {
    if (audioBuffer.current instanceof AudioBuffer && waveformPointCloud.length === 0 && completeWidth > 0 && canvasRef.current) {
      setWaveformPointCloud(createWindowedWaveformV2(audioBuffer.current, completeWidth, height, smoothing));
    }
  }, [audioBuffer, waveformPointCloud, completeWidth, canvasRef]);

  // When the buffer changes we decode it.
  useEffect(() => {
    if (buffer && audioBuffer.current == null) {
      (async () => {
        audioBuffer.current = (buffer instanceof ArrayBuffer) ? await audioContext.decodeAudioData(buffer) : buffer;
      })();
    }
  }, [buffer, audioContext, audioBuffer]);

  useEffect(() => {
    if (waveformPointCloud.length !== 0 && worker.current && canvasRef.current) {
      const offscreen = canvasRef.current.transferControlToOffscreen();

      worker.current.postMessage({
        width: completeWidth,
        height: height,
        points: waveformPointCloud,
        canvas: offscreen,
        color,
      }, [offscreen]);
    }
  }, [waveformPointCloud, worker, canvasRef]);

  useEffect(() => {
    if (worker.current) {
      worker.current.onmessage = e => {
        setTimeout(() => {
          console.log('image', URL.createObjectURL(e.data.image));
          setWaveformImage(URL.createObjectURL(e.data.image));
        }, 1);
      };
    }
  },[worker, canvasRef, setWaveformImage]);

  useEffect(() => {
    console.log('wave', waveformImage);
  }, [waveformImage]);

  return (
    <>
      <canvas ref={canvasRef} style={{ display: 'none' }} width={completeWidth} height={height}/>
      <Waveform width={trimmedWidth} height={height} style={{ backgroundImage: `url(${waveformImage})` }}/>
    </>
  );
}

WindowedWaveform.whyDidYouRender = true;

export default React.memo(WindowedWaveform);
