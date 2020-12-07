import { useRecoilCallback } from "recoil";
import { keyboardMidiStore } from "../../recoil/keyboardMidiStore";

export default function useSelectLastMidiDevice() {
  return useRecoilCallback(({set}) => () => {
    const device = localStorage.getItem('lastMidiDevice');

    if (device) {
      set(keyboardMidiStore.selectedMidiDevice, device);
    }
  }, []);
}