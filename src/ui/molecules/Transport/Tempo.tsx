import React from 'react';
import { useRecoilValue } from 'recoil';
import { projectStore } from '../../../recoil/projectStore';
import useTempoMapScheduler from '../../../hooks/tone/useTempoMapScheduler';
import { styled, Typography } from '@material-ui/core';

const BaseContainer = styled('div')({
  marginLeft: 20,
  flexDirection: 'column',
});

function Tempo() {
  const currentTempo = useRecoilValue(projectStore.currentTempo);

  useTempoMapScheduler();

  return (
    <BaseContainer>
      <Typography variant={'body2'}>{currentTempo}</Typography>
      <Typography variant={'body2'}>BPM</Typography>
    </BaseContainer>
  );
}

export default Tempo;
