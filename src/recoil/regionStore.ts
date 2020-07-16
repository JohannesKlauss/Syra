import { atomFamily, selectorFamily } from 'recoil/dist';
import * as Tone from 'tone';

const start = atomFamily<string, string>({
  key: 'region/start',
  default: '1:0:0', // This is actually Tone.TimeValue, but the type isn't exported from the lib.
});

const end = atomFamily<string, string>({
  key: 'region/end',
  default: '2:0:0',
});

const isMuted = atomFamily<boolean, string>({
  key: 'region/isMuted',
  default: false,
});

const isSolo = atomFamily<boolean, string>({
  key: 'region/isSolo',
  default: false,
});

const audioBuffer = atomFamily<Tone.ToneAudioBuffer | null, string>({
  key: 'region/audioBuffer',
  default: null,
});

export interface RegionState {
  audioBuffer: Tone.ToneAudioBuffer | null;
  start: string;
  end: string;
  isMuted: boolean;
  isSolo: boolean;
}

const regionState = selectorFamily<RegionState, string>({
  key: 'region/state',
  get: id => ({get}) => ({
    audioBuffer: get(audioBuffer(id)),
    start: get(start(id)),
    end: get(end(id)),
    isSolo: get(isSolo(id)),
    isMuted: get(isMuted(id)),
  }),
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
  regionState,
  ids,
  findByIds,
  findIdsByChannelId,
  findByChannelId,
  isSolo,
  isMuted,
};