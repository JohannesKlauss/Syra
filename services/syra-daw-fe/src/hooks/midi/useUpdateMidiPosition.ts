import {useRecoilCallback} from "recoil";
import {regionStore} from "../../recoil/regionStore";
import {MidiNote} from "../../types/Midi";
import * as Tone from 'tone';
import {replaceItemAtIndex} from "../../utils/recoil";
import {pianoRollStore} from "../../recoil/pianoRollStore";

export default function useUpdateMidiPosition() {
  return useRecoilCallback(({set, snapshot}) => (start: Tone.TimeClass, duration: Tone.TimeClass, noteId: string) => {
    const focusedMidiRegionId = snapshot.getLoadable(pianoRollStore.focusedMidiRegionId).getValue();
    const notes = snapshot.getLoadable(regionStore.midiNotes(focusedMidiRegionId)).getValue();

    const noteIndex = notes.findIndex(note => note.id === noteId);

    if (noteIndex > -1) {
      const note = notes[noteIndex];

      set(regionStore.midiNotes(focusedMidiRegionId), replaceItemAtIndex(notes, noteIndex, {
        ...note,
        time: start.toSeconds(),
        ticks: start.toTicks(),
        duration: duration.toSeconds(),
        durationTicks: duration.toTicks(),
      }));
    }
  }, []);
}