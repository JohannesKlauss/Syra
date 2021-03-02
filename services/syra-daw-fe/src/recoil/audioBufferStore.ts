import { atomFamily, selectorFamily } from "recoil";
import atomWithEffects from "./proxy/atomWithEffects";
import { syncEffectsComb } from "./effects/syncEffectsComb";
import atomFamilyWithEffects from "./proxy/atomFamilyWithEffects";

const internalBuffer = atomFamily<AudioBuffer | null, string>({
  key: 'audioBuffer/internalBuffer',
  default: null,
});

// In this family we store all the available audio buffers. A region then can point to a buffer and reference it.
// This way multiple regions can reference the same buffer without having to recreate it every time.
const buffer = selectorFamily<AudioBuffer | null, string>({
  key: 'audioBuffer/buffer',
  get: bufferId => async ({get}) => {
    let audioBuffer = get(internalBuffer(bufferId));

    if (audioBuffer) {
      return audioBuffer;
    }

    const storedId = get(storedBufferId(bufferId));

    // Load from local storage or from server.

    return null;
  },
  set: bufferId => async ({set}, buffer) => set(internalBuffer(bufferId), buffer)
});

const name = atomFamilyWithEffects<string, string>({
  key: 'audioBuffer/name',
  default: '',
  effects: [
    ...syncEffectsComb
  ]
});

const isInSyncWithDb = atomFamily<boolean, string>({
  key: 'audioBuffer/isInSyncWithDb',
  default: false,
});

// This id is used to reference the file on local storage and on the server.
// Use this to load the wanted file.
const storedBufferId = atomFamilyWithEffects<string, string>({
  key: 'audioBuffer/storedBufferId',
  default: '',
  effects: [
    ...syncEffectsComb,
  ]
});

const hasTranscodedFile = atomFamilyWithEffects<boolean, string>({
  key: 'audioBuffer/hasTranscodedFile',
  default: false,
  effects: [
    ...syncEffectsComb,
  ]
});

const ids = atomWithEffects<string[]>({
  key: 'audioBuffer/ids',
  default: [],
  effects: [
    ...syncEffectsComb,
  ]
});

export const audioBufferStore = {
  buffer,
  name,
  ids,
  storedBufferId,
  isInSyncWithDb,
  hasTranscodedFile,
};