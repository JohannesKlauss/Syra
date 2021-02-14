import atomWithEffects from "./proxy/atomWithEffects";
import { saveToLocalStorageEffect } from "./effects/saveToLocalStorageEffect";
import { loadInitialStateEffect } from "./effects/loadInitialStateEffect";

const showMixer = atomWithEffects({
  key: 'editorStore/showMixer',
  default: false,
  effects: [saveToLocalStorageEffect, loadInitialStateEffect]
});

const showPianoRoll = atomWithEffects({
  key: 'editorStore/showPianoRoll',
  default: false,
  effects: [saveToLocalStorageEffect, loadInitialStateEffect]
});

const showSettings = atomWithEffects({
  key: 'editorStore/showSettings',
  default: false,
  effects: [saveToLocalStorageEffect, loadInitialStateEffect]
});

const showVideo = atomWithEffects({
  key: 'editorStore/showVideo',
  default: true,
  effects: [saveToLocalStorageEffect, loadInitialStateEffect]
});

export const editorStore = {
  showMixer,
  showPianoRoll,
  showSettings,
  showVideo,
};