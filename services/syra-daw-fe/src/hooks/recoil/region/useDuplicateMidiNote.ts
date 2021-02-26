import { useRecoilCallback } from "recoil";
import { regionStore } from "../../../recoil/regionStore";
import { MidiNote } from "../../../types/Midi";
import { cloneDeep } from 'lodash';
import * as Tone from 'tone';
import { createNewId } from "../../../utils/createNewId";
import { MIDI_ID_PREFIX } from "../../../const/ids";
import { replaceItemAtIndex } from "../../../utils/recoil";

export default function useDuplicateMidiNote() {
  return useRecoilCallback(({snapshot, set}) => (regionId: string, midiNoteId: string, time: Tone.TimeClass, noteValue: number) => {
    const midiNotes = snapshot.getLoadable(regionStore.midiNotes(regionId)).contents as MidiNote[];
    const midiNote = cloneDeep(midiNotes.find(note => note.id === midiNoteId));
    const midiNoteIndex = midiNotes.findIndex(note => note.id === midiNoteId);

    if (midiNote) {
      const clonedNote = cloneDeep(midiNote);

      clonedNote.id = createNewId(MIDI_ID_PREFIX);
      midiNote.time = time.toSeconds();
      midiNote.ticks = time.toTicks();
      midiNote.midi += noteValue;

      console.log('set new note');

      set(regionStore.midiNotes(regionId), [...replaceItemAtIndex(midiNotes, midiNoteIndex, midiNote), clonedNote]);

      return clonedNote.id;
    }
  }, []);
}