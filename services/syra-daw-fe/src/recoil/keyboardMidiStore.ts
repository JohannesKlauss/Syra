import { atom } from 'recoil';
import { localStorageEffect } from "./effects/localStorageEffect";
import atomWithEffects from "./proxy/atomWithEffects";

const isMidiEnabled = atom({
  key: 'keyboardMidi/isMidiEnabled',
  default: false,
});

const activeKeyboardMidiNotes = atom<number[]>({
  key: 'keyboardMidi/activeKeyboardMidiNotes',
  default: [],
});

const selectedMidiDevice = atomWithEffects<string | null>({
  key: 'keyboardMidi/selectedMidiDevice',
  default: null,
  effects: [localStorageEffect]
});

export const keyboardMidiStore = {
  isMidiEnabled,
  activeKeyboardMidiNotes,
  selectedMidiDevice,
};