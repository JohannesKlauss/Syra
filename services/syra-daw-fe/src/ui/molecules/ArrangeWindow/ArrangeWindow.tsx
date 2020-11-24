import React from 'react';
import RulerSettings from '../Ruler/Settings/RulerSettings';
import ArrangeGrid from './ArrangeGrid';
import VerticalChannelList from '../Channels/VerticalChannels/VerticalChannelList';
import TransportView from '../Transport/TransportView';
import useListenForExternalMidiIn from '../../../hooks/midi/useListenForExternalMidiIn';
import useUpdateMidiStore from '../../../hooks/midi/useUpdateMidiStore';
import { ARRANGE_GRID_CHANNEL_LIST_GAP } from '../../../const/ui';
import { Box, Flex } from '@chakra-ui/react';

function ArrangeWindow() {
  useListenForExternalMidiIn(useUpdateMidiStore());

  return (
    <Box w={'100%'} maxH={'calc(100vh - 64px'} py={4} overflow={'hidden'} bg={'gray.900'}>
      <TransportView/>
      <RulerSettings/>
      <Flex overflow={'auto'} maxH={'calc(100vh - 163px)'}>
        <VerticalChannelList/>
        <Box w={'100%'} overflowX={'auto'} h={'100%'} pl={ARRANGE_GRID_CHANNEL_LIST_GAP} bg={'gray.800'}>
          <ArrangeGrid/>
        </Box>
      </Flex>
    </Box>
  );
}

export default React.memo(ArrangeWindow);
