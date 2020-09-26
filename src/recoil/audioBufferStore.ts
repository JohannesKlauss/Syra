import { atom, atomFamily } from 'recoil';

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
  waveform,
  waveformImage,
  name,
  ids,
};