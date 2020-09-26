import { audioBufferStore } from '../../recoil/audioBufferStore';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import useAudioContext from './useAudioContext';

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

    const leftChannel = new Float32Array(channelLeftSab);
    const rightChannel = new Float32Array(channelRightSab);

    leftChannel.set(buffer.getChannelData(0));
    buffer.numberOfChannels === 2 ? rightChannel.set(buffer.getChannelData(1)) : rightChannel.fill(0);

    const worker = new Worker('worker/DownsampleBufferWorker.js');

    console.log('postMessage');

    worker.postMessage({
      channelLeftSab,
      channelRightSab,
      ctxSampleRate: context.sampleRate,
      toSampleRate: 4000,
    });

    worker.onmessage = e => {
      console.log(e.data);

      setPeaks({
        leftChannel: e.data[0],
        rightChannel: e.data[1],
      });
    };
  }, [buffer, setPeaks, context]);
}