import React, { useContext } from 'react';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../recoil/channelStore';
import { Box, styled, Typography } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import { ChannelContext } from '../../providers/ChannelContext';
import ChannelLetterButtons from '../../ui/molecules/ChannelStrip/ChannelLetterButtons';

const BaseContainer = styled(Box)({
  width: '100%',
  borderBottom: `1px solid ${splinterTheme.palette.background.default}`,
  height: 70,
  padding: 5,
});

const SmrContainer = styled(Box)({
  padding: 0,
});

function VerticalChannel() {
  const channelId = useContext(ChannelContext);
  const name = useRecoilValue(channelStore.name(channelId));

  return (
    <BaseContainer>
      <Typography gutterBottom align={'center'}>{name}</Typography>

      <SmrContainer>
        <ChannelLetterButtons/>
      </SmrContainer>
    </BaseContainer>
  );
}

export default VerticalChannel;
