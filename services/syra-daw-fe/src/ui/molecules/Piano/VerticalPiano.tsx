import { Box } from '@chakra-ui/react';
import React from 'react';
import Piano from './Piano';

interface Props {
  min: number;
  max: number;
}

const VerticalPiano: React.FC<Props> = ({min, max}) => {
  return (
    <Box pt={'40px'} h={'1496px'} bgColor={'gray.800'}>
      <Piano min={min} max={max} baseHeight={50} renderVertical />
    </Box>
  );
};

export default VerticalPiano;
