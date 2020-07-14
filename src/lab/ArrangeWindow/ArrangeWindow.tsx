import React from 'react';
import { Container, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import RulerSettings from '../Ruler/RulerSettings';
import ArrangeGrid from './ArrangeGrid';

const BaseContainer = styled(Container)({
  overflow: 'hidden',
  width: '100%',
  height: '40vh',
  backgroundColor: splinterTheme.palette.background.paper,
});

function ArrangeWindow() {
  return (
    <BaseContainer maxWidth={'xl'}>
      {/* THIS WOULD BE WHERE THE VERTICAL CHANNEL LIST LIVES*/}

      <RulerSettings/>

      <ArrangeGrid/>
    </BaseContainer>
  );
}

export default React.memo(ArrangeWindow);
