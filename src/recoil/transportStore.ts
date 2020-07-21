import { atom, selector } from 'recoil/dist';
import * as Tone from 'tone';

// Internal atoms are just used to sync everything with the transport itself. Never expose them to the rest of the app.

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

const internalLoopStart = atom({
  key: 'transport/internalLoopStart',
  default: Tone.Transport.loopStart,
});

const cycleStart = selector<number>({
  key: 'transport/cycleStart',
  get: ({get}) => get(internalLoopStart) as number,
  set: ({set}, newValue) => {
    Tone.Transport.loopStart = newValue as number;
    set(internalLoopStart, newValue as number);
  },
});

const internalLoopEnd = atom<number>({
  key: 'transport/internalLoopEnd',
  default: selector({
    key: 'transport/internalLoopEnd/Default',
    get: () => {
      Tone.Transport.loopEnd = 4;

      return Tone.Transport.loopEnd;
    }
  }),
});

const cycleEnd = selector<number>({
  key: 'transport/cycleEnd',
  get: ({get}) => get(internalLoopEnd) as number,
  set: ({set}, newValue) => {
    Tone.Transport.loopEnd = newValue as number;
    set(internalLoopEnd, newValue as number);
  },
});

const internalLoop = atom({
  key: 'transport/internalLoop',
  default: Tone.Transport.loop,
});

const isCycleActive = selector<boolean>({
  key: 'transport/isCycleActive',
  get: ({get}) => get(internalLoop),
  set: ({set}, newValue) => {
    Tone.Transport.loop = newValue as boolean;
    set(internalLoop, newValue as boolean);
  }
})

export const transportStore = {
  seconds,
  cycleStart,
  cycleEnd,
  isCycleActive,
};