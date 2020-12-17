import { Box, useTheme } from '@chakra-ui/react';
import React from 'react';
import SplitScroller from '../../../atoms/Layout/SplitScroller';
import Grid from '../../../molecules/Grid/Grid';
import VerticalPiano from '../../../molecules/Piano/VerticalPiano';
import { View } from "../../../../types/View";
import MidiTrackList from "../../../molecules/Midi/MidiTrackList";
import PianoRollSettings from "../../../molecules/PianoRoll/PianoRollSettings";

interface Props {
  minNote: number;
  maxNote: number;
}

const PianoRoll: React.FC<Props> = ({minNote, maxNote}) => {
  const theme = useTheme();

  return (
    <Box w={'100%'} h={'100%'} borderTop={`1px solid ${theme.colors.teal[300]}`}>
      <PianoRollSettings/>
      <SplitScroller>
        <VerticalPiano min={minNote} max={maxNote} />
        <Grid windowView={View.PIANO_ROLL} >
          <MidiTrackList min={minNote} max={maxNote}/>
        </Grid>
      </SplitScroller>
    </Box>
  );
};

export default PianoRoll;
