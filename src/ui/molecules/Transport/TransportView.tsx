import React from 'react';
import { Container, styled } from '@material-ui/core';
import PlayRecord from './PlayRecord';
import Bpm from './Bpm';
import TimeSignature from './TimeSignature';
import Click from './Click';

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

function TransportView() {
  return (
    <BaseContainer>
      <PlayRecord/>
      <Click/>
      <Bpm/>
      <TimeSignature/>
    </BaseContainer>
  );
}

export default TransportView;
