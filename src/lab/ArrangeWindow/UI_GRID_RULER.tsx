import React from 'react';
import { Box, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import UI_GRID_BARS from './UI_GRID_BARS';
import UI_GRID_TRANSPORT_CURSOR from './UI_GRID_TRANSPORT_CURSOR';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowWidth } from '../../recoil/atoms/arrangeWindow';

interface ArrangeWindowProps {
  windowWidth: number;
}

const BaseContainer = styled(Box)({
  backgroundColor: splinterTheme.palette.background.default,
  width: ({windowWidth}: ArrangeWindowProps) => windowWidth,
  height: 60,
  position: 'relative',
  zIndex: 12,
  borderBottom: `1px solid rgba(255, 255, 255, 0.3)`,
});

function UI_GRID_RULER() {
  const windowWidth = useRecoilValue(arrangeWindowWidth);

  return (
    <BaseContainer windowWidth={windowWidth}>
      <UI_GRID_BARS/>
      <UI_GRID_TRANSPORT_CURSOR/>
    </BaseContainer>
  );
}

export default React.memo(UI_GRID_RULER);
