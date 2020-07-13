import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowWidth, rulerItems } from '../../recoil/atoms/arrangeWindow';
import { Box, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';

const Bars = styled(Box)({
  height: 20,
  position: 'absolute',
  top: 0,
  width: '100%',
  pointerEvents: 'none',
  backgroundColor: splinterTheme.palette.background.paper,
});

const RulerItem = styled('span')({
  display: 'inline-block',
  position: 'absolute',
  borderLeft: `1px solid rgba(255, 255, 255, 0.3)`,
  paddingLeft: 4,
});

function UI_GRID_BARS() {
  const items = useRecoilValue(rulerItems);
  const windowWidth = useRecoilValue(arrangeWindowWidth);

  // TODO: These two should probably live in the recoil state.
  const itemLength = useMemo(() => windowWidth / items.length, [items, windowWidth]);

  return (
    <Bars>
      {items.map((item, i) => <RulerItem key={item} style={{left: `${i * itemLength}px`}}>{item}</RulerItem>)}
    </Bars>
  );
}

export default React.memo(UI_GRID_BARS);
