import React from 'react';
import { useRecoilValue } from 'recoil';
import useTimeSignatureMapScheduler from '../../../hooks/tone/useTimeSignatureMapScheduler';
import { Box, Text } from '@chakra-ui/react';
import { transportStore } from "../../../recoil/transportStore";

function TimeSignature() {
  const currentTimeSignature = useRecoilValue(transportStore.currentTimeSignature);

  useTimeSignatureMapScheduler();

  return (
    <Box>
      <Text fontSize={'sm'} userSelect={'none'}>{currentTimeSignature[0]} / {currentTimeSignature[1]}</Text>
    </Box>
  );
}

export default TimeSignature;
