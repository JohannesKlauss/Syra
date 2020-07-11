import { atom } from 'recoil/dist';

export const projectBpm = atom({
  key: 'projectBpm',
  default: 120
});

// The project length in bars. At 120 bpm 120 bars equal 3:30 minutes.
export const projectLength = atom({
  key: 'projectLength',
  default: 240,
});