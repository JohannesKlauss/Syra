import { atom, atomFamily } from 'recoil/dist';
import * as Tone from 'tone';

// In this family we store all the available audio buffers. A region then can point to a buffer and reference it.
// This way multiple regions can reference the same buffer without having to recreate it every time.
const buffer = atomFamily<Tone.ToneAudioBuffer | null, string>({
  key: 'audioBuffer/buffer',
  default: null,
});

// String here does not refer to the buffer id alone, but a combined format of all parameters that define the shape
// of a waveform. Buffer Id, width, height and smoothing. Format will be like: BUFFER_ID.WIDTH.HEIGHT.SMOOTHING
const waveform = atomFamily<number[], string>({
  key: 'audioBuffer/waveform',
  default: [],
});

const ids = atom<string[]>({
  key: 'audioBuffer/ids',
  default: [],
});

export const audioBufferStore = {
  buffer,
  waveform,
  ids,
};