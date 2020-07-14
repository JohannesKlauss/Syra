import React from 'react';
import { Container, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import UI_ARRANGE_GRID from './UI_ARRANGE_GRID';
import UI_GRID_RULER_SETTINGS from '../Ruler/UI_GRID_RULER_SETTINGS';

const BaseContainer = styled(Container)({
  overflow: 'hidden',
  width: '100%',
  height: '40vh',
  backgroundColor: splinterTheme.palette.background.paper,
});

function UI_ARRANGE_WINDOW_EXPERIMENTAL() {
  return (
    <BaseContainer maxWidth={'xl'}>
      {/* THIS WOULD BE WHERE THE VERTICAL CHANNEL LIST LIVES*/}

      <UI_GRID_RULER_SETTINGS/>

      <UI_ARRANGE_GRID/>
    </BaseContainer>
  );
}

export default React.memo(UI_ARRANGE_WINDOW_EXPERIMENTAL);
