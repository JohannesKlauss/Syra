import { atom} from 'recoil/dist';

export interface AvailableSoulPatch {
  displayName: string;
  pathWasm: string;
  UID: string;
}

const availableSoulPlugins = atom<AvailableSoulPatch[]>({
  key: 'availableSoulPlugins',
  default: [
    {
      displayName: 'Clipper',
      pathWasm: 'clipper',
      UID: 'com.yourcompany.clipper'
    },
    {
      displayName: 'Gain',
      pathWasm: 'gain',
      UID: 'com.yourcompany.gain'
    },
    {
      displayName: 'Freeverb',
      pathWasm: 'freeverb',
      UID: 'com.yourcompany.freeverb'
    },
    {
      displayName: 'SimpleDelay',
      pathWasm: 'simpleDelay',
      UID: 'com.yourcompany.SimpleDelay'
    },
    {
      displayName: 'LookaheadLimiter',
      pathWasm: 'lookaheadLimiter',
      UID: 'com.yourcompany.LookaheadLimiter'
    }
  ],
});

const availableSoulInstruments = atom<AvailableSoulPatch[]>({
  key: 'availableSoulInstruments',
  default: [
    {
      displayName: 'SineSynth',
      pathWasm: 'sineSynth',
      UID: 'com.yourcompany.sineSynth'
    }
  ],
});

export const soulPatchesStore = {
  availableSoulPlugins,
  availableSoulInstruments
};