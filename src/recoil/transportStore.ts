import { atom, selector } from 'recoil/dist';
import * as Tone from 'tone';

const internalSeconds = atom({
  key: 'transport/internalSeconds',
  default: Tone.Transport.seconds,
});

const seconds = selector<number>({
  key: 'transport/seconds',
  get: ({get}) => get(internalSeconds),
  set: ({set}, newValue) => {
    Tone.Transport.seconds = newValue as number;
    set(internalSeconds, newValue as number);
  },
});

export const transportStore = {
  seconds,
};