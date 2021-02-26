import React from 'react';
import { useRecoilValue } from 'recoil';
import { channelStore } from '../../../../recoil/channelStore';
import VerticalChannel from './VerticalChannel';
import { ChannelContext } from '../../../../providers/ChannelContext';
import VerticalChannelListHeader from './VerticalChannelListHeader';
import useDeleteChannelHotkey from '../../../../hooks/hotkeys/channel/useDeleteChannelHotkey';
import { Flex } from '@chakra-ui/react';

function VerticalChannelList() {
  const channels = useRecoilValue(channelStore.ids);
  useDeleteChannelHotkey();

  return (
      <Flex w={'250px'} h={'100%'} flexDirection={'column'}>
        <VerticalChannelListHeader/>
        {channels.map((id, i) => (
          <ChannelContext.Provider key={id} value={id}>
            <VerticalChannel index={i + 1}/>
          </ChannelContext.Provider>
        ))}
      </Flex>
  );
}

export default VerticalChannelList;
