import { useCallback } from 'react';
import { OnMidiEvent } from '../../types/Midi';

export default function useSendMidiToSoul(port?: MessagePort, isArmed?: boolean) {
  return useCallback<OnMidiEvent>((msg: number, note: number, velocity: number) => {
    const value = new Uint8Array(3);

    value[0] = msg;
    value[1] = note;
    value[2] = velocity;

    port && isArmed && port.postMessage({
      type: "MIDI_MESSAGE",
      value
    });
  }, [port, isArmed]);
}