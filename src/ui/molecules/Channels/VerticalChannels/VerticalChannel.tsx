import React, { useContext } from 'react';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../../../recoil/channelStore';
import { Box, Card, CardContent, styled, Typography } from '@material-ui/core';
import { splinterTheme } from '../../../../theme';
import { ChannelContext } from '../../../../providers/ChannelContext';
import ChannelLetterButtons from '../ChannelLetterButtons';

interface BaseContainerProps {
  channelColor: string;
}

const BaseCard = styled(Card)({
  width: '100%',
  borderBottom: `1px solid ${splinterTheme.palette.background.default}`,
  borderRight: ({channelColor}: BaseContainerProps) => `3px solid ${channelColor}`,
  height: 70,
  padding: 5,
  display: 'flex',
  flexDirection: 'column',
});

const CustomCardContent = styled(CardContent)({
  paddingTop: 0,
  paddingBottom: 0,
})

const SmrContainer = styled(Box)({
  padding: 0,
});

function VerticalChannel() {
  const channelId = useContext(ChannelContext);
  const name = useRecoilValue(channelStore.name(channelId));
  const color = useRecoilValue(channelStore.color(channelId));

  return (
    <BaseCard channelColor={color}>
        <CustomCardContent>
          <Typography variant="overline" display="block">{name}</Typography>
        </CustomCardContent>
        <SmrContainer>
          <ChannelLetterButtons/>
        </SmrContainer>
    </BaseCard>
  );
}

export default VerticalChannel;
