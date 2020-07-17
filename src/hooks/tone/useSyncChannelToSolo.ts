import { useEffect } from 'react';
import * as Tone from 'tone';

export default function useSyncChannelToSolo(isSolo: boolean, toneChannel: Tone.Channel) {
  useEffect(() => {
    toneChannel.set({ solo: isSolo });
  }, [isSolo, toneChannel]);
}