import { useRecoilState } from 'recoil/dist';
import { selectedMidiDevice } from '../../recoil/atoms/keyboardMidi';
import WebMidi from 'webmidi';
import { useEffect } from 'react';

export default function useListenForMidiIn(onNote: (msg: number, note: number, velocity: number) => void) {
  const [midiDevice] = useRecoilState(selectedMidiDevice);

  useEffect(() => {
    const input = WebMidi.getInputByName(midiDevice);

    if (input) {
      input.addListener('noteon', 'all', event => onNote(144, event.note.number, event.rawVelocity));
      input.addListener('noteoff', 'all', event => onNote(128, event.note.number, event.rawVelocity));
    }

    return () => {
      if (input) {
        input.removeListener('noteon');
        input.removeListener('noteoff');
      }
    }
  }, [midiDevice, onNote]);
}