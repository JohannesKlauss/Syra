import { atomFamily, selectorFamily } from 'recoil';
import atomWithEffects from './proxy/atomWithEffects';
import { syncEffectsComb } from './effects/syncEffectsComb';
import atomFamilyWithEffects from './proxy/atomFamilyWithEffects';
import * as Tone from 'tone';
import WaveformData from 'waveform-data';
import { makeFileBufferSelector } from './selectors/makeFileBufferSelector';
import { transportStore } from "./transportStore";

const ids = atomWithEffects<string[]>({
  key: 'audioBuffer/ids',
  default: [],
  effects: [...syncEffectsComb],
});

const internalBuffer = atomFamily<AudioBuffer | null, string>({
  key: 'audioBuffer/internalBuffer',
  default: null,
});

const internalPeakWaveform = atomFamily<WaveformData | null, string>({
  key: 'audioBuffer/internalPeakWaveform',
  default: null,
});

const name = atomFamilyWithEffects<string, string>({
  key: 'audioBuffer/name',
  default: '',
  effects: [...syncEffectsComb],
});

/**
 * This saves the reference id for the transcoding job on the server side.
 * Each time we create a new buffer it gets send to the server to transcode
 * it to flac and analyze the content. This is the transcode to flac job id.
 * A GQL subscription then waits for a response from the server matching this
 * id and sending along the actual database id.
 */
const transcodeJobId = atomFamily<string, string>({
  key: 'audioBuffer/transcodeJobId',
  default: '',
});

// This id is used to reference the file on local storage and on the server.
// Use this to load the wanted file.
// This is identical to the database ID of the transcoded asset.
// This gets stored after the the transcode job finishes and the GQL sub triggers.
const storedBufferId = atomFamilyWithEffects<string, string>({
  key: 'audioBuffer/storedBufferId',
  default: '',
  effects: [...syncEffectsComb],
});

const storedPeakWaveformId = atomFamilyWithEffects<string, string>({
  key: 'audioBuffer/storedPeakWaveformId',
  default: '',
  effects: [...syncEffectsComb],
});

const isInSyncWithDb = selectorFamily<boolean, string>({
  key: 'audioBuffer/isInSyncWithDb',
  get: (bufferId) => ({ get }) => {
    return get(storedPeakWaveformId(bufferId)).length > 0 && get(storedBufferId(bufferId)).length > 0;
  },
});

const durationInTicks = selectorFamily<number, string>({
  key: 'audioBuffer/durationInTicks',
  get: (bufferId) => ({ get }) => {
    const audioBuffer = get(buffer(bufferId));

    if (audioBuffer === null) {
      return 0;
    }

    get(transportStore.currentTempo);

    return Tone.Ticks(audioBuffer.duration, 's').toTicks();
  },
});

// In this family we store all the available audio buffers. A region then can point to a buffer and reference it.
// This way multiple regions can reference the same buffer without having to recreate it every time.
const buffer = selectorFamily<AudioBuffer | null, string>({
  key: 'audioBuffer/buffer',
  get: makeFileBufferSelector(
    internalBuffer,
    storedBufferId,
    'flac',
  )(async (arrayBuffer) => await Tone.getContext().decodeAudioData(arrayBuffer)),
  set: (bufferId) => ({ set }, buffer) => set(internalBuffer(bufferId), buffer),
});

const peakWaveform = selectorFamily<WaveformData | null, string>({
  key: 'audioBuffer/peakWaveform',
  get: makeFileBufferSelector(
    internalPeakWaveform,
    storedPeakWaveformId,
    'dat',
  )((arrayBuffer) => Promise.resolve(WaveformData.create(arrayBuffer))),
  set: (bufferId) => ({ set }, buffer) => set(internalPeakWaveform(bufferId), buffer),
});

export const audioBufferStore = {
  buffer,
  peakWaveform,
  name,
  ids,
  storedBufferId,
  storedPeakWaveformId,
  isInSyncWithDb,
  transcodeJobId,
  durationInTicks,
};
