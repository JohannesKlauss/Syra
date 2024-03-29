import { transportStore } from '../../recoil/transportStore';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { projectStore } from '../../recoil/projectStore';
import { useEffect } from 'react';
import useToneJsTransport from './useToneJsTransport';
import { useInterval } from 'react-interval-hook';

export default function useTempoWatcher() {
  const transport = useToneJsTransport();
  const [currentTempo, setCurrentTempo] = useRecoilState(transportStore.currentTempo);
  const setTempoMap = useSetRecoilState(projectStore.tempoMap);
  const tempoMap = useRecoilValue(projectStore.tempoMap);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const isRecording = useRecoilValue(transportStore.isRecording);

  const { start, stop } = useInterval(() => setCurrentTempo(transport.bpm.value), 50, {
    autoStart: false,
  });

  useEffect(() => {
    // We will use this for later, when there are multiple tempi possible.
    //setCurrentTempo(transport.bpm.getValueAtTime(Tone.Time({ '4n': currentQuarter }).valueOf()));

    setCurrentTempo(tempoMap[0]);
  }, [tempoMap, setCurrentTempo]);

  useEffect(() => {
    if (isPlaying || isRecording) {
      start();
    }

    return () => stop();
  }, [isPlaying, isRecording, start, stop]);

  return {currentTempo, setTempoMap};
}
