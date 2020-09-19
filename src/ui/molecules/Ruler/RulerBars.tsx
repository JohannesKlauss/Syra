import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { Box, styled } from '@material-ui/core';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { projectStore } from '../../../recoil/projectStore';

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
  const items = useRecoilValue(arrangeWindowStore.filteredRulerItems);
  const zoomedQuarterPixelWidth = useRecoilValue(arrangeWindowStore.zoomedQuarterPixelWidth);
  const projectLengthInQuarters = useRecoilValue(projectStore.lengthInQuarters);

  const filteredItems = useMemo(() => items.filter(item => item.displayOnRulerBar), [items]);

  return (
    <Bars>
      {filteredItems.map(item => {
        return <RulerItem key={item.bar} style={{ left: `${zoomedQuarterPixelWidth * (item.quarterInProject - 1)}px` }}>{item.bar}</RulerItem>
      })}
      <ProjectEndHandle style={{ left: `${zoomedQuarterPixelWidth * projectLengthInQuarters}px`}}/>
    </Bars>
  );
}

export default React.memo(RulerBars);
