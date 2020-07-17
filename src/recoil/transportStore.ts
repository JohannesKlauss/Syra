import { selector } from 'recoil/dist';
import * as Tone from 'tone';

// THIS SHOULD BE AN SELECTOR. EVERY TIME IT'S SET IT SHOULD SET THE transport.seconds
const seconds = selector<number>({
  key: 'transport/seconds',
  get: () => Tone.Transport.seconds,
  set: (_, newValue) => Tone.Transport.seconds = newValue as number,
});

export const transportStore = {
  seconds,
};