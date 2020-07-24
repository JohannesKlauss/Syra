import React from 'react';
import { Box, BoxProps, styled, useTheme } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import { channelStore } from '../../recoil/channelStore';
import { ChannelContext } from '../../providers/ChannelContext';
import Track from '../Track/Track';
import DropTrack from '../Track/DropTrack';
import BackgroundGrid from './BackgroundGrid';

interface ArrangeWindowProps {
  windowWidth: number;
}

const BaseContainer = styled(
  ({ windowWidth, ...other }: ArrangeWindowProps & Omit<BoxProps, keyof ArrangeWindowProps>) => <Box {...other} />,
)({
  backgroundColor: (splinterTheme.palette.background.default),
  position: 'relative',
  width: ({ windowWidth }: ArrangeWindowProps) => windowWidth,
});

function GridTracks() {
  const theme = useTheme();
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const channelIds = useRecoilValue(channelStore.ids);

  return (
    <BaseContainer windowWidth={windowWidth}>
      <BackgroundGrid ticksFullHeight={true}/>
      {channelIds.map((id, i) => (
        <ChannelContext.Provider key={id} value={id}>
          <Track backgroundColor={i % 2 === 0 ? theme.palette.background.paper : theme.palette.background.default}/>
        </ChannelContext.Provider>
      ))}
      <DropTrack/>
    </BaseContainer>
  );
}

export default GridTracks;
