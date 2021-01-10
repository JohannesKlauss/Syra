import { Box, useTheme } from '@chakra-ui/react';
import React, { useContext } from "react";
import * as Tone from 'tone';
import { MidiNumbers } from "piano-utils";
import { ViewContext } from "../../../providers/ViewContext";
import { gridStore } from "../../../recoil/gridStore";
import { useRecoilValue } from "recoil";
import { pianoRollStore } from "../../../recoil/pianoRollStore";
import MidiNote from "./MidiNote";
import useDrawMidiNote from "../../../hooks/ui/views/pianoRoll/useDrawMidiNote";
import usePixelToTicks from "../../../hooks/tone/usePixelToTicks";

interface Props {
  note: number;
  isEven: boolean;
}

const MidiTrack: React.FC<Props> = ({ note, isEven }) => {
  const theme = useTheme();
  const { isAccidental } = MidiNumbers.getAttributes(note);
  const { view } = useContext(ViewContext);
  const totalWidth = useRecoilValue(gridStore.totalWidth(view));
  const midiNotesAtTrack = useRecoilValue(pianoRollStore.midiNotesAtTrack(note));
  const drawMidiNote = useDrawMidiNote(note);
  const pixelToTicks = usePixelToTicks();

  const focusedMidiRegionId = useRecoilValue(pianoRollStore.focusedMidiRegionId);

  // console.log('notes', midiNotesAtTrack);

  const onClickMidiTrack = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('x', e.clientX - 50);
    console.log('ticks', pixelToTicks(e.clientX - 50).toTicks());

    drawMidiNote(pixelToTicks(e.clientX - 50).toTicks(), pixelToTicks(e.clientX + 100 - 50).toTicks(), 127);
  };

  return (
    <Box
      pos={'relative'}
      borderBottom={`1px solid ${theme.colors.gray[900]}`}
      h={'14px'}
      bg={isAccidental ? 'gray.800' : 'gray.700'}
      w={totalWidth}
      onClick={onClickMidiTrack}
      title={Tone.Frequency(note, 'midi').toNote()}
      cursor={'url("/icons/cursor/pencil.svg") 0 24, auto'}
    >
      {midiNotesAtTrack.map((note, i) => <MidiNote note={note} key={i}/>)}
    </Box>
  );
};

// @ts-ignore
MidiTrack.whyDidYouRender = true;

export default MidiTrack;
