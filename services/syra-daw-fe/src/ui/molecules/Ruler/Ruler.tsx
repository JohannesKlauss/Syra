import React from 'react';
import RulerTransportCursor from './RulerTransportCursor';
import { useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import RulerBars from './RulerBars';
import BackgroundGrid from '../ArrangeWindow/BackgroundGrid';
import RulerCycle from './Cycle/RulerCycle';
import { Box } from '@chakra-ui/react';

function Ruler() {
  const windowWidth = useRecoilValue(arrangeWindowStore.width);

  console.log('windowWidth', windowWidth);

  return (
    <Box w={`${windowWidth}px`} bg={'gray.800'} h={'40px'} pos={'sticky'} top={0} zIndex={1} borderBottom={`1px solid rgba(255, 255, 255, 0.3)`} userSelect={'none'}>
      <BackgroundGrid/>
      <RulerBars/>
      <RulerCycle/>
      <RulerTransportCursor/>
    </Box>
  );
}

export default React.memo(Ruler);
