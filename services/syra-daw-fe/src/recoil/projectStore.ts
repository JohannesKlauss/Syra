import { atom, selector, selectorFamily } from 'recoil';
import { TIME_CONVERSION_RESOLUTION } from '../const/musicalConversionConstants';
import { transportStore } from './transportStore';
import { getSortedKeysOfEventMap } from '../utils/eventMap';

const name = atom({
  key: 'project/name',
  default: 'New Syra Project',
});

// The tempo map of the project. The key is elapsed quarters and the value a tempo. It should actually be a tempo ramp
// but we don't know how to support this yet.
const tempoMap = atom<{[name: number]: number}>({
  key: 'project/tempoMap',
  default: {
    0: 120,
  }
});

const tempoAtQuarter = selectorFamily<number, number>({
  key: 'project/tempoAtQuarter',
  get: quarter => ({get}) => {
    const map = get(tempoMap);
    const keys = getSortedKeysOfEventMap(map).reverse();
    const index = keys.findIndex(changeAtQuarter => changeAtQuarter <= quarter);

    return map[keys[index]];
  }
});

const currentTempo = atom<number>({
  key: 'project/currentTempo',
  default: selector({
    key: 'project/currentTempo/Default',
    get: ({get}) => {
      const currentQuarter = get(transportStore.currentQuarter);
      const map = get(tempoMap);
      const keys = getSortedKeysOfEventMap(map).reverse();
      const index = keys.findIndex(changeAtQuarter => changeAtQuarter <= currentQuarter);

      return map[keys[index]];
    }
  })
});

// The time signature map of the project. The key is quarters and the value num of beats over division (7/4, 3/4, etc.).
// So 8: [7, 4] means after 8 elapsed quarters, change the time signature to 7/4.
const timeSignatureMap = atom<{[name: number]: [number, number]}>({
  key: 'project/timeSignatureMap',
  default: {
    0: [4, 4],
  }
});

const timeSignatureAtQuarter = selectorFamily<[number, number], number>({
  key: 'project/timeSignatureAtQuarter',
  get: quarter => ({get}) => {
    const bar = get(transportStore.barAtQuarter(quarter));

    return bar?.timeSignature || get(timeSignatureMap)[0];
  }
});

const currentTimeSignature = atom<[number, number]>({
  key: 'project/currentTimeSignature',
  default: selector({
    key: 'project/currentTimeSignature/Default',
    get: ({get}) => {
      const currentBar = get(transportStore.currentBar);

      return currentBar?.timeSignature || get(timeSignatureMap)[0];
    },
  })
})

const lastAnalyzedBpmFromImport = atom<number | null>({
  key: 'project/lastAnalyzedBpmFromImport',
  default: null,
})

// The project length in quarters. TODO: SETTING THE PROJECT LENGTH IN THE NEW PROJECT DIALOG HAS TO ACCOUNT TIME SIGNATURES.
const lengthInQuarters = atom({
  key: 'project/length',
  default: TIME_CONVERSION_RESOLUTION * 60
});

const beatsPerSecond = selector({
  key: 'arrangeWindow/beatsPerSecond',
  get: ({get}) => 1 / get(currentTempo) / 60,
});

const secondsPerBeat = selector({
  key: 'arrangeWindow/secondsPerBeat',
  get: ({get}) => 60 / get(currentTempo),
});

const isClickMuted = atom<boolean>({
  key: 'project/isClickMuted',
  default: true,
});

export const projectStore = {
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
  isClickMuted,
  lastAnalyzedBpmFromImport,
};