import { useRecoilState } from 'recoil/dist';
import WebMidi from 'webmidi';
import { useEffect } from 'react';
import { keyboardMidiStore } from '../../recoil/keyboardMidiStore';

/**
 * This hook listens to MIDI in and triggers whatever callback is given.
 *
 * @param onNote
 * @param doHaltTrigger In some cases (for example mute channel or unarmed channel) you don't want to actually execute the trigger. This is what this parameter is for.
 */
export default function useListenForMidiIn(onNote: (msg: number, note: number, velocity: number) => void, doHaltTrigger?: boolean) {
  const [midiDevice] = useRecoilState(keyboardMidiStore.selectedMidiDevice);

  useEffect(() => {
    const input = WebMidi.getInputByName(midiDevice);

    if (input) {
      input.addListener('noteon', 'all', event => onNote(144, event.note.number, event.rawVelocity));
      input.addListener('noteoff', 'all', event => onNote(128, event.note.number, event.rawVelocity));
    }

    return () => {
      if (input) {
        input.removeListener('noteon', 'all', event => onNote(144, event.note.number, event.rawVelocity));
        input.removeListener('noteoff', 'all', event => onNote(128, event.note.number, event.rawVelocity));
      }
    }
  }, [midiDevice, onNote]);
}