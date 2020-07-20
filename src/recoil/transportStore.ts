import { selector } from 'recoil/dist';
import * as Tone from 'tone';

const seconds = selector<number>({
  key: 'transport/seconds',
  get: () => Tone.Transport.seconds,
  set: (_, newValue) => Tone.Transport.seconds = newValue as number,
});

export const transportStore = {
  seconds,
};