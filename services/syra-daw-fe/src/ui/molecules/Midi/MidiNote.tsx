import React from 'react';
import useVelocityColors from '../../../hooks/midi/useVelocityColors';
import { useRecoilValue } from 'recoil';
import ResizableBox from '../../atoms/ResizableBox';
import { MidiNote as TMidiNote } from '../../../types/Midi';
import useUpdateMidiPosition from '../../../hooks/midi/useUpdateMidiPosition';
import * as Tone from 'tone';
import usePixelToTicks from '../../../hooks/tone/usePixelToTicks';
import useDeleteMidiNote from '../../../hooks/midi/useDeleteMidiNote';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';
import { pianoRollStore } from "../../../recoil/pianoRollStore";
import { regionStore } from "../../../recoil/regionStore";
import useTicksToPixel from "../../../hooks/tone/useTicksToPixel";

interface Props {
  note: TMidiNote;
}

const MidiNote: React.FC<Props> = ({ note }) => {
  const velocityColor = useVelocityColors();
  const updatePosition = useUpdateMidiPosition();
  const pixelToTicks = usePixelToTicks();
  const ticksToPixel = useTicksToPixel();
  const deleteNote = useDeleteMidiNote();
  const isPressed = useIsHotkeyPressed();
  const focusedMidiRegionId = useRecoilValue(pianoRollStore.focusedMidiRegionId);
  const start = useRecoilValue(regionStore.start(focusedMidiRegionId));

  const onPositionChanged = (start: number, duration: number) => {
    updatePosition(Tone.Ticks(pixelToTicks(start)), Tone.Ticks(pixelToTicks(duration)), note.id);
  };

  const onClick = () => {
    isPressed('alt') && deleteNote(note.id);
  };

  return (
    <ResizableBox
      cursor={'default'}
      bg={velocityColor(note.velocity)}
      baseX={ticksToPixel(note.ticks)}
      onClick={onClick}
      baseWidth={ticksToPixel(note.durationTicks)}
      h={'14px'}
      border={'1px solid black'}
      offset={ticksToPixel(start)}
      allowOverExtendingStart
      onPositionChanged={onPositionChanged}
    />
  );
};

// @ts-ignore
MidiNote.whyDidYouRender = true;

export default MidiNote;
