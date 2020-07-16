import { atom } from 'recoil/dist';
import { audioInputFactory } from '../utils/tonejs';

const audioIn = atom({
  key: 'audioInOut/audioIn',
  default: audioInputFactory(),
});

export const audioInOutStore = {
  audioIn,
};