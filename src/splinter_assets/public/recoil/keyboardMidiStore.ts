import { atom } from 'recoil/dist';

const isMidiEnabled = atom({
  key: 'keyboardMidi/isMidiEnabled',
  default: false,
});

const activeKeyboardMidiNotes = atom<number[]>({
  key: 'keyboardMidi/activeKeyboardMidiNotes',
  default: [],
});

const selectedMidiDevice = atom<string | null>({
  key: 'keyboardMidi/selectedMidiDevice',
  default: null,
});

export const keyboardMidiStore = {
  isMidiEnabled,
  activeKeyboardMidiNotes,
  selectedMidiDevice,
};