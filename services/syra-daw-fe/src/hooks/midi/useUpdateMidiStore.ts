import { useCallback } from 'react';
import { MidiEventCallable } from '../../types/Midi';
import { useSetRecoilState } from 'recoil';
import { keyboardMidiStore } from '../../recoil/keyboardMidiStore';

export default function useUpdateMidiStore() {
  const setActiveMidis = useSetRecoilState(keyboardMidiStore.activeKeyboardMidiNotes);

  return useCallback<MidiEventCallable>(((msg, note, velocity) => {
    setActiveMidis(currVal => {
      if (msg === 144 && !currVal.includes(note)) {
        return [...currVal, note];
      }
      else if (msg === 128) {
        return currVal.filter(val => val !== note);
      }

      return currVal;
    });
  }), [setActiveMidis]);
}