import { useEffect } from 'react';
import useWorker from '../core/useWorker';
import { createWindowedWaveformV2 } from '../../utils/waveform';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { audioBufferStore } from '../../recoil/audioBufferStore';
import useRegionWidth from '../ui/region/useRegionWidth';

export default function useAsyncWaveformWorker(bufferId: string, height: number, color: string, smoothing?: number ) {
  const completeWidth = useRegionWidth();

  const pointCloudId = `${bufferId}.${completeWidth}.${height}.${smoothing}`;

  const buffer = useRecoilValue(audioBufferStore.buffer(bufferId));
  const [waveformImage, setWaveformImage] = useRecoilState(audioBufferStore.waveformImage(pointCloudId));

  const worker = useWorker('worker/AsyncWaveformWorker.js');

  useEffect(() => {
    if (buffer instanceof AudioBuffer && waveformImage.length === 0 && completeWidth > 0 && worker.current) {
      const points = createWindowedWaveformV2(buffer, completeWidth, height, smoothing);

      worker.current.postMessage({
        width: completeWidth,
        height,
        points,
        color,
      });
    }
  }, [buffer, waveformImage, completeWidth, worker, height, color]);

  useEffect(() => {
    if (worker.current) {
      worker.current.onmessage = e => setWaveformImage(e.data);
    }
  },[worker, setWaveformImage]);

  return pointCloudId;
}