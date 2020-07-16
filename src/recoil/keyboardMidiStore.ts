import { atom } from 'recoil/dist';

const activeKeyboardMidiNotes = atom<number[]>({
  key: 'keyboardMidi/activeKeyboardMidiNotes',
  default: [],
});

const selectedMidiDevice = atom<string>({
  key: 'keyboardMidi/selectedMidiDevice',
  default: ''
});

export const keyboardMidiStore = {
  activeKeyboardMidiNotes,
  selectedMidiDevice,
};