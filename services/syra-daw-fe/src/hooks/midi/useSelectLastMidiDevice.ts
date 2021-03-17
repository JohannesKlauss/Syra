import { useRecoilCallback } from "recoil";
import { keyboardMidiStore } from "../../recoil/keyboardMidiStore";

export default function useSelectLastMidiDevice() {
  return useRecoilCallback(({set}) => () => {
    const device = localStorage.getItem('keyboardMidi/selectedMidiDevice');

    if (device) {
      set(keyboardMidiStore.selectedMidiDevice, device);
    }
  }, []);
}