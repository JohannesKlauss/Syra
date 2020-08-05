import { atom } from 'recoil/dist';
import { TimeSignature } from '../types/Music';

const name = atom({
  key: 'project/name',
  default: 'New Project',
});

const bpm = atom({
  key: 'project/bpm',
  default: 120
});

// The project length in bars. At 120 bpm 240 bars equal 7:00 minutes.
// TODO: THIS SHOULD BE AN ARRAY OF OBJECTS SO WE CAN CHANGE THE BPM DURING THE PROJECT.
const length = atom({
  key: 'project/length',
  default: 240,
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
  length,
  timeSignature,
  isClickMuted,
};