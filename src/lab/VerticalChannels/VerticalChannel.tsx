import React, { useContext } from 'react';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../recoil/channelStore';
import { Box, styled, Typography } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import { ChannelContext } from '../../providers/ChannelContext';
import ChannelLetterButtons from '../../ui/molecules/ChannelStrip/ChannelLetterButtons';

interface BaseContainerProps {
  channelColor: string;
}

const BaseContainer = styled(Box)({
  width: '100%',
  borderBottom: `1px solid ${splinterTheme.palette.background.default}`,
  borderRight: ({channelColor}: BaseContainerProps) => `3px solid ${channelColor}`,
  height: 70,
  padding: 5,
});

const SmrContainer = styled(Box)({
  padding: 0,
});

function VerticalChannel() {
  const channelId = useContext(ChannelContext);
  const name = useRecoilValue(channelStore.name(channelId));
  const color = useRecoilValue(channelStore.color(channelId));

  return (
    <BaseContainer channelColor={color}>
      <Typography gutterBottom align={'center'}>{name}</Typography>

      <SmrContainer>
        <ChannelLetterButtons/>
      </SmrContainer>
    </BaseContainer>
  );
}

export default VerticalChannel;
