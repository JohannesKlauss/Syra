import { useRecoilCallback } from "recoil";
import { MidiNote } from "../../../types/Midi";
import { regionStore } from "../../../recoil/regionStore";
import * as Tone from 'tone';

export default function useAddMidiNotesToRegion() {
  return useRecoilCallback(({set, snapshot}) => (regionId: string, notes: MidiNote[], offsetStart: number) => {
    const currentNotes = snapshot.getLoadable(regionStore.midiNotes(regionId)).contents as MidiNote[];
    const start = snapshot.getLoadable(regionStore.start(regionId)).contents as number;
    const duration = snapshot.getLoadable(regionStore.duration(regionId)).contents as number;

    const combinedNotes: MidiNote[] = [];

    if (offsetStart < 0) {
      notes.forEach(note => {
        combinedNotes.push({
          ...note,
          ticks: note.ticks - offsetStart,
          time: note.time - Tone.Ticks(offsetStart).toSeconds(),
        });
      });

      currentNotes.forEach(note => {
        combinedNotes.push({
          ...note,
          ticks: note.ticks - offsetStart,
          time: note.time - Tone.Ticks(offsetStart).toSeconds(),
        });
      });

      set(regionStore.start(regionId), start + offsetStart);
      set(regionStore.duration(regionId), duration - offsetStart);
    }

    set(regionStore.midiNotes(regionId), combinedNotes);
  }, []);
}