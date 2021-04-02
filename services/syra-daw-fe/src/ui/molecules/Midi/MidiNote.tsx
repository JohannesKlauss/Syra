import React, { useRef, useState } from 'react';
import useVelocityColors from '../../../hooks/midi/useVelocityColors';
import { useRecoilValue } from 'recoil';
import { MidiNote as TMidiNote } from '../../../types/Midi';
import useUpdateMidiPosition from '../../../hooks/midi/useUpdateMidiPosition';
import * as Tone from 'tone';
import usePixelToTicks from '../../../hooks/ui/usePixelToTicks';
import useDeleteMidiNote from '../../../hooks/midi/useDeleteMidiNote';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';
import { pianoRollStore } from '../../../recoil/pianoRollStore';
import { regionStore } from '../../../recoil/regionStore';
import useTicksToPixel from '../../../hooks/ui/useTicksToPixel';
import { GridMouseMode } from '../../../types/GridMouseMode';
import useUpdateMidiVelocity from '../../../hooks/midi/useUpdateMidiVelocity';
import { PIANO_ROLL_MIDI_TRACK_HEIGHT } from '../../../const/ui';
import useUpdateMidiNoteValue from '../../../hooks/midi/useUpdateMidiNoteValue';
import ClonableResizableBox from '../../atoms/ClonableResizableBox';
import { Box } from '@chakra-ui/react';
import useDuplicateMidiNote from "../../../hooks/recoil/region/useDuplicateMidiNote";

interface Props {
  note: TMidiNote;
}

const MidiNote: React.FC<Props> = ({ note }) => {
  const [isMoving, setIsMoving] = useState(false);
  const velocityColor = useVelocityColors();
  const updatePosition = useUpdateMidiPosition();
  const updateVelocity = useUpdateMidiVelocity(true);
  const updateMidiNoteValue = useUpdateMidiNoteValue(true);
  const duplicateMidiNote = useDuplicateMidiNote();
  const pixelToTicks = usePixelToTicks();
  const ticksToPixel = useTicksToPixel();
  const deleteNote = useDeleteMidiNote();
  const isPressed = useIsHotkeyPressed();
  const focusedMidiRegionId = useRecoilValue(pianoRollStore.focusedMidiRegionId);
  const start = useRecoilValue(regionStore.start(focusedMidiRegionId));
  const offset = useRecoilValue(regionStore.offset(focusedMidiRegionId));
  const mouseMode = useRecoilValue(pianoRollStore.mouseMode);
  const lastVelocityOffset = useRef(0);

  const onPositionChanged = (start: number, duration: number) => {
    updatePosition(Tone.Ticks(pixelToTicks(start)), Tone.Ticks(pixelToTicks(duration)), note.id);
  };

  const onYChanged = (offset: number) => {
    // If mouse mode is not velocity a changing Y value means that ne note was transposed.
    if (mouseMode !== GridMouseMode.VELOCITY) {
      return updateMidiNoteValue(-(offset / PIANO_ROLL_MIDI_TRACK_HEIGHT), note.id);
    }

    const velocity = Math.round(-((offset - lastVelocityOffset.current) / 2.5));

    lastVelocityOffset.current = offset;

    return updateVelocity(velocity, note.id);
  };

  const onClick = () => {
    !isMoving && isPressed('alt') && deleteNote(note.id);

    setIsMoving(false);
  };

  const onDuplicateMidiNote = (x: number, y: number) => {
    duplicateMidiNote(focusedMidiRegionId, note.id, Tone.Ticks(pixelToTicks(x)), -(y / PIANO_ROLL_MIDI_TRACK_HEIGHT));
  };

  return (
    <ClonableResizableBox
      baseX={ticksToPixel(note.ticks)}
      onClick={onClick}
      baseWidth={ticksToPixel(note.durationTicks)}
      offset={ticksToPixel(start - offset)}
      allowOverExtendingStart
      lockDrag={mouseMode === GridMouseMode.VELOCITY}
      onMotionDragStart={() => setIsMoving(true)}
      onMotionDragEnd={() => (lastVelocityOffset.current = 0)}
      onYChanged={onYChanged}
      onPositionChanged={onPositionChanged}
      onBoxCloned={onDuplicateMidiNote}
    >
      <Box bg={velocityColor(note.velocity)} border={"1px solid black"} h={`${PIANO_ROLL_MIDI_TRACK_HEIGHT}px`} cursor={mouseMode === GridMouseMode.VELOCITY ? "vertical-text" : "default"}/>
    </ClonableResizableBox>
  );
};

// @ts-ignore
MidiNote.whyDidYouRender = true;

export default MidiNote;
