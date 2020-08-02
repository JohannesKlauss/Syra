import { atomFamily, selectorFamily } from 'recoil/dist';
import { audioBufferStore } from './audioBufferStore';
import { createNewId } from '../utils/createNewId';
import { REGION_ID_PREFIX } from '../const/ids';

// Sets the time that region plays in relation to the transport.
const start = atomFamily<number, string>({
  key: 'region/start',
  default: 0, // This is measured in seconds. This value is referring to the transport, not the audio buffer.
});

const isMuted = atomFamily<boolean, string>({
  key: 'region/isMuted',
  default: false,
});

const isSolo = atomFamily<boolean, string>({
  key: 'region/isSolo',
  default: false,
});

// Determines if the region is in a recording state. If so no player gets connected and no scheduling happens.
const isRecording = atomFamily<boolean, string>({
  key: 'region/isRecording',
  default: false,
});

// The seconds that the region get trimmed at the beginning (this is basically the offset in relation to the audio buffer)
const trimStart = atomFamily<number, string>({
  key: 'region/trimStart',
  default: 0,
});

// The seconds that the region get trimmed at the end (also in relation to the audio buffer)
const trimEnd = atomFamily<number, string>({
  key: 'region/trimEnd',
  default: 0,
});

const audioBufferPointer = atomFamily<string | null, string>({
  key: 'region/audioBufferPointer',
  default: null,
});

export interface RegionState {
  audioBuffer: AudioBuffer | null;
  start: number;
  isMuted: boolean;
  isSolo: boolean;
  isRecording: boolean;
  trimStart: number;
  trimEnd: number;
}

const regionState = selectorFamily<RegionState, string>({
  key: 'region/state',
  get: id => ({get}) => {
    let audioBuffer = null;
    const bufferPointer = get(audioBufferPointer(id));

    if (bufferPointer !== null) {
      audioBuffer = get(audioBufferStore.buffer(bufferPointer));
    }

    return {
      audioBuffer,
      start: get(start(id)),
      isSolo: get(isSolo(id)),
      isMuted: get(isMuted(id)),
      isRecording: get(isRecording(id)),
      trimEnd: get(trimEnd(id)),
      trimStart: get(trimStart(id)),
    };
  }
});

const audioBuffer = selectorFamily<AudioBuffer | null, string>({
  key: 'region/audioBuffer',
  get: regionId => ({get}) => {
    const pointer = get(audioBufferPointer(regionId));

    return pointer !== null ? get(audioBufferStore.buffer(pointer)): null;
  }
});

const ids = atomFamily<string[], string>({
  key: 'region/ids',
  default: [],
});

const findByIds = selectorFamily<RegionState[], string[]>({
  key: 'region/findByIds',
  get: ids => ({get}) => ids.map(id => get(regionState(id))),
});

const findIdsByChannelId = selectorFamily<string[], string>({
  key: 'region/findByChannelId',
  get: channelId => ({get}) => get(ids(channelId)),
});

const findByChannelId = selectorFamily<RegionState[], string>({
  key: 'region/findByChannelId',
  get: channelId => ({get}) => get(ids(channelId)).map(id => get(regionState(id))),
});

export const regionStore = {
  start,
  audioBuffer,
  audioBufferPointer,
  isSolo,
  isMuted,
  isRecording,
  trimStart,
  trimEnd,
  regionState,
  ids,
  findByIds,
  findIdsByChannelId,
  findByChannelId,
};