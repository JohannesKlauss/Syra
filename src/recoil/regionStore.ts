import { atomFamily, selectorFamily } from 'recoil/dist';
import { audioBufferStore } from './audioBufferStore';
import { createNewId } from '../utils/createNewId';
import { REGION_ID_PREFIX } from '../const/ids';

// Sets the time that region plays in relation to the transport.
const start = atomFamily<number, string>({
  key: 'region/start',
  default: 0, // This is measured in seconds. This value is referring to the transport, not the audio buffer.
});

// This is currently unused and I am not sure if this is even needed.
const end = atomFamily<number, string>({
  key: 'region/end',
  default: 0,
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
  end: number;
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
      end: get(end(id)),
      isSolo: get(isSolo(id)),
      isMuted: get(isMuted(id)),
      isRecording: get(isRecording(id)),
      trimEnd: get(trimEnd(id)),
      trimStart: get(trimStart(id)),
    };
  }
});

// TODO: THIS IS A HACK. LET'S USE useRecoilCallback FOR THIS.
const duplicateRegionFromId = selectorFamily<RegionState, { originalRegionId: string, channelId: string }>({
  key: 'region/duplicateRegion',
  get: _ => () => createNewId(REGION_ID_PREFIX) as unknown as RegionState,
  set: ({originalRegionId, channelId}) => ({set, get}) => {
    const newId = createNewId(REGION_ID_PREFIX);

    const originalState = get(regionState(originalRegionId));

    set(audioBufferPointer(newId), get(audioBufferPointer(originalRegionId)));
    set(start(newId), originalState.start);
    set(isSolo(newId), originalState.isSolo);
    set(isMuted(newId), originalState.isMuted);
    set(trimStart(newId), originalState.trimStart);
    set(trimEnd(newId), originalState.trimEnd);

    set(ids(channelId), [...get(ids(channelId)), newId]);

    return newId;
  }
});

// TODO: THIS WHOLE THING IS A HACK. LET'S USE useRecoilCallback for this task.
const cutRegionById = selectorFamily<number, { originalRegionId: string, channelId: string }>({
  key: 'region/duplicateRegion',
  get: _ => () => createNewId(REGION_ID_PREFIX) as unknown as number,
  set: ({originalRegionId, channelId}) => ({set, get}, cutAt) => {
    const newId = createNewId(REGION_ID_PREFIX);

    const originalState = get(regionState(originalRegionId));

    set(audioBufferPointer(newId), get(audioBufferPointer(originalRegionId)));
    set(start(newId), originalState.start);
    set(isSolo(newId), originalState.isSolo);
    set(isMuted(newId), originalState.isMuted);
    set(trimEnd(newId), originalState.trimEnd);

    set(trimStart(newId), originalState.trimStart + (cutAt as number));

    set(trimEnd(originalRegionId), (originalState.audioBuffer?.duration ?? 0) - (originalState.trimStart + (cutAt as number)));

    set(ids(channelId), [...get(ids(channelId)), newId]);

    return newId;
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
  end,
  audioBuffer,
  audioBufferPointer,
  regionState,
  ids,
  findByIds,
  findIdsByChannelId,
  findByChannelId,
  isSolo,
  isMuted,
  isRecording,
  trimStart,
  trimEnd,
  duplicateRegionFromId,
  cutRegionById,
};