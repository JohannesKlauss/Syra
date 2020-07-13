import { atom } from 'recoil/dist';

export const projectBpm = atom({
  key: 'projectBpm',
  default: 120
});

// The project length in bars. At 120 bpm 240 bars equal 7:00 minutes.
export const projectLength = atom({
  key: 'projectLength',
  default: 240,
});