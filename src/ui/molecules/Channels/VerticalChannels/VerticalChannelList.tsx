import React from 'react';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../../../recoil/channelStore';
import { Box, styled } from '@material-ui/core';
import VerticalChannel from './VerticalChannel';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { splinterTheme } from '../../../../theme';

const BaseContainer = styled(Box)({
  width: 250,
  marginTop: 40,
  borderTop: `1px solid ${splinterTheme.palette.background.default}`,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});
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
