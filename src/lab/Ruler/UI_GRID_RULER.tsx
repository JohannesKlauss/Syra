import React from 'react';
import { Box, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import UI_GRID_TRANSPORT_CURSOR from '../ArrangeWindow/UI_GRID_TRANSPORT_CURSOR';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowWidth } from '../../recoil/atoms/arrangeWindow';
import UI_GRID_RULER_SETTINGS from './UI_GRID_RULER_SETTINGS';
import UI_GRID_RULER_BARS from './UI_GRID_RULER_BARS';

interface BaseContainerProps {
  windowWidth: number;
}

const BaseContainer = styled(Box)({
  backgroundColor: splinterTheme.palette.background.default,
  width: ({windowWidth}: BaseContainerProps) => windowWidth,
  height: 40,
  position: 'relative',
  zIndex: 12,
  borderBottom: `1px solid rgba(255, 255, 255, 0.3)`,
});

function UI_GRID_RULER() {
  const windowWidth = useRecoilValue(arrangeWindowWidth);

  return (
    <BaseContainer windowWidth={windowWidth}>
      <UI_GRID_RULER_BARS/>
      <UI_GRID_TRANSPORT_CURSOR/>
    </BaseContainer>
  );
}

export default React.memo(UI_GRID_RULER);
