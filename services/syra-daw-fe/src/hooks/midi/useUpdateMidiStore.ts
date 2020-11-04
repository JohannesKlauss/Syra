import { useCallback } from 'react';
import { OnMidiEvent } from '../../types/Midi';
import { useSetRecoilState } from 'recoil';
import { keyboardMidiStore } from '../../recoil/keyboardMidiStore';

export default function useUpdateMidiStore() {
  const setActiveMidis = useSetRecoilState(keyboardMidiStore.activeKeyboardMidiNotes);

  return useCallback<OnMidiEvent>(((msg, note, velocity) => {
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