import React from 'react';
import { Box, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import UI_GRID_RULER from '../Ruler/UI_GRID_RULER';
import UI_GRID_TRACKS from './UI_GRID_TRACKS';
import { ARRANGE_GRID_OFFSET } from '../../const/ui';

const BaseContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'scroll',
  backgroundColor: splinterTheme.palette.background.default,
  marginLeft: 5,
  paddingLeft: ARRANGE_GRID_OFFSET * (-2),
});

function UI_ARRANGE_GRID() {
  return (
    <BaseContainer>
      <UI_GRID_RULER/>
      <UI_GRID_TRACKS/>
    </BaseContainer>
  );
}

export default React.memo(UI_ARRANGE_GRID);
