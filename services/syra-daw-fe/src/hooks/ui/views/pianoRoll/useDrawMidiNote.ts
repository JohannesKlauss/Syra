import { useIsHotkeyPressed } from "react-hotkeys-hook";
import {useRecoilCallback, useRecoilValue} from "recoil";
import {regionStore} from "../../../../recoil/regionStore";
import {Note} from "@tonejs/midi/dist/Note";
import { Header } from "@tonejs/midi";
import {pianoRollStore} from "../../../../recoil/pianoRollStore";

export default function useDrawMidiNote(note: number) {
  const isPressed = useIsHotkeyPressed();
  const focusedMidiRegionId = useRecoilValue(pianoRollStore.focusedMidiRegionId);

  return useRecoilCallback(({set, snapshot}) => (noteOnAtTicks: number, noteOffAtTicks: number, velocity: number) => {
    const midiNotes = snapshot.getLoadable(regionStore.midiNotes(focusedMidiRegionId)).contents as Note[];

    const header = new Header();
    header.setTempo(180);

    const newNote = new Note({
      ticks: noteOnAtTicks,
      velocity,
      midi: note,
    }, {
      ticks: noteOffAtTicks,
      velocity: 0,
    }, header);

    console.log('Midi Notes', midiNotes);

    set(regionStore.midiNotes(focusedMidiRegionId), [...midiNotes, newNote]);
  }, [isPressed, note, focusedMidiRegionId]);
}