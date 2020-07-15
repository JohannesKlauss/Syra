import React from 'react';
import { Box, styled, useTheme } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindow';
import { channelStore } from '../../recoil/channelStore';
import { ChannelContext } from '../../providers/ChannelContext';
import Track from '../Track/Track';

interface ArrangeWindowProps {
  windowWidth: number;
}

const BaseContainer = styled(Box)({
  overflow: 'hidden',
  backgroundColor: splinterTheme.palette.background.default,
  position: 'relative',
  height: 370,
  width: ({windowWidth}: ArrangeWindowProps) => windowWidth,
});

function GridTracks() {
  const theme = useTheme();
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const channelIds = useRecoilValue(channelStore.ids);

  return (
    <BaseContainer windowWidth={windowWidth}>
      {channelIds.map((id, i) => (
        <ChannelContext.Provider value={id}>
          <Track backgroundColor={i % 2 === 0 ? theme.palette.background.paper : theme.palette.background.default}/>
        </ChannelContext.Provider>
      ))}
    </BaseContainer>
  );
}

export default GridTracks;
