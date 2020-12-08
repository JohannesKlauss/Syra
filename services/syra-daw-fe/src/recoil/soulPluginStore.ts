import { atom} from 'recoil';

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
      displayName: 'Compressor',
      pathWasm: 'compressor',
      UID: 'com.yourcompany.Compressor'
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
    },
    {
      displayName: 'ElectroPiano',
      pathWasm: 'electroPiano',
      UID: 'com.yourcompany.ElectroPiano'
    },
    {
      displayName: 'LatelyBass',
      pathWasm: 'latelyBass',
      UID: 'com.yourcompany.LatelyBass'
    },
    {
      displayName: 'SY-09',
      pathWasm: 'sy09',
      UID: 'dev.soul.examples.SY09'
    }
  ],
});

export const soulPluginStore = {
  availableSoulPlugins,
  availableSoulInstruments
};