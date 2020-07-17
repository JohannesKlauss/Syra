import { useCallback } from 'react';
import * as Tone from 'tone';

export default function useAudioDisconnect(audioIn: Tone.UserMedia, tonePlayers: Tone.Players) {
  return useCallback(() => {
    audioIn.close();
    Tone.disconnect(audioIn);
    Tone.disconnect(tonePlayers);
  }, [audioIn, tonePlayers]);
}