import React from 'react';
import { projectStore } from '../../../recoil/projectStore';
import { useRecoilValue } from 'recoil';
import useTimeSignatureMapScheduler from '../../../hooks/tone/useTimeSignatureMapScheduler';
import { Box, Text } from '@chakra-ui/react';

function TimeSignature() {
  const currentTimeSignature = useRecoilValue(projectStore.currentTimeSignature);

  useTimeSignatureMapScheduler();

  return (
    <Box>
      <Text fontSize={'sm'} userSelect={'none'}>{currentTimeSignature[0]} / {currentTimeSignature[1]}</Text>
    </Box>
  );
}

export default TimeSignature;
