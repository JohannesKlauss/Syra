import { Box, useTheme } from '@chakra-ui/react';
import React, { useContext } from "react";
import * as Tone from 'tone';
import { MidiNumbers } from "piano-utils";
import { ViewContext } from "../../../providers/ViewContext";
import { gridStore } from "../../../recoil/gridStore";
import { useRecoilValue } from "recoil";
import { pianoRollStore } from "../../../recoil/pianoRollStore";
import MidiNote from "./MidiNote";

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

  return (
    <Box
      pos={'relative'}
      borderBottom={`1px solid ${theme.colors.gray[900]}`}
      h={'14px'}
      bg={isAccidental ? 'gray.800' : 'gray.700'}
      w={totalWidth}
      opacity={0.7}
      title={Tone.Frequency(note, 'midi').toNote()}
    >
      {midiNotesAtTrack.map((note, i) => <MidiNote note={note} key={i}/>)}
    </Box>
  );
};

export default MidiTrack;
