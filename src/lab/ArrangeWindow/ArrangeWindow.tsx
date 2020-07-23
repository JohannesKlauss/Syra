import React from 'react';
import { Box, Container, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import RulerSettings from '../Ruler/Settings/RulerSettings';
import ArrangeGrid from './ArrangeGrid';
import VerticalChannelList from '../../ui/molecules/Channels/VerticalChannels/VerticalChannelList';
import TransportView from '../Transport/TransportView';

const BaseContainer = styled(Container)({
  width: '100%',
  maxHeight: '45vh',
  padding: '5px 0',
  overflow: 'hidden',
  backgroundColor: splinterTheme.palette.background.paper,
});

const Flexer = styled('div')({
  display: 'flex',
  maxHeight: 350,
  overflow: 'auto',
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
