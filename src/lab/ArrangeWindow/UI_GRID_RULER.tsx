import React, { useMemo } from 'react';
import { Box, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowWidth, rulerItems } from '../../recoil/atoms/arrangeWindow';

const BaseContainer = styled(Box)({
  backgroundColor: splinterTheme.palette.background.default,
  width: '100%',
  height: 20,
  position: 'relative',
});

const RulerItem = styled('span')({
  display: 'inline-block',
  position: 'absolute',
});

function UI_GRID_RULER() {
  const items = useRecoilValue(rulerItems);
  const windowWidth = useRecoilValue(arrangeWindowWidth);

  // TODO: These two should probably live in the recoil state.
  const itemLength = useMemo(() => windowWidth / items.length, [items, windowWidth]);

  console.log('item lenght', itemLength);

  return (
    <BaseContainer>
      {items.map((item, i) => <RulerItem style={{left: `${i * itemLength}px`}}>{item}</RulerItem>)}
    </BaseContainer>
  );
}

export default UI_GRID_RULER;
