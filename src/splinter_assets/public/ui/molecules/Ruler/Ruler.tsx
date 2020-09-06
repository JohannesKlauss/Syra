import React from 'react';
import { Box, BoxProps, styled, Theme } from '@material-ui/core';
import RulerTransportCursor from './RulerTransportCursor';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import RulerBars from './RulerBars';
import BackgroundGrid from '../ArrangeWindow/BackgroundGrid';
import RulerCycle from './Cycle/RulerCycle';

interface BaseContainerProps {
  windowWidth: number;
}

const BaseContainer = styled(
  ({ windowWidth, ...other }: BaseContainerProps & Omit<BoxProps, keyof BaseContainerProps>) => <Box {...other} />,
)<Theme, BaseContainerProps>(({theme, windowWidth}) => ({
  backgroundColor: theme.palette.background.default,
  width: windowWidth,
  height: 40,
  position: 'sticky',
  top: 0,
  zIndex: 1,
  borderBottom: `1px solid rgba(255, 255, 255, 0.3)`,
  useSelect: 'none',
}));

function Ruler() {
  const windowWidth = useRecoilValue(arrangeWindowStore.width);

  return (
    <BaseContainer windowWidth={windowWidth}>
      <BackgroundGrid/>
      <RulerBars/>
      <RulerCycle/>
      <RulerTransportCursor/>
    </BaseContainer>
  );
}

export default React.memo(Ruler);
