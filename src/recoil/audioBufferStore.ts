import { atom, atomFamily, selectorFamily } from 'recoil';
import { arrangeWindowStore } from './arrangeWindowStore';

// In this family we store all the available audio buffers. A region then can point to a buffer and reference it.
// This way multiple regions can reference the same buffer without having to recreate it every time.
const buffer = atomFamily<AudioBuffer | null, string>({
  key: 'audioBuffer/buffer',
  default: null,
});

// Peaks holds a down sampled variant converted to Uint8 values of the raw buffer (0 - 255). Used for quick peak analyzing and
// waveform creation.
const peaks = atomFamily<SharedArrayBuffer | null, string>({
  key: 'audioBuffer/analyzedPeaks',
  default: null,
});

// This is creating buckets on the fly depending on position and tempo of the region.
// Those buckets represent the index boundaries to calculate the value of on pixel for the waveform.
const peakBuckets = selectorFamily<[number, number][], string>({
  key: 'audioBuffer/peakBuckets',
  get: bufferId => ({get}) => {
    const rawBuffer = get(buffer(bufferId));
    const rawPeaks = get(peaks(bufferId));

    if (rawPeaks === null || rawBuffer === null) {
      return [];
    }

    const peaksView = new Uint8Array(rawPeaks);
    const quarterWidth = get(arrangeWindowStore.zoomedQuarterPixelWidth);
    const pixelPerSecond = 2 * quarterWidth;
    const indexRange = Math.ceil(peaksView.length / (rawBuffer.duration * pixelPerSecond));
    const buckets: [number, number][] = [];

    for (let i = 0, j = 0; j < rawBuffer.duration * pixelPerSecond; i += indexRange, j++) {
      buckets[j] = [i, i + indexRange - 1];
    }

    buckets[buckets.length - 1][1] = rawPeaks.byteLength - 1;

    return buckets;
  }
});

const pixelPeaks = selectorFamily<number[], string | null>({
  key: 'audioBuffer/peaks',
  get: bufferId => ({get}) => {
    if (bufferId === null) {
      return [];
    }

    const buckets = get(peakBuckets(bufferId));
    const rawPeaks = get(peaks(bufferId));

    if (rawPeaks === null) {
      return [];
    }

    const peaksView = new Uint8Array(rawPeaks);

    const SMOOTHING = 1;

    const peaksPerPixel = new Array(buckets.length);

    for (let i = 0; i < buckets.length; i += SMOOTHING) {
      let max = 0;

      for(let j = buckets[i][0]; j <= buckets[i][1]; j++) {
        if (peaksView[j] > max) {
          max = peaksView[j];
        }
      }

      peaksPerPixel[i] = max;
    }

    return peaksPerPixel;
  }
});

// String here does not refer to the buffer id alone, but a combined format of all parameters that define the shape
// of a waveform. Buffer Id, width, height and smoothing. Format will be like: BUFFER_ID.WIDTH.HEIGHT.SMOOTHING
const waveform = atomFamily<number[], string>({
  key: 'audioBuffer/waveform',
  default: [],
});

const waveformImage = atomFamily<string, string>({
  key: 'audioBuffer/waveformImage',
  default: '',
});

const name = atomFamily<string, string>({
  key: 'audioBuffer/name',
  default: '',
})

const ids = atom<string[]>({
  key: 'audioBuffer/ids',
  default: [],
});

export const audioBufferStore = {
  buffer,
  peaks,
  peakBuckets,
  pixelPeaks,
  waveform,
  waveformImage,
  name,
  ids,
};