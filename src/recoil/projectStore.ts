import { atom, selector, selectorFamily } from 'recoil';
import { TIME_CONVERSION_RESOLUTION } from '../const/musicalConversionConstants';
import {
  getBeatsInTempoBlock,
  getCurrentTempoBlock,
  getProjectLengthInSeconds,
  getTempoBlockLengthInSeconds,
} from '../utils/time';
import { transportStore } from './transportStore';
import { BpmRamp, bpmStaticRampFactory } from '../utils/bpmRamps';

const name = atom({
  key: 'project/name',
  default: 'New Syra Project',
});

// The tempo map of the project. The key is samples and the value a tempo ramp.
const tempoMap = atom<{[name: number]: BpmRamp}>({
  key: 'project/tempoMap',
  default: {
    0: bpmStaticRampFactory(120),
    2: bpmStaticRampFactory(180),
    5.7: bpmStaticRampFactory(100),
    13.9: bpmStaticRampFactory(160),
  }
});

const currentTempoRamp = atom<BpmRamp>({
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
    0: [4, 4],
    8: [2, 2],
    16: [8, 8],
    24: [6, 2],
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

// The project length in beats (beats of 4ths as default).
const lengthInBeats = atom({
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
  get: ({get}) => 1 / 120 / 60,
});

const secondsPerBeat = selector({
  key: 'arrangeWindow/secondsPerBeat',
  get: ({get}) => 60 / 120,
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
  lengthInBeats,
  lengthInSeconds,
  isClickMuted,
  lastAnalyzedBpmFromImport,
};