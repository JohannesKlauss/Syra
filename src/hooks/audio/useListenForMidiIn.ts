import { useRecoilState } from 'recoil/dist';
import { selectedMidiDevice } from '../../recoil/atoms/keyboardMidi';
import WebMidi from 'webmidi';
import { useEffect } from 'react';

export default function useListenForMidiIn(play: (midi: number, velocity: number) => void, stop: (midi: number, velocity: number) => void) {
  const [midiDevice] = useRecoilState(selectedMidiDevice);

  useEffect(() => {
    const input = WebMidi.getInputByName(midiDevice);

    if (input) {
      input.addListener('noteon', 'all', event => play(event.note.number, event.rawVelocity));
      input.addListener('noteoff', 'all', event => stop(event.note.number, event.rawVelocity));
    }

    return () => {
      if (input) {
        input.removeListener('noteon');
        input.removeListener('noteoff');
      }
    }
  }, [midiDevice]);
}