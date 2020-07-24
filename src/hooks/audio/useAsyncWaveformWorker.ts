import { useCallback, useEffect, useRef } from 'react';
import useAudioContext from './useAudioContext';

export default function useAsyncWaveformWorker() {
  const ctx = useAudioContext();
  const worker = useRef(new Worker('worker/AsyncWaveformWorker.js'));

  useEffect(() => {
    worker.current.onmessage = ({ data }) => {
    };
  }, []);

  return useCallback((chunk: Blob) => {
    const fileReader = new FileReader();

    fileReader.onloadend = async () => {
      const buffer = await ctx.decodeAudioData(fileReader.result as ArrayBuffer);
      const data = [];

      for (let i = 0; i < buffer.numberOfChannels; i++) {
        data.push(buffer.getChannelData(i));
      }

      worker.current.postMessage({
        type: 'PUSH',
        data,
      });
    };

    fileReader.readAsArrayBuffer(chunk);
  }, []);
}