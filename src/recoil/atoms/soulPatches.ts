import { atom } from 'recoil/dist';

export const availableSoulPlugins = atom<string[]>({
  key: 'availableSoulPlugins',
  default: ['clipper', 'gain', 'freeverb'],
});

export const availableSoulInstruments = atom<string[]>({
  key: 'availableSoulInstruments',
  default: ['sineSynth'],
});