import { useCallback } from 'react';
import * as Tone from 'tone';
import useToneAudioNodes from './useToneAudioNodes';

export default function useAudioDisconnect() {
  const {audioIn, players, merge} = useToneAudioNodes();

  return useCallback(() => {
    audioIn.close();
    Tone.disconnect(audioIn);
    Tone.disconnect(players);
    Tone.disconnect(merge);
  }, [audioIn, players]);
}