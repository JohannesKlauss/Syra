import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { Box, styled } from '@material-ui/core';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { numberToMusicalBarTime } from '../../../utils/noteMapper';
import { TIME_CONVERSION_RESOLUTION } from '../../../const/musicalConversionConstants';

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
  const rulerItemWidth = useRecoilValue(arrangeWindowStore.rulerItemWidth);

  return (
    <Bars>
      {items.map((item, i) => <RulerItem key={item} style={{left: `${i * rulerItemWidth}px`}}>{numberToMusicalBarTime(item)}</RulerItem>)}
    </Bars>
  );
}

export default React.memo(RulerBars);
