import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { channelStore } from '../../../../recoil/channelStore';
import VerticalChannel from './VerticalChannel';
import { ChannelContext } from '../../../../providers/ChannelContext';
import VerticalChannelListHeader from './VerticalChannelListHeader';
import useDeleteChannelHotkey from '../../../../hooks/hotkeys/channel/useDeleteChannelHotkey';
import useCreateChannel from '../../../../hooks/recoil/channel/useCreateChannel';
import { ChannelType } from '../../../../types/Channel';
import { Flex } from '@chakra-ui/core';

function VerticalChannelList() {
  const channels = useRecoilValue(channelStore.ids);
  useDeleteChannelHotkey();

  const ids = useRecoilValue(channelStore.ids);
  const createChannel = useCreateChannel();

  useEffect(() => {
    if (ids.length === 0) {
      (async () => {
        await createChannel(ChannelType.AUDIO, 0, 'Audio 1');
      })();
    }
  }, [ids, createChannel]);

  return (
      <Flex w={'250px'} h={'100%'} flexDirection={'column'}>
        <VerticalChannelListHeader/>
        {channels.map(id => (
          <ChannelContext.Provider key={id} value={id}>
            <VerticalChannel/>
          </ChannelContext.Provider>
        ))}
      </Flex>
  );
}

export default VerticalChannelList;
