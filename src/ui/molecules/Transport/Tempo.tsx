import React from 'react';
import { useRecoilValue } from 'recoil/dist';
import { projectStore } from '../../../recoil/projectStore';
import useTempoMapScheduler from '../../../hooks/audio/useTempoMapScheduler';
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
      <Typography variant={'body2'}>BPM</Typography>
      <Typography variant={'body2'}>{currentTempo}</Typography>
    </BaseContainer>
  );
}

export default Tempo;
