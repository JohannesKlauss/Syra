import { atom } from 'recoil/dist';

const showMixer = atom({
  key: 'editorStore/showMixer',
  default: false
});

const showPianoRoll = atom({
  key: 'editorStore/showPianoRoll',
  default: false
});

export const editorStore = {
  showMixer,
  showPianoRoll,
};