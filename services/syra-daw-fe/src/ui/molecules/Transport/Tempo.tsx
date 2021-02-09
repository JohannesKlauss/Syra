import React from 'react';
import useTempoMapScheduler from '../../../hooks/tone/useTempoMapScheduler';
import { Box, Text } from '@chakra-ui/react';

function Tempo() {
  const currentTempo = useTempoMapScheduler();

  return (
    <Box>
      <Text fontSize={'sm'}>{currentTempo}</Text>
      <Text fontSize={'sm'}>BPM</Text>
    </Box>
  );
}

export default Tempo;
