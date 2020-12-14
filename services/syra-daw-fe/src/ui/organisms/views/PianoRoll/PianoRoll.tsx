import { Box } from '@chakra-ui/react';
import React from 'react';
import SplitScroller from '../../../atoms/Layout/SplitScroller';
import Grid from '../../../molecules/Grid/Grid';
import VerticalPiano from '../../../molecules/PianoRoll/VerticalPiano';
import { View } from "../../../../types/View";

interface Props {}

const PianoRoll: React.FC<Props> = ({}) => {
  return (
    <Box w={'100%'} h={'100%'}>
      <SplitScroller>
        <VerticalPiano />
        <Grid windowView={View.PIANO_ROLL}>
          Grid Content
        </Grid>
      </SplitScroller>
    </Box>
  );
};

export default PianoRoll;
