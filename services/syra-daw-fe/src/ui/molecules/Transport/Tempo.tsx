import React from 'react';
import useTempoMapScheduler from '../../../hooks/tone/useTempoMapScheduler';
import { styled, Typography } from '@material-ui/core';

const BaseContainer = styled('div')({
  marginLeft: 20,
  flexDirection: 'column',
});

function Tempo() {
  const currentTempo = useTempoMapScheduler();

  return (
    <BaseContainer>
      <Typography variant={'body2'}>{currentTempo}</Typography>
      <Typography variant={'body2'}>BPM</Typography>
    </BaseContainer>
  );
}

export default Tempo;
