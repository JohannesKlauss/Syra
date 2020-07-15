import React from 'react';
import { Box, Container, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import RulerSettings from '../Ruler/RulerSettings';
import ArrangeGrid from './ArrangeGrid';
import VerticalChannelList from '../VerticalChannels/VerticalChannelList';

const BaseContainer = styled(Container)({
  overflow: 'hidden',
  width: '100%',
  height: '40vh',
  display: 'flex',
  padding: '5px 0',
  backgroundColor: splinterTheme.palette.background.paper,
});

const RightPane = styled(Box)({
  width: '100%',
  overflow: 'hidden',
});

function ArrangeWindow() {
  return (
    <BaseContainer maxWidth={'xl'}>
      <VerticalChannelList/>
      <RightPane>
        <RulerSettings/>
        <ArrangeGrid/>
      </RightPane>
    </BaseContainer>
  );
}

export default React.memo(ArrangeWindow);
