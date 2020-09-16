import { atom } from 'recoil';

const showMixer = atom({
  key: 'editorStore/showMixer',
  default: false
});

const showPianoRoll = atom({
  key: 'editorStore/showPianoRoll',
  default: false
});

const showVideo = atom({
  key: 'editorStore/showVideo',
  default: false
});

export const editorStore = {
  showMixer,
  showPianoRoll,
  showVideo,
};