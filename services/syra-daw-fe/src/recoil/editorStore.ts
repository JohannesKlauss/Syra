import atomWithEffects from "./proxy/atomWithEffects";
import { localStorageEffect } from "./effects/localStorageEffect";
import { atom } from "recoil";

const showMixer = atomWithEffects<boolean>({
  key: 'editor/showMixer',
  default: false,
  effects: [localStorageEffect]
});

const showPianoRoll = atomWithEffects<boolean>({
  key: 'editor/showPianoRoll',
  default: false,
  effects: [localStorageEffect]
});

const showSettings = atomWithEffects<boolean>({
  key: 'editor/showSettings',
  default: false,
  effects: [localStorageEffect]
});

const showVideo = atomWithEffects<boolean>({
  key: 'editor/showVideo',
  default: true,
  effects: [localStorageEffect]
});

const showFileExplorer = atomWithEffects<boolean>({
  key: 'editor/showFileExplorer',
  default: false,
  effects: [localStorageEffect]
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