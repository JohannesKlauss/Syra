import { useEffect } from 'react';
import * as Tone from 'tone';
import useToneAudioNodes from './useToneAudioNodes';

export default function useSyncChannelToSolo(isSolo: boolean) {
  const {channel} = useToneAudioNodes();

  useEffect(() => {
    channel.set({ solo: isSolo });
  }, [isSolo, channel]);
}