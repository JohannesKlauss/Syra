import { useIsHotkeyPressed } from "react-hotkeys-hook";
import {useRecoilCallback} from "recoil";
import {RegionContext} from "../../../../providers/RegionContext";
import {useContext} from "react";
import {regionStore} from "../../../../recoil/regionStore";
import {Note} from "@tonejs/midi/dist/Note";
import { Header } from "@tonejs/midi";

export default function useDrawMidiNote(note: number) {
  const isPressed = useIsHotkeyPressed();
  const regionId = useContext(RegionContext);

  return useRecoilCallback(({set, snapshot}) => (noteOnAtTicks: number, noteOffAtTicks: number, velocity: number) => {
    const midiNotes = snapshot.getLoadable(regionStore.midiNotes(regionId)).contents as Note[];

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

    set(regionStore.midiNotes(regionId), [...midiNotes, newNote]);
  }, [isPressed, note, regionId]);
}