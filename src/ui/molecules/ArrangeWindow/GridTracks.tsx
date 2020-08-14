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

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);

  const onContextMenu = useCallback(e => {
    e.preventDefault();

    if (e.clientX) {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    }

    setShowMenu(true);
  }, [setShowMenu, setMousePos]);

  useHotkeys('t', onContextMenu);

  return (
    <BaseContainer windowWidth={windowWidth} onContextMenu={onContextMenu}>
      <BackgroundGrid ticksFullHeight={true}/>
      <SelectionTool>
        {channelIds.map((id, i) => (
          <ChannelContext.Provider key={id} value={id}>
            <Track backgroundColor={i % 2 === 0 ? theme.palette.background.paper : theme.palette.background.default}/>
          </ChannelContext.Provider>
        ))}
      </SelectionTool>
      <GridContextMenu show={showMenu} x={mousePos.x} y={mousePos.y} onClose={() => setShowMenu(false)}/>
    </BaseContainer>
  );
}

export default GridTracks;
