import { atom, selector, selectorFamily } from 'recoil/dist';
import { TIME_CONVERSION_RESOLUTION } from '../const/musicalConversionConstants';
import {
  getBeatsInTempoBlock,
  getCurrentTempoBlock,
  getProjectLengthInSeconds,
  getTempoBlockLengthInSeconds,
} from '../utils/time';
import { transportStore } from './transportStore';

const name = atom({
  key: 'project/name',
  default: 'New Syra Project',
});

// The tempo map of the project. The key is transport seconds and the value is beats per minute.
const tempoMap = atom<{[name: number]: number}>({
  key: 'project/tempoMap',
  default: {
    0: 120,
    2: 180,
  }
});

// Display the current tempo. This changes accordingly to the tempoMap inside useTempoMapScheduler.
const currentTempo = atom({
  key: 'project/currentTempo',
  default: selector({
    key: 'project/currentTempo/Default',
    get: ({get}) => get(tempoMap)[0],
  })
});

const currentTempoBlock = selector({
  key: 'project/currentTempoBlock',
  get: ({get}) => getCurrentTempoBlock(get(tempoMap), get(transportStore.seconds)),
})

const beatsInTempoBlock = selectorFamily<number, number>({
  key: 'project/beatsInTempoBlock',
  get: blockAtSeconds => ({get}) => getBeatsInTempoBlock(get(tempoMap), blockAtSeconds, get(lengthInBeats)),
});

const tempoBlockLengthInSeconds = selectorFamily<number, number>({
  key: 'project/tempoBlockLengthInSeconds',
  get: blockAtSeconds => ({get}) => getTempoBlockLengthInSeconds(get(tempoMap), blockAtSeconds, get(lengthInBeats)),
});

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
  get: ({get}) => getProjectLengthInSeconds(get(tempoMap), get(lengthInBeats)),
});

const beatsPerSecond = selector({
  key: 'arrangeWindow/beatsPerSecond',
  get: ({get}) => 1 / (get(currentTempo) / 60),
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
  beatsInTempoBlock,
  tempoBlockLengthInSeconds,
  currentTempoBlock,
  timeSignatureMap,
  currentTimeSignature,
  beatsPerSecond,
  secondsPerBeat,
  lengthInBeats,
  lengthInSeconds,
  isClickMuted,
  lastAnalyzedBpmFromImport,
};