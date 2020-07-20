import { useCallback } from 'react';
import * as Tone from 'tone';
import useToneAudioNodes from './useToneAudioNodes';
import { useRecoilValue } from 'recoil/dist';
import { projectStore } from '../../recoil/projectStore';

export default function useAudioDisconnect() {
  const {audioIn, players, merge} = useToneAudioNodes();
  const isSplinterRecording = useRecoilValue(projectStore.isRecording);

  return useCallback(() => {
    if (isSplinterRecording) {
      return;
    }

    audioIn.close();
    Tone.disconnect(audioIn);
    Tone.disconnect(players);
    Tone.disconnect(merge);
  }, [audioIn, players, merge, isSplinterRecording]);
}