import { atom, selector } from 'recoil/dist';
import { TimeSignature } from '../types/Music';

const name = atom({
  key: 'project/name',
  default: 'New Syra Project',
});

// The tempo map of the project. The key is transport seconds and the value is beats per minute.
const tempoMap = atom<{[name: number]: number}>({
  key: 'project/tempoMap',
  default: {
    0: 120,
    2: 240,
    8: 120,
  }
});

// Display the current tempo. This changes accordingly to the tempoMap inside useTempoMapScheduler.
const currentTempo = atom({
  key: 'project/currentTempo',
  default: selector({
    key: 'project/currentTempo/Default',
    get: ({get}) => get(tempoMap)[0],
  })
})

const lastAnalyzedBpmFromImport = atom<number | null>({
  key: 'project/lastAnalyzedBpmFromImport',
  default: null,
})

// The project length in bars. At 120 bpm 120 bars equal 3:30 minutes.
// TODO: THIS SHOULD BE AN ARRAY OF OBJECTS SO WE CAN CHANGE THE BPM DURING THE PROJECT.
const length = atom({
  key: 'project/length',
  default: 128,
});

const lengthInSeconds = selector({
  key: 'project/lengthInSeconds',
  get: ({get}) => get(length) * get(secondsPerBeat),
});

const beatsPerSecond = selector({
  key: 'arrangeWindow/beatsPerSecond',
  get: ({get}) => 1 / (get(currentTempo) / 60),
});

const secondsPerBeat = selector({
  key: 'arrangeWindow/secondsPerBeat',
  get: ({get}) => 60 / get(currentTempo),
});

// The time signature of the project. "beat" is the upper nominal, "over" is the lower.
// TODO: THIS SHOULD ALSO BE AN ARRAY SO WE CAN CHANGE THE TIME SIGNATURE DURING THE PROJECT.
const timeSignature = atom<TimeSignature>({
  key: 'project/timeSignature',
  default: {
    beats: 4,
    over: 4,
  },
});

const isClickMuted = atom<boolean>({
  key: 'project/isClickMuted',
  default: true,
});

export const projectStore = {
  name,
  tempoMap,
  currentTempo,
  beatsPerSecond,
  secondsPerBeat,
  length,
  lengthInSeconds,
  timeSignature,
  isClickMuted,
  lastAnalyzedBpmFromImport,
};