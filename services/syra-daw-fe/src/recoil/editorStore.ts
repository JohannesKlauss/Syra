import atomWithEffects from "./proxy/atomWithEffects";
import { saveToLocalStorageEffect } from "./effects/saveToLocalStorageEffect";
import { loadInitialStateEffect } from "./effects/loadInitialStateEffect";
import { atom } from "recoil";

const showMixer = atomWithEffects<boolean>({
  key: 'editor/showMixer',
  default: false,
  effects: [saveToLocalStorageEffect, loadInitialStateEffect]
});

const showPianoRoll = atomWithEffects<boolean>({
  key: 'editor/showPianoRoll',
  default: false,
  effects: [saveToLocalStorageEffect, loadInitialStateEffect]
});

const showSettings = atomWithEffects<boolean>({
  key: 'editor/showSettings',
  default: false,
  effects: [saveToLocalStorageEffect, loadInitialStateEffect]
});

const showVideo = atomWithEffects<boolean>({
  key: 'editor/showVideo',
  default: true,
  effects: [saveToLocalStorageEffect, loadInitialStateEffect]
});

const showFileExplorer = atomWithEffects<boolean>({
  key: 'editor/showFileExplorer',
  default: false,
  effects: [saveToLocalStorageEffect, loadInitialStateEffect]
});

const isContextMenuOpen = atom<boolean>({
  key: 'editor/isContextMenuOpen',
  default: false,
});

export const editorStore = {
  showMixer,
  showPianoRoll,
  showSettings,
  showVideo,
  isContextMenuOpen,
  showFileExplorer,
};