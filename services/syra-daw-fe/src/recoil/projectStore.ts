import { atom, selector, selectorFamily } from 'recoil';
import { transportStore } from './transportStore';
import { getSortedKeysOfEventMap } from '../utils/eventMap';
import * as Tone from 'tone';
import atomWithEffects from './proxy/atomWithEffects';
import { syncEffectsComb } from './effects/syncEffectsComb';
import { getToneJsTransport } from '../utils/tonejs';

const name = atom({
  key: 'project/name',
  default: 'New Syra Project',
});

const id = atom({
  key: 'project/id',
  default: '',
});

// The tempo map of the project. The key is elapsed quarters and the value a tempo. It should actually be a tempo ramp
// but we don't know how to support this yet.
const tempoMap = atomWithEffects<{ [name: number]: number }>({
  key: 'project/tempoMap',
  default: {
    0: 240,
  },
  effects: [...syncEffectsComb],
});

const tempoAtQuarter = selectorFamily<number, number>({
  key: 'project/tempoAtQuarter',
  get: (quarter) => ({ get }) => {
    const map = get(tempoMap);
    const keys = getSortedKeysOfEventMap(map).reverse();
    const index = keys.findIndex((changeAtQuarter) => changeAtQuarter <= quarter);

    return map[keys[index]];
  },
});

const currentTempo = atom<number>({
  key: 'project/currentTempo',
  default: selector({
    key: 'project/currentTempo/Default',
    get: ({ get }) => {
      const currentQuarter = get(transportStore.currentQuarter);
      const map = get(tempoMap);
      const keys = getSortedKeysOfEventMap(map).reverse();
      const index = keys.findIndex((changeAtQuarter) => changeAtQuarter <= currentQuarter);

      return map[keys[index]];
    },
  }),
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        getToneJsTransport().bpm.value = newValue as number;
      });
    }
  ],
});

// The time signature map of the project. The key is quarters and the value num of beats over division (7/4, 3/4, etc.).
// So 8: [7, 4] means after 8 elapsed quarters, change the time signature to 7/4.
const timeSignatureMap = atomWithEffects<{ [name: number]: [number, number] }>({
  key: 'project/timeSignatureMap',
  default: {
    0: [4, 4],
  },
  effects: [...syncEffectsComb],
});

const timeSignatureAtQuarter = selectorFamily<[number, number], number>({
  key: 'project/timeSignatureAtQuarter',
  get: (quarter) => ({ get }) => {
    const bar = get(transportStore.barAtQuarter(quarter));

    return bar?.timeSignature || get(timeSignatureMap)[0];
  },
});

const currentTimeSignature = atom<[number, number]>({
  key: 'project/currentTimeSignature',
  default: selector({
    key: 'project/currentTimeSignature/Default',
    get: ({ get }) => {
      const currentBar = get(transportStore.currentBar);

      return currentBar?.timeSignature || get(timeSignatureMap)[0];
    },
  }),
});

const lastAnalyzedBpmFromImport = atom<number | null>({
  key: 'project/lastAnalyzedBpmFromImport',
  default: null,
});

const lengthInQuarters = selector({
  key: 'project/lengthInQuarters',
  get: ({ get }) => parseInt(Tone.Ticks(get(lengthInTicks)).toBarsBeatsSixteenths()),
});

const lengthInTicks = atomWithEffects({
  key: 'project/lengthInTicks',
  default: Tone.Ticks(`${60}:0:0`).toTicks(), // TODO: THIS DEFAULT SETTING IS A BIT WEIRD, BECAUSE THIS EVALUATION HAPPENS __BEFORE__ WE SET TONE JS TO 1/4 Time Signature. We have to figure out a better way to handle this.
  effects: [...syncEffectsComb],
});

const beatsPerSecond = selector({
  key: 'project/beatsPerSecond',
  get: ({ get }) => 1 / get(currentTempo) / 60,
});

const secondsPerBeat = selector({
  key: 'project/secondsPerBeat',
  get: ({ get }) => 60 / get(currentTempo),
});

const isClickMuted = atomWithEffects<boolean>({
  key: 'project/isClickMuted',
  default: true,
  effects: [...syncEffectsComb],
});

export const projectStore = {
  id,
  name,
  tempoMap,
  currentTempo,
  tempoAtQuarter,
  timeSignatureMap,
  timeSignatureAtQuarter,
  currentTimeSignature,
  beatsPerSecond,
  secondsPerBeat,
  lengthInQuarters,
  lengthInTicks,
  isClickMuted,
  lastAnalyzedBpmFromImport,
};
