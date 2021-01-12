import { Box, useTheme } from '@chakra-ui/react';
import React, { useContext, useRef, useCallback } from "react";
import * as Tone from 'tone';
import { MidiNumbers } from "piano-utils";
import { ViewContext } from "../../../providers/ViewContext";
import { gridStore } from "../../../recoil/gridStore";
import { useRecoilValue } from "recoil";
import useDrawMidiNote from "../../../hooks/ui/views/pianoRoll/useDrawMidiNote";
import usePixelToTicks from "../../../hooks/tone/usePixelToTicks";
import MidiNoteList from './MidiNoteList';
import useSnapPixelValue from '../../../hooks/ui/useSnapPixelValue';

interface Props {
  note: number;
  isEven: boolean;
}

const MidiTrack: React.FC<Props> = ({ note }) => {
  const theme = useTheme();
  const { isAccidental } = MidiNumbers.getAttributes(note);
  const { view } = useContext(ViewContext);
  const totalWidth = useRecoilValue(gridStore.totalWidth(view));
  const drawMidiNote = useDrawMidiNote(note);
  const pixelToTicks = usePixelToTicks();
  const snapPixelValue = useSnapPixelValue();
  const ref = useRef<HTMLDivElement>(null);

  const onClickMidiTrack = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // TODO: THIS IS WEIRD. THE CLICK BUBBLING DOESN't STOP INSIDE RESIZABLE BOX, EVEN THOUGH WE CANCEL EVERYTHING.
    if (e.target !== ref.current) {
      return;
    }

    drawMidiNote(Tone.Ticks(pixelToTicks(snapPixelValue(e.clientX - 50))), Tone.Ticks(1, 'm'), 127);
  }, [ref, drawMidiNote, pixelToTicks]);

  return (
    <Box
      ref={ref}
      pos={'relative'}
      borderBottom={`1px solid ${theme.colors.gray[900]}`}
      h={'14px'}
      bg={isAccidental ? 'gray.800' : 'gray.700'}
      w={totalWidth}
      onClick={onClickMidiTrack}
      title={Tone.Frequency(note, 'midi').toNote()}
      cursor={'url("/icons/cursor/pencil.svg") 0 24, auto'}
    >
      <MidiNoteList note={note}/>
    </Box>
  );
};

// @ts-ignore
MidiTrack.whyDidYouRender = true;

export default MidiTrack;
