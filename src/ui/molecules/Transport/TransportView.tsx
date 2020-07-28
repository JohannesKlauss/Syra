import React from 'react';
import { Container, styled } from '@material-ui/core';
import { splinterTheme } from '../../../theme';
import PlayRecord from './PlayRecord';
import Bpm from './Bpm';
import TimeSignature from './TimeSignature';
import Click from './Click';

const BaseContainer = styled(Container)({
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '5px 0',
  marginBottom: 10,
  borderBottom: `1px solid ${splinterTheme.palette.background.default}`,
  backgroundColor: splinterTheme.palette.background.paper,
});

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
