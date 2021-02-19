import { useCallback } from 'react';
import { MidiEventCallable } from '../../types/Midi';

export default function useSendMidiToSoul(filter: () => boolean, port?: MessagePort) {
  return useCallback<MidiEventCallable>((msg: number, note: number, velocity: number) => {
    const value = new Uint8Array(3);

    value[0] = msg;
    value[1] = note;
    value[2] = velocity;

    port && filter() && port.postMessage({
      type: "MIDI_MESSAGE",
      value
    });
  }, [port, filter]);
}