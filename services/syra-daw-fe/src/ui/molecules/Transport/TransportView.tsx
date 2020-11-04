import React from 'react';
import { Container, styled } from '@material-ui/core';
import PlayRecord from './PlayRecord';
import TimeSignature from './TimeSignature';
import Click from './Click';
import ViewToggles from '../ViewToggles/ViewToggles';
import TimeInformation from './TimeInformation';
import Tempo from './Tempo';
import BarsAndBeats from './BarsAndBeats';

const BaseContainer = styled(Container)(({ theme }) => ({
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
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

const InfoBox = styled('div')(({ theme }) => ({
  flex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
}));

function TransportView() {
  return (
    <BaseContainer>
      <ViewToggles/>
      <PlayRecord/>
      <InfoBox>
        <TimeInformation/>
        <BarsAndBeats/>
        <Tempo/>
        <TimeSignature/>
      </InfoBox>
      <RightPane>
        <Click/>
      </RightPane>
      <RightPane>
      </RightPane>
    </BaseContainer>
  );
}

export default TransportView;
