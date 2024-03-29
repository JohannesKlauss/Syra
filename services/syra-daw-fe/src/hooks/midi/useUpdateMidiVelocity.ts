import { useRecoilCallback } from "recoil";
import { pianoRollStore } from "../../recoil/pianoRollStore";
import { regionStore } from "../../recoil/regionStore";
import { replaceItemAtIndex } from "../../utils/recoil";
import { clamp } from "../../utils/numbers";

export default function useUpdateMidiVelocity(isRelative?: boolean) {
  return useRecoilCallback(({set, snapshot}) => (velocity: number, noteId: string) => {
    const focusedMidiRegionId = snapshot.getLoadable(pianoRollStore.focusedMidiRegionId).getValue();
    const notes = snapshot.getLoadable(regionStore.midiNotes(focusedMidiRegionId)).getValue();

    const noteIndex = notes.findIndex(note => note.id === noteId);

    if (noteIndex > -1) {
      const note = notes[noteIndex];

      set(regionStore.midiNotes(focusedMidiRegionId), replaceItemAtIndex(notes, noteIndex, {
        ...note,
        velocity: clamp(isRelative ? note.velocity + velocity : velocity, 0, 127),
      }));

      return true;
    }

    return false;
  }, [isRelative]);
}