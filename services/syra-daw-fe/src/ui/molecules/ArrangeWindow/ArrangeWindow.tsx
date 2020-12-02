import React from 'react';
import RulerSettings from '../Ruler/Settings/RulerSettings';
import ArrangeGrid from './ArrangeGrid';
import VerticalChannelList from '../Channels/VerticalChannels/VerticalChannelList';
import { Box, Flex } from '@chakra-ui/react';

function ArrangeWindow() {
  return (
    <Box w={'100%'} maxH={'calc(100vh - 64px'} py={4} overflow={'hidden'} bg={'gray.900'}>
      <RulerSettings/>
      <Flex overflow={'auto'} maxH={'calc(100vh - 163px)'}>
        <VerticalChannelList/>
        <Box w={'100%'} overflowX={'auto'} h={'100%'} bg={'gray.800'}>
          <ArrangeGrid/>
        </Box>
      </Flex>
    </Box>
  );
}

export default React.memo(ArrangeWindow);
