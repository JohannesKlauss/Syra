import React from 'react';
import { Box, Container, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import RulerSettings from '../Ruler/Settings/RulerSettings';
import ArrangeGrid from './ArrangeGrid';
import VerticalChannelList from '../VerticalChannels/VerticalChannelList';
import TransportView from '../Transport/TransportView';

const BaseContainer = styled(Container)({
  overflow: 'hidden',
  width: '100%',
  maxHeight: '80vh',
  padding: '5px 0',
  backgroundColor: splinterTheme.palette.background.paper,
});

const Flexer = styled('div')({
  display: 'flex',
  overflow: 'auto',
  maxHeight: 200,
});

const RightPane = styled(Box)({
  width: '100%',
  overflowX: 'auto',
  height: '100%',
});

function ArrangeWindow() {
  return (
    <BaseContainer maxWidth={'xl'}>
      <TransportView/>
      <RulerSettings/>
      <Flexer>
        <VerticalChannelList/>
        <RightPane>
          <ArrangeGrid/>
        </RightPane>
      </Flexer>
    </BaseContainer>
  );
}

export default React.memo(ArrangeWindow);
