import { atom, atomFamily } from 'recoil/dist';
import * as Tone from 'tone';

// In this family we store all the available audio buffers. A region then can point to a buffer and reference it.
// This way multiple regions can reference the same buffer without having to recreate it every time.
const buffer = atomFamily<Tone.ToneAudioBuffer | null, string>({
  key: 'audioBuffer/buffer',
  default: null,
});

const ids = atom<string[]>({
  key: 'audioBuffer/ids',
  default: [],
});

export const audioBufferStore = {
  buffer,
  ids,
}