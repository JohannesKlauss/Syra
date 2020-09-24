import { atom, selector } from 'recoil';
import { TIME_CONVERSION_RESOLUTION } from '../const/musicalConversionConstants';
import { transportStore } from './transportStore';
import { getSortedKeysOfEventMap } from '../utils/eventMap';

const name = atom({
  key: 'project/name',
  default: 'New Syra Project',
});

// The tempo map of the project. The key is samples and the value a tempo ramp.
const tempoMap = atom<{[name: number]: number}>({
  key: 'project/tempoMap',
  default: {
    0: 120,
  }
});

const currentTempoRamp = atom<number>({
  key: 'project/currentTempoRamp',
  default: selector({
    key: 'project/currentTempoRamp/Default',
    get: ({get}) => {
      const transportSeconds = get(transportStore.seconds);
      const map = get(tempoMap);
      const keys = getSortedKeysOfEventMap(map);

      const upperBoundIndex = keys.findIndex(second => second > transportSeconds);

      if (upperBoundIndex > 0) {
        return map[keys[upperBoundIndex - 1]];
      } else if (upperBoundIndex === 0) {
        return map[0];
      }

      return map[keys[keys.length - 1]];
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
  default: TIME_CONVERSION_RESOLUTION * 20
});

const beatsPerSecond = selector({
  key: 'arrangeWindow/beatsPerSecond',
  get: ({get}) => 1 / get(currentTempoRamp) / 60,
});

const secondsPerBeat = selector({
  key: 'arrangeWindow/secondsPerBeat',
  get: ({get}) => 60 / get(currentTempoRamp),
});

const isClickMuted = atom<boolean>({
  key: 'project/isClickMuted',
  default: false,
});

export const projectStore = {
  name,
  tempoMap,
  currentTempoRamp,
  timeSignatureMap,
  currentTimeSignature,
  beatsPerSecond,
  secondsPerBeat,
  lengthInQuarters,
  isClickMuted,
  lastAnalyzedBpmFromImport,
};