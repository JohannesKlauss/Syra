import { Box, useTheme } from '@chakra-ui/react';
import React, { useCallback, useContext, useRef } from 'react';
import * as Tone from 'tone';
import { MidiNumbers } from 'piano-utils';
import { ViewContext } from '../../../providers/ViewContext';
import { gridStore } from '../../../recoil/gridStore';
import { useRecoilValue } from 'recoil';
import useDrawMidiNote from '../../../hooks/ui/views/pianoRoll/useDrawMidiNote';
import usePixelToTicks from '../../../hooks/tone/usePixelToTicks';
import MidiNoteList from './MidiNoteList';
import useSnapPixelValue from '../../../hooks/ui/useSnapPixelValue';
import { pianoRollStore } from '../../../recoil/pianoRollStore';
import { regionStore } from '../../../recoil/regionStore';
import useTicksToPixel from '../../../hooks/tone/useTicksToPixel';
import usePianoRollCursor from '../../../hooks/ui/views/pianoRoll/usePianoRollCursor';
import { GridMouseMode } from '../../../types/GridMouseMode';
import { PIANO_ROLL_MIDI_TRACK_HEIGHT } from "../../../const/ui";

interface Props {
  note: number;
  isEven: boolean;
}

const MidiTrack: React.FC<Props> = ({ note }) => {
  const theme = useTheme();
  const { isAccidental } = MidiNumbers.getAttributes(note);
  const { view } = useContext(ViewContext);
  const totalWidth = useRecoilValue(gridStore.totalWidth(view));
  const focusedMidiRegionId = useRecoilValue(pianoRollStore.focusedMidiRegionId);
  const start = useRecoilValue(regionStore.start(focusedMidiRegionId));
  const drawMidiNote = useDrawMidiNote(note);
  const pixelToTicks = usePixelToTicks();
  const ticksToPixel = useTicksToPixel();
  const snapPixelValue = useSnapPixelValue();
  const ref = useRef<HTMLDivElement>(null);
  const cursor = usePianoRollCursor();
  const mouseMode = useRecoilValue(pianoRollStore.mouseMode);

  const onClickMidiTrack = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // TODO: THIS IS WEIRD. THE CLICK BUBBLING DOESN't STOP INSIDE RESIZABLE BOX, EVEN THOUGH WE CANCEL EVERYTHING.
    // SO WE CURRENTLY USE A REF, BUT THIS IS SUPER WONKY AND SHOULDN'T BE NECESSARY.
    if (e.target !== ref.current || mouseMode === GridMouseMode.VELOCITY) {
      return;
    }

    // @ts-ignore
    const x = e.nativeEvent.layerX;

    const cleanX = snapPixelValue(x - ticksToPixel(start));

    if (cleanX >= 0) {
      drawMidiNote(Tone.Ticks(pixelToTicks(cleanX)), Tone.Ticks(1, 'm'), 127);
    }
  }, [ref, drawMidiNote, pixelToTicks, snapPixelValue, start, mouseMode, ticksToPixel]);

  return (
    <Box
      ref={ref}
      pos={'relative'}
      borderBottom={`1px solid ${theme.colors.gray[900]}`}
      h={`${PIANO_ROLL_MIDI_TRACK_HEIGHT}px`}
      bg={isAccidental ? 'gray.800' : 'gray.700'}
      w={`${totalWidth}px`}
      onClick={onClickMidiTrack}
      title={Tone.Frequency(note, 'midi').toNote()}
      cursor={cursor}
    >
      <MidiNoteList note={note}/>
    </Box>
  );
};

// @ts-ignore
MidiTrack.whyDidYouRender = true;

export default MidiTrack;
