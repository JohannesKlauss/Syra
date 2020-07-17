import { atom } from 'recoil/dist';

const seconds = atom({
  key: 'transport/seconds',
  default: 0,
});

export const transportStore = {
  seconds,
};