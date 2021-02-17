import atomWithEffects from "./proxy/atomWithEffects";
import { saveToLocalStorageEffect } from "./effects/saveToLocalStorageEffect";
import { loadInitialStateEffect } from "./effects/loadInitialStateEffect";

const showMixer = atomWithEffects({
  key: 'editor/showMixer',
  default: false,
  effects: [saveToLocalStorageEffect, loadInitialStateEffect]
});

const showPianoRoll = atomWithEffects({
  key: 'editor/showPianoRoll',
  default: false,
  effects: [saveToLocalStorageEffect, loadInitialStateEffect]
});

const showSettings = atomWithEffects({
  key: 'editor/showSettings',
  default: false,
  effects: [saveToLocalStorageEffect, loadInitialStateEffect]
});

const showVideo = atomWithEffects({
  key: 'editor/showVideo',
  default: true,
  effects: [saveToLocalStorageEffect, loadInitialStateEffect]
});

export const editorStore = {
  showMixer,
  showPianoRoll,
  showSettings,
  showVideo,
};