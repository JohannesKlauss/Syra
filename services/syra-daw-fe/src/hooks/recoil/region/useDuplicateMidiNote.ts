import { useRecoilCallback } from "recoil";
import { regionStore } from "../../../recoil/regionStore";
import { MidiNote } from "../../../types/Midi";
import { cloneDeep } from 'lodash';
import * as Tone from 'tone';
import { createNewId } from "../../../utils/createNewId";
import { MIDI_ID_PREFIX } from "../../../const/ids";

export default function useDuplicateMidiNote() {
  return useRecoilCallback(({snapshot, set}) => (regionId: string, midiNoteId: string, time: Tone.TimeClass) => {
    const midiNotes = snapshot.getLoadable(regionStore.midiNotes(regionId)).contents as MidiNote[];
    const midiNote = midiNotes.find(note => note.id === midiNoteId);

    if (midiNote) {
      const clonedNote = cloneDeep(midiNote);

      clonedNote.id = createNewId(MIDI_ID_PREFIX);
      clonedNote.time = time.toSeconds();
      clonedNote.ticks = time.toTicks();

      set(regionStore.midiNotes(regionId), [...midiNotes, clonedNote]);
    }
  }, []);
}