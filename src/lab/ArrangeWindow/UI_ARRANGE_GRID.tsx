import React from 'react';
import { Box, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import UI_GRID_RULER from './UI_GRID_RULER';

const BaseContainer = styled(Box)({
  overflow: 'hidden',
  marginLeft: 5,
  backgroundColor: splinterTheme.palette.background.paper,
});

function UI_ARRANGE_GRID() {
  return (
    <BaseContainer>
      <UI_GRID_RULER/>
    </BaseContainer>
  );
}

export default React.memo(UI_ARRANGE_GRID);
