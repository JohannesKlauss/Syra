import { Box } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import Piano from './Piano';
import PianoSuspenseFallback from "./PianoSuspenseFallback";

interface Props {
  min: number;
  max: number;
}

const VerticalPiano: React.FC<Props> = ({min, max}) => {
  return (
    <Box pt={'40px'} h={'1496px'} bgColor={'gray.800'}>
      <Suspense fallback={<PianoSuspenseFallback min={min} max={max} baseHeight={50} renderVertical/>}>
        <Piano min={min} max={max} baseHeight={50} renderVertical />
      </Suspense>
    </Box>
  );
};

export default VerticalPiano;
