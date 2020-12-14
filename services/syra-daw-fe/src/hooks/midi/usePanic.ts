import { useCallback } from 'react';
import createMidiMessage from '../../utils/midi';

export default function usePanic(port?: MessagePort) {
  return useCallback(() => {
    if (port == null) {
      return;
    }

    setTimeout(() => {
      for (let channel = 128; channel < 144; channel++) {
        for (let note = 0; note < 128; note++) {
          port.postMessage({
            type: 'MIDI_MESSAGE',
            value: createMidiMessage(channel, note, 0),
          });
        }
      }
    }, 50);
  }, [port]);
}
