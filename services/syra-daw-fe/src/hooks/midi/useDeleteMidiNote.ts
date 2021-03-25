import {useRecoilCallback} from "recoil";
import {pianoRollStore} from "../../recoil/pianoRollStore";
import {regionStore} from "../../recoil/regionStore";
import {MidiNote} from "../../types/Midi";
import {removeItemAtIndex} from "../../utils/recoil";

export default function useDeleteMidiNote() {
  return useRecoilCallback(({set, snapshot}) => (noteId: string) => {
    const focusedMidiRegionId = snapshot.getLoadable(pianoRollStore.focusedMidiRegionId).getValue();
    const notes = snapshot.getLoadable(regionStore.midiNotes(focusedMidiRegionId)).getValue();

    const noteIndex = notes.findIndex(note => note.id === noteId);

    set(regionStore.midiNotes(focusedMidiRegionId), removeItemAtIndex(notes, noteIndex));
  }, []);
}