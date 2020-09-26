import { atom, atomFamily, selectorFamily } from 'recoil';
import { audioBufferStore } from './audioBufferStore';
import { arrangeWindowStore } from './arrangeWindowStore';
import { ARRANGE_GRID_WAVEFORM_SAMPLE_RATE } from '../const/ui';

// Sets the time that region plays in relation to the transport. This now measured in quarters, not seconds!
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

// The seconds that the region get trimmed at the end (also in relation to the audio buffer duration)
const trimEnd = atomFamily<number, string>({
  key: 'region/trimEnd',
  default: 0,
});

const name = atomFamily<string, string>({
  key: 'region/name',
  default: '',
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
  name: string;
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
      name: get(name(id)),
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

// This is creating buckets on the fly depending on position and tempo of the region.
// Those buckets represent the index boundaries to calculate the value of on pixel for the waveform.
const peakBuckets = selectorFamily<[number, number][] | null, { bufferId: string | null, tempo: number }>({
  key: 'region/peakBuckets',
  get: ({bufferId, tempo}) => ({get}) => {
    if (bufferId === null) {
      return null;
    }

    const buffer = get(audioBufferStore.buffer(bufferId));
    const peaks = get(audioBufferStore.peaks(bufferId));

    if (peaks === null || buffer === null) {
      return null;
    }

    const peaksView = new Uint8Array(peaks);
    const quarterWidth = get(arrangeWindowStore.zoomedQuarterPixelWidth);
    const pixelPerSecond = tempo / 60 * quarterWidth;
    const indexRange = Math.ceil(peaksView.length / (buffer.duration * pixelPerSecond));
    const buckets: [number, number][] = [];

    for (let i = 0, j = 0; j < buffer.duration * pixelPerSecond; i += indexRange, j++) {
      buckets[j] = [i, i + indexRange - 1];
    }

    buckets[buckets.length - 1][1] = peaks.byteLength - 1;

    return buckets;
  }
});

// Parameter is channelId.
const ids = atomFamily<string[], string>({
  key: 'region/ids',
  default: [],
});

const selectedIds = atom<string[]>({
  key: 'region/selectedIds',
  default: [],
})

// This atomFamily keeps track of all the created regions inside a channel. Parameter is channelId, not regionId.
const staticCounter = atomFamily<number, string>({
  key: 'region/staticCounter',
  default: 1,
});

const isSelected = selectorFamily<boolean, string>({
  key: 'region/isSelected',
  get: regionId => ({get}) => get(selectedIds).find(id => id === regionId) !== undefined,
})

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

// This returns the pixel boundaries of the region in relation to the channel track.
const occupiedArea = selectorFamily<[number, number], string>({
  key: 'region/occupiedArea',
  get: regionId => ({get}) => {
    const trimEndVal = get(trimEnd(regionId));
    const trimStartVal = get(trimStart(regionId));
    const secondsToPixel = (seconds: number) => get(arrangeWindowStore.pixelPerSecond) * seconds

    const startVal = secondsToPixel(get(start(regionId))) + secondsToPixel(trimStartVal);
    const trimmedWidth = secondsToPixel(trimEndVal) - secondsToPixel(trimStartVal);

    return [startVal, startVal + trimmedWidth];
  }
});

export const regionStore = {
  start,
  name,
  audioBuffer,
  audioBufferPointer,
  peakBuckets,
  isSolo,
  isMuted,
  isRecording,
  isSelected,
  trimStart,
  trimEnd,
  regionState,
  ids,
  findByIds,
  findIdsByChannelId,
  findByChannelId,
  occupiedArea,
  staticCounter,
  selectedIds,
};