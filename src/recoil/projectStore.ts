import { atom } from 'recoil/dist';

const bpm = atom({
  key: 'project/bpm',
  default: 120
});

// The project length in bars. At 120 bpm 240 bars equal 7:00 minutes.
const length = atom({
  key: 'project/length',
  default: 240,
});

export const projectStore = {
  bpm,
  length
};