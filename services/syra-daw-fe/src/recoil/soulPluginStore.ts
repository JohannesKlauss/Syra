import { atom, selector, selectorFamily } from "recoil";

export interface AvailableSoulPatch {
  displayName: string;
  pathWasm: string;
  UID: string;
}

const availableSoulPlugins = atom<AvailableSoulPatch[]>({
  key: 'soulPlugin/availableSoulPlugins',
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
  key: 'soulPlugin/availableSoulInstruments',
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
    },
    {
      displayName: 'Syra 60',
      pathWasm: 'syra60',
      UID: 'com.syra.Syra60'
    }
  ],
});

const findPluginByUid = selectorFamily<AvailableSoulPatch | undefined, string>({
  key: 'soulPlugin/findPluginByUid',
  get: uid => ({get}) => {
    const patches = [...get(availableSoulInstruments), ...get(availableSoulPlugins)];

    return patches.find(patch => patch.UID === uid);
  }
});

export const soulPluginStore = {
  availableSoulPlugins,
  availableSoulInstruments,
  findPluginByUid
};