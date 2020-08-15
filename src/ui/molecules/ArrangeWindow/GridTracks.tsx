import React, { useCallback, useState } from 'react';
import { Box, BoxProps, styled, Theme, useTheme } from '@material-ui/core';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { channelStore } from '../../../recoil/channelStore';
import { ChannelContext } from '../../../providers/ChannelContext';
import Track from '../Track/Track';
import BackgroundGrid from './BackgroundGrid';
import GridContextMenu from './GridContextMenu';
import { useHotkeys } from 'react-hotkeys-hook';
import SelectionTool from '../../atoms/SelectionTool';
import useSelectRegions from '../../../hooks/ui/arrangeGrid/useSelectRegions';
import useMuteSelectedRegions from '../../../hooks/recoil/region/useMuteSelectedRegions';

interface ArrangeWindowProps {
  windowWidth: number;
}

const BaseContainer = styled(
  ({ windowWidth, ...other }: ArrangeWindowProps & Omit<BoxProps, keyof ArrangeWindowProps>) => <Box {...other} />,
)<Theme, ArrangeWindowProps>(({ theme, windowWidth }) => ({
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  width: windowWidth,
  zIndex: 0,
}));

function GridTracks() {
  const theme = useTheme();
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const channelIds = useRecoilValue(channelStore.ids);
  const onSelect = useSelectRegions();

  useHotkeys('ctrl+m', useMuteSelectedRegions());

  return (
    <BaseContainer windowWidth={windowWidth}>
      <BackgroundGrid ticksFullHeight={true}/>
      <SelectionTool onSelect={onSelect}>
        {channelIds.map((id, i) => (
          <ChannelContext.Provider key={id} value={id}>
            <Track backgroundColor={i % 2 === 0 ? theme.palette.background.paper : theme.palette.background.default}/>
          </ChannelContext.Provider>
        ))}
      </SelectionTool>
    </BaseContainer>
  );
}

export default GridTracks;
