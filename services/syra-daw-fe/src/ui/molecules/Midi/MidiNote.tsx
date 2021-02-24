import React, { useRef } from "react";
import useVelocityColors from '../../../hooks/midi/useVelocityColors';
import { useRecoilValue } from 'recoil';
import ResizableBox from '../../atoms/ResizableBox';
import { MidiNote as TMidiNote } from '../../../types/Midi';
import useUpdateMidiPosition from '../../../hooks/midi/useUpdateMidiPosition';
import * as Tone from 'tone';
import usePixelToTicks from '../../../hooks/tone/usePixelToTicks';
import useDeleteMidiNote from '../../../hooks/midi/useDeleteMidiNote';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';
import { pianoRollStore } from '../../../recoil/pianoRollStore';
import { regionStore } from '../../../recoil/regionStore';
import useTicksToPixel from '../../../hooks/tone/useTicksToPixel';
import { GridMouseMode } from '../../../types/GridMouseMode';
import useUpdateMidiVelocity from '../../../hooks/midi/useUpdateMidiVelocity';
import { PIANO_ROLL_MIDI_TRACK_HEIGHT } from "../../../const/ui";
import useUpdateMidiNoteValue from "../../../hooks/midi/useUpdateMidiNoteValue";

interface Props {
  note: TMidiNote;
}

const MidiNote: React.FC<Props> = ({ note }) => {
  const velocityColor = useVelocityColors();
  const updatePosition = useUpdateMidiPosition();
  const updateVelocity = useUpdateMidiVelocity(true);
  const updateMidiNoteValue = useUpdateMidiNoteValue(true);
  const pixelToTicks = usePixelToTicks();
  const ticksToPixel = useTicksToPixel();
  const deleteNote = useDeleteMidiNote();
  const isPressed = useIsHotkeyPressed();
  const focusedMidiRegionId = useRecoilValue(pianoRollStore.focusedMidiRegionId);
  const start = useRecoilValue(regionStore.start(focusedMidiRegionId));
  const mouseMode = useRecoilValue(pianoRollStore.mouseMode);
  const lastVelocityOffset = useRef(0);

  const onPositionChanged = (start: number, duration: number) => {
    updatePosition(Tone.Ticks(pixelToTicks(start)), Tone.Ticks(pixelToTicks(duration)), note.id);
  };

  const onYChanged = (offset: number) => {
    // If mouse mode is not velocity a changing Y value means that ne note was transposed.
    if (mouseMode !== GridMouseMode.VELOCITY) {
      updateMidiNoteValue(-(offset / PIANO_ROLL_MIDI_TRACK_HEIGHT), note.id);

      return;
    }

    const velocity = Math.round(-((offset - lastVelocityOffset.current) / 2.5));

    lastVelocityOffset.current = offset;

    updateVelocity(velocity, note.id);
  };

  const onClick = () => {
    isPressed('alt') && deleteNote(note.id);
  };

  return (
    <ResizableBox
      cursor={mouseMode === GridMouseMode.VELOCITY ? 'vertical-text' : 'default'}
      bg={velocityColor(note.velocity)}
      baseX={ticksToPixel(note.ticks)}
      onClick={onClick}
      baseWidth={ticksToPixel(note.durationTicks)}
      h={`${PIANO_ROLL_MIDI_TRACK_HEIGHT}px`}
      border={'1px solid black'}
      offset={ticksToPixel(start)}
      allowOverExtendingStart
      lockDrag={mouseMode === GridMouseMode.VELOCITY}
      onMotionDragEnd={() => lastVelocityOffset.current = 0}
      onYChanged={onYChanged}
      onPositionChanged={onPositionChanged}
    >

    </ResizableBox>
  );
};

// @ts-ignore
MidiNote.whyDidYouRender = true;

export default MidiNote;
