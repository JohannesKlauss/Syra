import { atomFamily, selectorFamily } from 'recoil/dist';
import * as Tone from 'tone';
import { audioBufferStore } from './audioBufferStore';
import { createNewId } from '../utils/createNewId';
import { REGION_ID_PREFIX } from '../const/ids';

const start = atomFamily<number, string>({
  key: 'region/start',
  default: 0, // This is measured in seconds.
});

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

const audioBufferPointer = atomFamily<string | null, string>({
  key: 'region/audioBufferPointer',
  default: null,
});

export interface RegionState {
  audioBuffer: Tone.ToneAudioBuffer | null;
  start: number;
  end: number;
  isMuted: boolean;
  isSolo: boolean;
  isRecording: boolean;
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
    };
  }
});

const duplicateRegionFromId = selectorFamily<RegionState, { originalRegionId: string, channelId: string }>({
  key: 'region/duplicateRegion',
  get: _ => () => createNewId(REGION_ID_PREFIX),
  set: ({originalRegionId, channelId}) => ({set, get}, newValue) => {
    const newId = createNewId(REGION_ID_PREFIX);

    const originalState = get(regionState(originalRegionId));

    set(audioBufferPointer(newId), get(audioBufferPointer(originalRegionId)));
    set(start(newId), originalState.start + 1);
    set(end(newId), originalState.end);
    set(isSolo(newId), originalState.isSolo);
    set(isMuted(newId), originalState.isMuted);
    set(isRecording(newId), false);

    set(ids(channelId), [...get(ids(channelId)), newId]);

    return newId;
  }
});

const audioBuffer = selectorFamily<Tone.ToneAudioBuffer | null, string>({
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
  duplicateRegionFromId,
};