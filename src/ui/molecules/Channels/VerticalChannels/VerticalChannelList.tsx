import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../../../recoil/channelStore';
import { Box, styled } from '@material-ui/core';
import VerticalChannel from './VerticalChannel';
import { ChannelContext } from '../../../../providers/ChannelContext';
import VerticalChannelListHeader from './VerticalChannelListHeader';
import useDeleteChannelHotkey from '../../../../hooks/hotkeys/channel/useDeleteChannelHotkey';
import useCreateChannel from '../../../../hooks/recoil/channel/useCreateChannel';
import { ChannelType } from '../../../../types/Channel';

const BaseContainer = styled(Box)({
  width: 250,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

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
    <BaseContainer data-cy={'vertical-channel-list'}>
      <VerticalChannelListHeader/>
      {channels.map(id => (
        <ChannelContext.Provider key={id} value={id}>
          <VerticalChannel/>
        </ChannelContext.Provider>
      ))}
    </BaseContainer>
  );
}

export default VerticalChannelList;
