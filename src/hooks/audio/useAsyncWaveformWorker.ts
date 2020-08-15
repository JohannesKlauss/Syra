import { useEffect } from 'react';
import useWorker from '../core/useWorker';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { audioBufferStore } from '../../recoil/audioBufferStore';
import useRegionWidth from '../ui/region/useRegionWidth';

export default function useAsyncWaveformWorker(bufferId: string, height: number, color: string, smoothing?: number ) {
  const completeWidth = useRegionWidth();

  const pointCloudId = `${bufferId}.${completeWidth}.${height}.${smoothing}`;

  const buffer = useRecoilValue(audioBufferStore.buffer(bufferId));
  const [waveformImage, setWaveformImage] = useRecoilState(audioBufferStore.waveformImage(pointCloudId));

  const waveformWorker = useWorker('worker/SmoothWaveform.js');
  const renderWorker = useWorker('worker/AsyncWaveformWorker.js');

  useEffect(() => {
    if (buffer instanceof AudioBuffer && waveformImage.length === 0 && completeWidth > 0 && waveformWorker.current) {
      const t = performance.now();

      waveformWorker.current.postMessage({
        channelLeftData: buffer.getChannelData(0),
        channelRightData: buffer.numberOfChannels > 1 ? buffer.getChannelData(1) : new Float32Array(buffer.getChannelData(0).length),
        width: completeWidth,
        height,
        smoothing,
      });

      console.log('time', performance.now() - t);
    }
  }, [buffer, waveformImage, completeWidth, waveformWorker, height, smoothing]);

  useEffect(() => {
    if (waveformWorker.current) {
      waveformWorker.current.onmessage = e => {
        renderWorker.current && renderWorker.current.postMessage({
          width: completeWidth,
          height,
          points: e.data,
          color,
        });
      }
    }
  }, [waveformWorker, renderWorker, completeWidth, height, color]);

  useEffect(() => {
    if (renderWorker.current) {
      renderWorker.current.onmessage = e => setWaveformImage(e.data);
    }
  },[renderWorker, setWaveformImage]);

  return pointCloudId;
}