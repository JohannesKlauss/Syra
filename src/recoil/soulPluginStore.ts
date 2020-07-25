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
      displayName: 'Simple Delay',
      pathWasm: 'simpleDelay',
      UID: 'com.yourcompany.SimpleDelay'
    },
    {
      displayName: 'Lookahead Limiter',
      pathWasm: 'lookaheadLimiter',
      UID: 'com.yourcompany.LookaheadLimiter'
    },
    {
      displayName: 'Distortion',
      pathWasm: 'distortion',
      UID: 'com.yourcompany.Distortion'
    },
    {
      displayName: 'Phase Flip',
      pathWasm: 'phaseFlip',
      UID: 'com.yourcompany.PhaseFlip'
    }
  ],
});

const availableSoulInstruments = atom<AvailableSoulPatch[]>({
  key: 'availableSoulInstruments',
  default: [
    {
      displayName: 'Sine Synth',
      pathWasm: 'sineSynth',
      UID: 'com.yourcompany.sineSynth'
    }
  ],
});

export const soulPluginStore = {
  availableSoulPlugins,
  availableSoulInstruments
};