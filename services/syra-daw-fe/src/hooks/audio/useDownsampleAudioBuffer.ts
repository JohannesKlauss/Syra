import { audioBufferStore } from '../../recoil/audioBufferStore';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import useAudioContext from './useAudioContext';
import { ARRANGE_GRID_WAVEFORM_SAMPLE_RATE } from '../../const/ui';

export default function useDownsampleAudioBuffer(bufferId: string) {
  const buffer = useRecoilValue(audioBufferStore.buffer(bufferId));
  const setPeaks = useSetRecoilState(audioBufferStore.peaks(bufferId));
  const context = useAudioContext();

  useEffect(() => {
    // TODO: THIS CAN SURELY BE A HOOK OF IT'S OWN WHICH RETURNS THE SET SABs.
    if (buffer === null) {
      return;
    }

    const byteLength = buffer.getChannelData(0).byteLength;

    const channelLeftSab = new SharedArrayBuffer(byteLength);
    const channelRightSab = new SharedArrayBuffer(byteLength);
    const resultSab = new SharedArrayBuffer(Math.floor(ARRANGE_GRID_WAVEFORM_SAMPLE_RATE * buffer.duration));
    const leftChannel = new Float32Array(channelLeftSab);
    const rightChannel = new Float32Array(channelRightSab);

    leftChannel.set(buffer.getChannelData(0));
    buffer.numberOfChannels === 2 ? rightChannel.set(buffer.getChannelData(1)) : rightChannel.fill(0);

    const worker = new Worker('worker/DownsampleBufferWorker.js');

    worker.postMessage({
      channelLeftSab,
      channelRightSab,
      resultSab,
      ctxSampleRate: context.sampleRate,
      toSampleRate: ARRANGE_GRID_WAVEFORM_SAMPLE_RATE,
    });

    worker.onmessage = () => setPeaks(resultSab);
  }, [buffer, setPeaks, context]);
}