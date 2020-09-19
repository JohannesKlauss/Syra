import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { Box, styled } from '@material-ui/core';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { projectStore } from '../../../recoil/projectStore';
import { transportStore } from '../../../recoil/transportStore';

const Bars = styled(Box)(({ theme }) => ({
  height: 20,
  position: 'absolute',
  top: 0,
  width: '100%',
  pointerEvents: 'none',
  userSelect: 'none',
  backgroundColor: theme.palette.background.paper,
}));

const RulerItem = styled('span')(({ theme }) => ({
  position: 'absolute',
  borderLeft: `1px solid rgba(255, 255, 255, 0.3)`,
  paddingLeft: 4,
  pointerEvent: 'none',
  zIndex: 3,
}));

const ProjectEndHandle = styled('span')(({ theme }) => ({
  position: 'absolute',
  borderLeft: `3px solid rgba(255, 255, 255, 0.3)`,
  paddingLeft: 4,
  pointerEvent: 'none',
  zIndex: 3,
  height: 20,
  width: 'inherit',
  backgroundColor: theme.palette.background.default,
}));

function RulerBars() {
  const bars = useRecoilValue(transportStore.filteredBars);
  const zoomedQuarterPixelWidth = useRecoilValue(arrangeWindowStore.zoomedQuarterPixelWidth);
  const projectLengthInQuarters = useRecoilValue(projectStore.lengthInQuarters);

  const filteredBars = useMemo(() => bars.filter(item => item.displayOnRulerBar), [bars]);

  return (
    <Bars>
      {filteredBars.map(bar => {
        return <RulerItem key={bar.bar} style={{ left: `${zoomedQuarterPixelWidth * (bar.quarterInProject - 1)}px` }}>{bar.bar}</RulerItem>
      })}
      <ProjectEndHandle style={{ left: `${zoomedQuarterPixelWidth * projectLengthInQuarters}px`}}/>
    </Bars>
  );
}

export default React.memo(RulerBars);
