import { useCallback } from 'react';
import { SoulInstance } from '../../types/SoulInstance';

export default function useSendMidiToSoul(soulInstance?: SoulInstance) {
  return useCallback((msg: number, note: number, velocity: number) => {
    const value = new Uint8Array(3);

    value[0] = msg;
    value[1] = note;
    value[2] = velocity;

    soulInstance?.audioNode.port.postMessage({
      type: "MIDI_MESSAGE",
      value
    });
  }, [soulInstance]);
}