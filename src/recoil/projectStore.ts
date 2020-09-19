import { atom, selector, selectorFamily } from 'recoil';
import { TIME_CONVERSION_RESOLUTION } from '../const/musicalConversionConstants';

const name = atom({
  key: 'project/name',
  default: 'New Syra Project',
});

// The tempo map of the project. The key is samples and the value a tempo ramp.
const tempoMap = atom<{[name: number]: number}>({
  key: 'project/tempoMap',
  default: {
    0: 120
  }
});

const currentTempoRamp = atom<number>({
  key: 'project/currentTempoRamp',
  default: selector({
    key: 'project/currentTempoRamp/Default',
    get: ({get}) => get(tempoMap)[0]
  })
});

const beatsInTempoBlock = selectorFamily<number, number>({
  key: 'project/beatsInTempoBlock',
  get: blockAtSeconds => ({get}) => 8,
});

const tempoBlockLengthInSeconds = selectorFamily<number, number>({
  key: 'project/tempoBlockLengthInSeconds',
  get: blockAtSeconds => ({get}) => 2,
});

// The time signature map of the project. The key is quarters and the value num of beats over division (7/4, 3/4, etc.).
// So 8: [7, 4] means after 8 elapsed quarters, change the time signature to 7/4.
const timeSignatureMap = atom<{[name: number]: [number, number]}>({
  key: 'project/timeSignatureMap',
  default: {
    0: [4, 4]
  }
});

const currentTimeSignature = atom<[number, number]>({
  key: 'project/currentTimeSignature',
  default: selector({
    key: 'project/currentTimeSignature/Default',
    get: ({get}) => get(timeSignatureMap)[0],
  })
})

const lastAnalyzedBpmFromImport = atom<number | null>({
  key: 'project/lastAnalyzedBpmFromImport',
  default: null,
})

// The project length in quarters. TODO: SETTING THE PROJECT LENGTH IN THE NEW PROJECT DIALOG HAS TO ACCOUNT TIME SIGNATURES.
const lengthInQuarters = atom({
  key: 'project/length',
  default: TIME_CONVERSION_RESOLUTION * 128
});

// The project length in seconds with tempo changes already included.
const lengthInSeconds = selector({
  key: 'project/lengthInSeconds',
  get: ({get}) => 120,
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
  beatsInTempoBlock,
  tempoBlockLengthInSeconds,
  timeSignatureMap,
  currentTimeSignature,
  beatsPerSecond,
  secondsPerBeat,
  lengthInQuarters,
  lengthInSeconds,
  isClickMuted,
  lastAnalyzedBpmFromImport,
};