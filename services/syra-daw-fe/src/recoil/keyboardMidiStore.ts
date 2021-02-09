import { atom } from 'recoil';
import { loadInitialStateEffect } from "./effects/loadInitialStateEffect";
import { saveToLocalStorageEffect } from "./effects/saveToLocalStorageEffect";
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
  effects: [loadInitialStateEffect, saveToLocalStorageEffect]
});

export const keyboardMidiStore = {
  isMidiEnabled,
  activeKeyboardMidiNotes,
  selectedMidiDevice,
};