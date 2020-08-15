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

  const renderWorker = useWorker('worker/AsyncWaveformWorker.js');

  useEffect(() => {
    if (buffer instanceof AudioBuffer && waveformImage.length === 0 && completeWidth > 0 && renderWorker.current) {
      // TODO: THIS IS THE POOR MANS VERSION OF ASYNC, WE SHOULD IMPROVE THIS.
      setTimeout(() => {
        const points = createWindowedWaveformV2(buffer, completeWidth, height, smoothing);

        renderWorker.current && renderWorker.current.postMessage({
          width: completeWidth,
          height,
          points,
          color,
        });
      }, 20);
    }
  }, [buffer, waveformImage, completeWidth, renderWorker, height, color, smoothing]);

  useEffect(() => {
    if (renderWorker.current) {
      renderWorker.current.onmessage = e => setWaveformImage(e.data);
    }
  },[renderWorker, setWaveformImage]);

  return pointCloudId;
}