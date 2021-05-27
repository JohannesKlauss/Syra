import React from 'react';
import { useRecoilValue } from 'recoil';
import { channelStore } from '../../../../recoil/channelStore';
import VerticalChannel from './VerticalChannel';
import { ChannelContext } from '../../../../providers/ChannelContext';
import VerticalChannelListHeader from './VerticalChannelListHeader';
import useDeleteChannelHotkey from '../../../../hooks/hotkeys/channel/useDeleteChannelHotkey';
import { Box, Flex } from '@chakra-ui/react';

function VerticalChannelList() {
  const channels = useRecoilValue(channelStore.idsWithoutMaster);
  useDeleteChannelHotkey();

  return (
      <Box w={'250px'} h={'100%'} bgColor={'gray.900'}>
        <VerticalChannelListHeader/>
        <Flex paddingTop={'40px'} flexDirection={'column'}>
          {channels.map((id, i) => (
            <ChannelContext.Provider key={id} value={id}>
              <VerticalChannel index={i + 1}/>
            </ChannelContext.Provider>
          ))}
        </Flex>
      </Box>
  );
}

export default VerticalChannelList;
