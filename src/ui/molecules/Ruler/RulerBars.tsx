import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil/dist';
import { Box, styled } from '@material-ui/core';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { numberToMusicalBarTime } from '../../../utils/noteMapper';

const Bars = styled(Box)(({theme}) => ({
  height: 20,
  position: 'absolute',
  top: 0,
  width: '100%',
  pointerEvents: 'none',
  userSelect: 'none',
  backgroundColor: theme.palette.background.paper,
}));

const RulerItem = styled('span')({
  display: 'inline-block',
  position: 'absolute',
  borderLeft: `1px solid rgba(255, 255, 255, 0.3)`,
  paddingLeft: 4,
  pointerEvent: 'none',
  zIndex: 3,
});

function RulerBars() {
  const items = useRecoilValue(arrangeWindowStore.rulerItems);
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const itemLength = useMemo(() => Math.floor(windowWidth / items.length), [items, windowWidth]);

  return (
    <Bars>
      {items.map((item, i) => <RulerItem key={item} style={{left: `${i * itemLength}px`}}>{numberToMusicalBarTime(item)}</RulerItem>)}
    </Bars>
  );
}

export default React.memo(RulerBars);
