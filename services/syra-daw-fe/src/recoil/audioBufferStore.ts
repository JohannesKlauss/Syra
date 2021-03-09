import { atomFamily, selectorFamily } from "recoil";
import atomWithEffects from "./proxy/atomWithEffects";
import { syncEffectsComb } from "./effects/syncEffectsComb";
import atomFamilyWithEffects from "./proxy/atomFamilyWithEffects";
import { fileSystem } from "../utils/fileSystem";
import * as Tone from 'tone';
import axios from "axios";

const ids = atomWithEffects<string[]>({
  key: 'audioBuffer/ids',
  default: [],
  effects: [
    ...syncEffectsComb,
  ]
});

const internalBuffer = atomFamily<AudioBuffer | null, string>({
  key: 'audioBuffer/internalBuffer',
  default: null,
});

// In this family we store all the available audio buffers. A region then can point to a buffer and reference it.
// This way multiple regions can reference the same buffer without having to recreate it every time.
const buffer = selectorFamily<AudioBuffer | null, string>({
  key: 'audioBuffer/buffer',
  get: bufferId => async ({get}) => {
    if (bufferId.length === 0) {
      return null;
    }

    console.log('load buffer', bufferId);

    let audioBuffer = get(internalBuffer(bufferId));

    // Buffer is in memory.
    if (audioBuffer) {
      return audioBuffer;
    }

    const storedId = get(storedBufferId(bufferId));
    const extension = get(hasTranscodedFile(bufferId)) ? 'flac' : 'wav';

    if (storedId.length === 0 || !get(hasTranscodedFile(bufferId))) {
      return null;
    }

    console.log('stored ID', storedId);
    console.log('extension', extension);

    // Try to read the file from local file system
    const arrayBuffer = await fileSystem.readArrayBufferFromFile(`${storedId}.${extension}`);

    if (arrayBuffer) {
      try {
        return await Tone.getContext().decodeAudioData(arrayBuffer.slice(0));
      } catch (e) {
      }
    }

    // Load file from server
    const res = await axios.get(`${process.env.REACT_APP_LIVE_GQL_URL}/audio/${storedId}`, {
      withCredentials: true,
      responseType: 'blob',
    });

    if (res.status === 200) {
      try {
        await fileSystem.writeAudioFile(storedId, res.data);

        return await Tone.getContext().decodeAudioData(await res.data.arrayBuffer());
      } catch (e) {
        // TODO: Show error to user.
        console.log('could not write transcoded file', e);
      }
    }

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

const isInSyncWithDb = selectorFamily<boolean, string>({
  key: 'audioBuffer/isInSyncWithDb',
  get: bufferId => ({get}) => {
    return get(hasTranscodedFile(bufferId)) && get(storedBufferId(bufferId)).length > 0 && get(buffer(bufferId)) !== null
  },
});

const durationInTicks = selectorFamily<number, string>({
  key: 'audioBuffer/durationInTicks',
  get: bufferId => ({get}) => {
    const audioBuffer = get(buffer(bufferId));

    if (audioBuffer === null) {
      return 0;
    }

    return Tone.Ticks(audioBuffer.duration, 's').toTicks();
  }
});

export const audioBufferStore = {
  buffer,
  name,
  ids,
  storedBufferId,
  isInSyncWithDb,
  hasTranscodedFile,
  durationInTicks
};