import { atom } from 'recoil/dist';

export const activeKeyboardMidiNotes = atom<number[]>({
  key: 'activeKeyboardMidiNotes',
  default: [],
});

export const selectedMidiDevice = atom<string>({
  key: 'selectedMidiDevice',
  default: ''
});