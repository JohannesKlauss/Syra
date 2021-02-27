import { atom, atomFamily, selectorFamily } from "recoil";
import { audioBufferStore } from "./audioBufferStore";
import { MidiNote } from "../types/Midi";
import atomFamilyWithEffects from "./proxy/atomFamilyWithEffects";
import { syncEffectsComb } from "./effects/syncEffectsComb";
import { undoRedoEffect } from "./effects/undoRedoEffect";
import * as Tone from 'tone';

// Sets the amount of ticks that region plays in relation to the transport. This now measured in quarters, not seconds!
const start = atomFamilyWithEffects<number, string>({
  key: 'region/start',
  default: 0, // This value is referring to the transport, not the audio buffer.
  effects: [...syncEffectsComb, undoRedoEffect],
});

// This will replace trimEnd. This is measured in ticks
const duration = atomFamilyWithEffects<number, string>({
  key: 'region/duration',
  default: Tone.Ticks(4, 'm').toTicks(),
  effects: [...syncEffectsComb, undoRedoEffect],
});

// The amount of ticks that the region gets trimmed at the beginning (this is basically the offset in relation to the audio buffer or first midi note)
const offset = atomFamilyWithEffects<number, string>({
  key: 'region/offset',
  default: 0,
  effects: [...syncEffectsComb, undoRedoEffect],
});

const isMuted = atomFamilyWithEffects<boolean, string>({
  key: 'region/isMuted',
  default: false,
  effects: [...syncEffectsComb],
});

const isSolo = atomFamilyWithEffects<boolean, string>({
  key: 'region/isSolo',
  default: false,
  effects: [...syncEffectsComb],
});

// Determines if the region is in a recording state. If so, no player gets connected and no scheduling happens.
const isRecording = atomFamily<boolean, string>({
  key: 'region/isRecording',
  default: false,
});

const isMidi = atomFamilyWithEffects<boolean, string>({
  key: 'region/isMidi',
  default: false,
  effects: [...syncEffectsComb],
});

const name = atomFamilyWithEffects<string, string>({
  key: 'region/name',
  default: '',
  effects: [...syncEffectsComb],
});

const audioBufferPointer = atomFamilyWithEffects<string | null, string>({
  key: 'region/audioBufferPointer',
  default: null,
  effects: [...syncEffectsComb],
});

const midiNotes = atomFamilyWithEffects<MidiNote[], string>({
  key: 'region/midiNotes',
  default: [],
  effects: [...syncEffectsComb, undoRedoEffect],
});

export interface RegionState {
  audioBuffer: AudioBuffer | null;
  start: number;
  duration: number;
  offset: number;
  isMuted: boolean;
  isSolo: boolean;
  isRecording: boolean;
  isMidi: boolean;
  name: string;
  midiNotes: MidiNote[];
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
      duration: get(duration(id)),
      offset: get(offset(id)),
      isSolo: get(isSolo(id)),
      isMuted: get(isMuted(id)),
      isRecording: get(isRecording(id)),
      isMidi: get(isMidi(id)),
      name: get(name(id)),
      midiNotes: get(midiNotes(id)),
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

const isInSync = selectorFamily<boolean, string>({
  key: 'region/isInSync',
  get: regionId => ({get}) => {
    const pointer = get(audioBufferPointer(regionId));

    return pointer !== null ? get(audioBufferStore.isInSyncWithDb(pointer)): true;
  }
})

// Parameter is channelId. This basically stores all regionIds for a channelId.
const ids = atomFamilyWithEffects<string[], string>({
  key: 'region/ids',
  default: [],
  effects: [...syncEffectsComb, undoRedoEffect],
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
    return [0, 0]; // TODO: We have to reimplement this, when adding back the selection tool
  }
});

const arrangeWindowPosition = selectorFamily<{ start: number, offset: number, duration: number }, string>({
  key: 'region/arrangeWindowPosition',
  get: regionId => ({get}) => ({
    start: get(start(regionId)),
    offset: get(offset(regionId)),
    duration: get(duration(regionId)),
  })
});

const midiNotesInsideBoundaries = selectorFamily<MidiNote[], string>({
  key: 'region/midiNotesInsideBoundaries',
  get: regionId => ({get}) => {
    const notes = get(midiNotes(regionId));
    const position = get(arrangeWindowPosition(regionId));

    return notes.filter(note => {
      return note.ticks >= position.offset && note.ticks < position.start + position.offset + position.duration
    });
  }
});

const findNearbyRegionId = selectorFamily<string | null, { channelId: string, position: number }>({
  key: 'region/findNearbyRegionId',
  get: ({channelId, position}) => ({get}) => {
    const regionIds = get(ids(channelId));

    // We only look for regions that are 2 quarters away from the current position.
    const nearbyMargin = Tone.Ticks(2, 'm').toTicks();

    for(let i = 0; i < regionIds.length; i++) {
      const regionStart = get(start(regionIds[i]));
      const regionEnd = regionStart + get(duration(regionIds[i]));

      if (regionStart - nearbyMargin < position && regionEnd + nearbyMargin > position) {
        return regionIds[i];
      }
    }

    return null;
  }
});

export const regionStore = {
  start,
  duration,
  offset,
  name,
  midiNotes,
  audioBuffer,
  audioBufferPointer,
  isSolo,
  isMuted,
  isRecording,
  isSelected,
  isMidi,
  isInSync,
  regionState,
  ids,
  findByIds,
  findIdsByChannelId,
  findByChannelId,
  occupiedArea,
  staticCounter,
  selectedIds,
  arrangeWindowPosition,
  midiNotesInsideBoundaries,
  findNearbyRegionId,
};