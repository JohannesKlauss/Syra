import { useRecoilState } from 'recoil/dist';
import { useCallback } from 'react';
import useListenForMidiIn from '../audio/useListenForMidiIn';
import { keyboardMidiStore } from '../../recoil/keyboardMidi';

export type MidiCallable = (msg: number, note: number, velocity: number) => void;

export default function usePiano(): [number[], MidiCallable] {
  const [activeMidis, setActiveMidis] = useRecoilState(keyboardMidiStore.activeKeyboardMidiNotes);

  // TODO: VELOCITY SHOULD BE UPDATED WHEN CHANGING, EVEN WHEN THE NOTE IS ALREADY IN THE STORE.
  const onEvent = useCallback((msg: number, note: number, velocity: number) => {
    if (msg === 144) {
      if (activeMidis.includes(note)) return;

      setActiveMidis(currVal => [...currVal, note]);
    }
    else if (msg === 128) {


      setActiveMidis(currVal => currVal.filter(val => val !== note));
    }
  }, [setActiveMidis, activeMidis]);

  useListenForMidiIn(onEvent);

  return [activeMidis, onEvent];
}