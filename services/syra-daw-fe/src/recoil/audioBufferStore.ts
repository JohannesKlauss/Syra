import { atomFamily, selectorFamily } from "recoil";
import atomWithEffects from "./proxy/atomWithEffects";
import { syncEffectsComb } from "./effects/syncEffectsComb";
import atomFamilyWithEffects from "./proxy/atomFamilyWithEffects";
import { fileSystem } from "../utils/fileSystem";
import * as Tone from 'tone';
import axios from "axios";

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

    let audioBuffer = get(internalBuffer(bufferId));

    console.log('reading buffer', bufferId);

    // Buffer is in memory.
    if (audioBuffer) {
      console.log('return from memory');

      return audioBuffer;
    }

    const storedId = get(storedBufferId(bufferId));
    const extension = get(hasTranscodedFile(bufferId)) ? 'm4a' : 'wav';

    // Try to read the file from local file system
    const arrayBuffer = await fileSystem.readArrayBufferFromFile(`${storedId}.${extension}`);

    console.log('arrayBuffer', arrayBuffer);

    if (arrayBuffer) {
      console.log('return from system', `${storedId}.${extension}`);

      try {

        console.log('before decode', arrayBuffer);
        return await Tone.getContext().decodeAudioData(arrayBuffer.slice(0));
      } catch (e) {
        console.log('could not decode arrayBuffer', arrayBuffer);
        console.log('storedBufferId', storedId);
      }
    }

    // Load file from server
    const res = await axios.get(`${process.env.REACT_APP_LIVE_GQL_URL}/audio/${storedId}`, {
      withCredentials: true,
      responseType: 'blob',
    });

    console.log('load from server');

    if (res.status === 200) {
      try {
        console.log('got from server, write to system', storedId);

        await fileSystem.writeAudioFile(storedId, res.data);

        console.log('serve from server', res.data.type);

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