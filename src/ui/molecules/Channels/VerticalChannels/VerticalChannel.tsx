import React, { useContext, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../../../recoil/channelStore';
import { Box, Card, CardContent, styled, Typography, useTheme } from '@material-ui/core';
import { splinterTheme } from '../../../../theme';
import { ChannelContext } from '../../../../providers/ChannelContext';
import ChannelLetterButtons from '../ChannelLetterButtons';
import useDeleteChannel from '../../../../hooks/recoil/channel/useDeleteChannel';
import { useHotkeys } from '../../../../hooks/ui/useHotkeys';

interface BaseContainerProps {
  channelColor: string;
  backgroundColor: string;
}

const BaseCard = styled(Card)({
  width: '100%',
  borderBottom: `1px solid ${splinterTheme.palette.background.default}`,
  backgroundColor: ({ backgroundColor }: BaseContainerProps) => backgroundColor,
  borderRight: ({ channelColor }: BaseContainerProps) => `3px solid ${channelColor}`,
  height: 70,
  padding: 5,
  display: 'flex',
  flexDirection: 'column',
  '&:focus': {
    outline: 'none',
  }
});

const CustomCardContent = styled(CardContent)({
  paddingTop: 0,
  paddingBottom: 0,
  background: 'transparent',
});

const SmrContainer = styled(Box)({
  padding: 0,
  background: 'transparent',
});

function VerticalChannel() {
  const theme = useTheme();
  const channelId = useContext(ChannelContext);
  const [selectedChannelId, setSelectedChannelId] = useRecoilState(channelStore.selectedId);
  const name = useRecoilValue(channelStore.name(channelId));
  const color = useRecoilValue(channelStore.color(channelId));
  const hotkeysRef = useHotkeys('backspace', useDeleteChannel(channelId));

  const backgroundColor = useMemo(() => {
    return channelId === selectedChannelId ? '#606060' : theme.palette.background.paper;
  }, [channelId, selectedChannelId]);

  return (
    <BaseCard channelColor={color} backgroundColor={backgroundColor} onClick={() => setSelectedChannelId(channelId)}
              innerRef={hotkeysRef} tabIndex={0}>
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
