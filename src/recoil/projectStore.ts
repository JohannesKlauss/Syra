import { atom, selector } from 'recoil/dist';
import { TimeSignature } from '../types/Music';

const name = atom({
  key: 'project/name',
  default: 'New Syra Project',
});

const bpm = atom({
  key: 'project/bpm',
  default: 120
});

const lastAnalyzedBpmFromImport = atom<number | null>({
  key: 'project/lastAnalyzedBpmFromImport',
  default: null,
})

// The project length in bars. At 120 bpm 120 bars equal 3:30 minutes.
// TODO: THIS SHOULD BE AN ARRAY OF OBJECTS SO WE CAN CHANGE THE BPM DURING THE PROJECT.
const length = atom({
  key: 'project/length',
  default: 60,
});

const lengthInSeconds = selector({
  key: 'project/lengthInSeconds',
  get: ({get}) => get(length) * get(secondsPerBeat),
});

const beatsPerSecond = selector({
  key: 'arrangeWindow/beatsPerSecond',
  get: ({get}) => 1 / (get(bpm) / 60),
});

const secondsPerBeat = selector({
  key: 'arrangeWindow/secondsPerBeat',
  get: ({get}) => 60 / get(bpm),
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
  bpm,
  beatsPerSecond,
  secondsPerBeat,
  length,
  lengthInSeconds,
  timeSignature,
  isClickMuted,
  lastAnalyzedBpmFromImport,
};