import { useRecoilCallback } from "recoil";
import { pianoRollStore } from "../../recoil/pianoRollStore";
import { regionStore } from "../../recoil/regionStore";
import { MidiNote } from "../../types/Midi";
import { replaceItemAtIndex } from "../../utils/recoil";

export default function useUpdateMidiNoteValue(isRelative?: boolean) {
  return useRecoilCallback(({set, snapshot}) => (midiNoteValue: number, noteId: string) => {
    const focusedMidiRegionId = snapshot.getLoadable(pianoRollStore.focusedMidiRegionId).contents as string;
    const notes = snapshot.getLoadable(regionStore.midiNotes(focusedMidiRegionId)).contents as MidiNote[];

    const noteIndex = notes.findIndex(note => note.id === noteId);

    if (noteIndex > -1) {
      const note = notes[noteIndex];

      const newNote = Math.max(0, isRelative ? note.midi + midiNoteValue : midiNoteValue, 127);

      if (newNote !== note.midi) {
        set(regionStore.midiNotes(focusedMidiRegionId), replaceItemAtIndex(notes, noteIndex, {
          ...note,
          midi: newNote,
        }));

        return true;
      }
    }

    return false;
  }, [isRelative]);
}