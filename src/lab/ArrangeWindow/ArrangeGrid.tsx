import React from 'react';
import { Box, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import GridTracks from './GridTracks';
import { ARRANGE_GRID_OFFSET } from '../../const/ui';
import Ruler from '../Ruler/Ruler';

const BaseContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'scroll',
  backgroundColor: splinterTheme.palette.background.default,
  marginLeft: 5,
  paddingLeft: ARRANGE_GRID_OFFSET * (-2),
});

function ArrangeGrid() {
  return (
    <BaseContainer>
      <Ruler/>
      <GridTracks/>
    </BaseContainer>
  );
}

export default React.memo(ArrangeGrid);
