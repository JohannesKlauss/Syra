import { useIsHotkeyPressed } from "react-hotkeys-hook";
import {useRecoilCallback, useRecoilValue} from "recoil";
import {regionStore} from "../../../../recoil/regionStore";
import { Header } from "@tonejs/midi";
import {pianoRollStore} from "../../../../recoil/pianoRollStore";
import {MidiNote} from "../../../../types/Midi";
import * as Tone from 'tone';

export default function useDrawMidiNote(note: number) {
  const isPressed = useIsHotkeyPressed();
  const focusedMidiRegionId = useRecoilValue(pianoRollStore.focusedMidiRegionId);

  return useRecoilCallback(({set, snapshot}) => (noteOnAt: Tone.TicksClass, duration: Tone.TicksClass, velocity: number) => {
    const midiNotes = snapshot.getLoadable(regionStore.midiNotes(focusedMidiRegionId)).contents as MidiNote[];

    const header = new Header();
    header.setTempo(180);

    const newNote: MidiNote = {
      ticks: noteOnAt.toTicks(),
      time: noteOnAt.toSeconds(),
      velocity,
      midi: note,
      noteOffVelocity: 0,
      durationTicks: noteOnAt.toTicks() + duration.toTicks(),
      duration: noteOnAt.toSeconds() + duration.toSeconds(),
    };

    set(regionStore.midiNotes(focusedMidiRegionId), [...midiNotes, newNote]);

    console.log('Midi Note', newNote);
  }, [isPressed, note, focusedMidiRegionId]);
}