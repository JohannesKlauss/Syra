import React from 'react';
import { Box, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import GridTransportCursor from '../ArrangeWindow/GridTransportCursor';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import RulerBars from './RulerBars';
import BackgroundGrid from '../ArrangeWindow/BackgroundGrid';

interface BaseContainerProps {
  windowWidth: number;
}

const BaseContainer = styled(Box)({
  backgroundColor: splinterTheme.palette.background.default,
  width: ({windowWidth}: BaseContainerProps) => windowWidth,
  height: 40,
  position: 'sticky',
  top: 0,
  zIndex: 1,
  borderBottom: `1px solid rgba(255, 255, 255, 0.3)`,
});

function Ruler() {
  const windowWidth = useRecoilValue(arrangeWindowStore.width);

  return (
    <BaseContainer windowWidth={windowWidth}>
      <BackgroundGrid/>
      <RulerBars/>
      <GridTransportCursor/>
    </BaseContainer>
  );
}

export default React.memo(Ruler);
