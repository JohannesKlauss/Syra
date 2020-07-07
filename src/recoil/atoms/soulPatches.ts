import { atom, selector, selectorFamily } from 'recoil/dist';

export interface AvailableSoulPatch {
  displayName: string;
  pathWasm: string;
  UID: string;
}

export const availableSoulPlugins = atom<AvailableSoulPatch[]>({
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
    }
  ],
});

export const findAvailablePluginByUID = selectorFamily<AvailableSoulPatch | undefined, string>({
  key: 'findAvailablePluginByUID',
  get: UID => ({get}) => get(availableSoulPlugins).find(plugin => plugin.UID === UID),
});

export const availableSoulInstruments = atom<AvailableSoulPatch[]>({
  key: 'availableSoulInstruments',
  default: [
    {
      displayName: 'SineSynth',
      pathWasm: 'sineSynth',
      UID: 'com.yourcompany.sineSynth'
    }
  ],
});