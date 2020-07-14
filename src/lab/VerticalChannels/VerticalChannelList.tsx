import React from 'react';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../recoil/channelStore';
import { Box, styled, Typography } from '@material-ui/core';
import VerticalChannel from './VerticalChannel';
import { ChannelContext } from '../../providers/ChannelContext';

const BaseContainer = styled(Box)({
  width: 150,
  marginTop: 80,
  borderTop: '1px solid white',
})

function VerticalChannelList() {
  const channels = useRecoilValue(channelStore.ids);

  return (
    <BaseContainer>
      {channels.map(id => (
        <ChannelContext.Provider key={id} value={id}>
          <VerticalChannel/>
        </ChannelContext.Provider>
      ))}
    </BaseContainer>
  );
}

export default VerticalChannelList;
