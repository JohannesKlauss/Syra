import { useCallback } from 'react';
import * as Tone from 'tone';
import useToneAudioNodes from './useToneAudioNodes';
import { useRecoilValue } from 'recoil/dist';
import { transportStore } from '../../recoil/transportStore';

export default function useAudioDisconnect() {
  const {audioIn, players, merge} = useToneAudioNodes();
  const isSplinterRecording = useRecoilValue(transportStore.isRecording);

  return useCallback(() => {
    if (isSplinterRecording) {
      return;
    }

    Tone.disconnect(audioIn);
    Tone.disconnect(players);
    Tone.disconnect(merge);
  }, [audioIn, players, merge, isSplinterRecording]);
}