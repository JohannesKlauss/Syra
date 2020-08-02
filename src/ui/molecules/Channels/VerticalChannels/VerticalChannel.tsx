import React, { useContext, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../../../recoil/channelStore';
import {
  Box,
  Card,
  CardContent,
  CardProps,
  styled,
  Typography,
  useTheme,
} from '@material-ui/core';
import { splinterTheme } from '../../../../theme';
import { ChannelContext } from '../../../../providers/ChannelContext';
import ChannelLetterButtons from '../ChannelLetterButtons';
import useDeleteChannelHotkey from '../../../../hooks/hotkeys/channel/useDeleteChannelHotkey';
import useMuteChannelHotkey from '../../../../hooks/hotkeys/channel/useMuteChannelHotkey';
import useSoloChannelHotkey from '../../../../hooks/hotkeys/channel/useSoloChannelHotkey';
import { arrangeWindowStore } from '../../../../recoil/arrangeWindowStore';
import { ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT } from '../../../../const/ui';

interface BaseContainerProps {
  channelColor: string;
  backgroundColor: string;
  height: number;
}

const BaseCard = styled(
  ({ channelColor, height, backgroundColor, innerRef, ...other }: BaseContainerProps & Omit<CardProps, keyof BaseContainerProps>) => <Card {...other} />,
)({
  width: '100%',
  borderBottom: `1px solid ${splinterTheme.palette.background.default}`,
  backgroundColor: ({ backgroundColor }: BaseContainerProps) => backgroundColor,
  borderRight: ({ channelColor }: BaseContainerProps) => `3px solid ${channelColor}`,
  height: ({ height }: BaseContainerProps) => height,
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
  const verticalZoomLevel = useRecoilValue(arrangeWindowStore.verticalZoomLevel);

  const hotkeysRef = useDeleteChannelHotkey();
  useMuteChannelHotkey();
  useSoloChannelHotkey();

  const backgroundColor = useMemo(() => {
    return channelId === selectedChannelId ? '#606060' : theme.palette.background.paper;
  }, [channelId, selectedChannelId, theme]);

  return (
    <BaseCard channelColor={color} backgroundColor={backgroundColor} onClick={() => setSelectedChannelId(channelId)}
              innerRef={hotkeysRef} tabIndex={0} data-cy={channelId} height={ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT[verticalZoomLevel]}>
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
