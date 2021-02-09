import { useEffect } from 'react';
import useWorker from '../core/useWorker';
import { useRecoilState, useRecoilValue } from 'recoil';
import { audioBufferStore } from '../../recoil/audioBufferStore';
import useSharedAudioBufferMemory from '../core/useSharedAudioBufferMemory';

export default function useAsyncWaveformWorker(bufferId: string, height: number, color: string, smoothing?: number ) {
  const completeWidth = 300;

  const pointCloudId = `${bufferId}.${completeWidth}.${height}.${smoothing}`;

  const buffer = useRecoilValue(audioBufferStore.buffer(bufferId));
  const [waveformImage, setWaveformImage] = useRecoilState(audioBufferStore.waveformImage(pointCloudId));

  const waveformWorker = useWorker('worker/SmoothWaveform.js');
  const renderWorker = useWorker('worker/AsyncWaveformWorker.js');

  const {channelLeftSab, channelRightSab} = useSharedAudioBufferMemory(buffer?.getChannelData(0).byteLength ?? 0);

  useEffect(() => {
    if (channelLeftSab.byteLength > 0 && waveformImage.length === 0 && completeWidth > 0 && waveformWorker.current && buffer) {
      const leftChannel = new Float32Array(channelLeftSab);
      const rightChannel = new Float32Array(channelRightSab);

      leftChannel.set(buffer.getChannelData(0));
      buffer.numberOfChannels === 2 ? rightChannel.set(buffer.getChannelData(1)) : rightChannel.fill(0);

      waveformWorker.current.postMessage({
        channelLeftData: channelLeftSab,
        channelRightData: channelRightSab,
        width: completeWidth,
        height,
        smoothing,
      });
    }
  }, [buffer, waveformImage, completeWidth, waveformWorker, height, smoothing, channelLeftSab, channelRightSab]);

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