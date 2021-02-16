import { atom, selector, selectorFamily } from 'recoil';
import { regionStore } from './regionStore';
import { MidiNote } from '../types/Midi';
import { GridMouseMode } from '../types/GridMouseMode';

const selectedChannelId = atom({
  key: 'pianoRoll/selectedChannelId',
  default: '',
});

const focusedMidiRegionId = atom({
  key: 'pianoRoll/focusedMidiRegionId',
  default: '',
});

const mouseMode = atom<GridMouseMode>({
  key: 'pianoRoll/editMode',
  default: GridMouseMode.DEFAULT,
});

// TODO: Later on every midi region on the channel should be parsed.
const midiNotes = selector({
  key: 'pianoRoll/midiNotes',
  get: ({get}) => get(regionStore.midiNotes(get(focusedMidiRegionId))),
});

const midiNotesAtTrack = selectorFamily<MidiNote[], number>({
  key: 'pianoRoll/midiNotesAtTrack',
  get: trackNote => ({get}) => get(midiNotes).filter(note => note.midi === trackNote),
});

export const pianoRollStore = {
  mouseMode,
  selectedChannelId,
  focusedMidiRegionId,
  midiNotes,
  midiNotesAtTrack,
};