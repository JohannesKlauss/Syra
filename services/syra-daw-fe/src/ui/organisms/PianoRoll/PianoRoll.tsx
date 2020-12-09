import { Box } from '@chakra-ui/react';
import React from "react";
import SplitScroller from '../../atoms/Layout/SplitScroller';
import VerticalPiano from "../../molecules/PianoRoll/VerticalPiano";

interface Props {

}

const PianoRoll: React.FC<Props> = ({}) => {
  return (
    <Box w={'100%'} h={'100%'}>
      <SplitScroller>
        <VerticalPiano/>
      </SplitScroller>
    </Box>
  );
};

export default PianoRoll;
