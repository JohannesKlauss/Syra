import { useCallback } from 'react';

export default function useSendMidiToSoul(soulPatchNode?: AudioWorkletNode) {
  return useCallback((msg: number, note: number, velocity: number) => {
    const value = new Uint8Array(3);

    value[0] = msg;
    value[1] = note;
    value[2] = velocity;

    soulPatchNode?.port.postMessage({
      type: "MIDI_MESSAGE",
      value
    });
  }, [soulPatchNode]);
}