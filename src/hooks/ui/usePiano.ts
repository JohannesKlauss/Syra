import { useRecoilState } from 'recoil/dist';
import { activeKeyboardMidiNotes } from '../../recoil/atoms/keyboardMidi';
import { useCallback } from 'react';
import useListenForMidiIn from '../audio/useListenForMidiIn';

export type MidiCallable = (msg: number, note: number, velocity: number) => void;

export default function usePiano(onNote: MidiCallable): [number[], MidiCallable] {
  const [activeMidis, setActiveMidis] = useRecoilState(activeKeyboardMidiNotes);

  const onEvent = useCallback((msg: number, note: number, velocity: number) => {
    onNote(msg, note, velocity);

    if (msg === 144) {
      if (activeMidis.includes(note)) return;

      setActiveMidis(currVal => [...currVal, note]);
    }
    else if (msg === 128) {


      setActiveMidis(currVal => currVal.filter(val => val !== note));
    }
  }, [setActiveMidis, activeMidis, onNote]);

  useListenForMidiIn(onEvent);

  return [activeMidis, onEvent];
}