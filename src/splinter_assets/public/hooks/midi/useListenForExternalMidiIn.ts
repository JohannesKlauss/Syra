import { useRecoilState } from 'recoil/dist';
import { keyboardMidiStore } from '../../recoil/keyboardMidiStore';
import { useEffect } from 'react';
import WebMidi from 'webmidi';
import { OnMidiEvent } from '../../types/Midi';

export default function useListenForExternalMidiIn(onMidiEvent: OnMidiEvent) {
  const [midiDevice] = useRecoilState(keyboardMidiStore.selectedMidiDevice);

  useEffect(() => {
    if (midiDevice === null) {
      return;
    }

    const input = WebMidi.getInputByName(midiDevice);

    if (input) {
      input.addListener('noteon', 'all', event => onMidiEvent(144, event.note.number, event.rawVelocity));
      input.addListener('noteoff', 'all', event => onMidiEvent(128, event.note.number, event.rawVelocity));
    }

    return () => {
      if (input) {
        input.removeListener('noteon', 'all', event => onMidiEvent(144, event.note.number, event.rawVelocity));
        input.removeListener('noteoff', 'all', event => onMidiEvent(128, event.note.number, event.rawVelocity));
      }
    }
  }, [midiDevice, onMidiEvent]);
}