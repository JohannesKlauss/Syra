import React from 'react';
import { Container, styled } from '@material-ui/core';
import PlayRecord from './PlayRecord';
import Bpm from './Bpm';
import TimeSignature from './TimeSignature';
import Click from './Click';
import ViewToggles from '../ViewToggles/ViewToggles';
import TimeInformation from './TimeInformation';

const BaseContainer = styled(Container)(({theme}) => ({
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '5px 0',
  marginBottom: 10,
  borderBottom: `1px solid ${theme.palette.background.default}`,
  backgroundColor: theme.palette.background.paper,
}));

const RightPane = styled('div')({
  flex: 1,
  display: 'flex',
});

function TransportView() {
  return (
    <BaseContainer>
      <ViewToggles/>
      <PlayRecord/>
      <TimeInformation/>
      <RightPane>
        <Click/>
        <Bpm/>
        <TimeSignature/>
      </RightPane>
    </BaseContainer>
  );
}

export default TransportView;
