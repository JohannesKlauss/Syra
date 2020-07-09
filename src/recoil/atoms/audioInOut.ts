import { atom } from 'recoil/dist';
import { audioInputFactory } from '../../utils/tonejs';

export const audioIn = atom({
  key: 'audioIn',
  default: audioInputFactory(),
});