import React from 'react';
import { Box, styled, Typography } from '@material-ui/core';
import { projectStore } from '../../../recoil/projectStore';
import { useRecoilValue } from 'recoil/dist';
import useTimeSignatureMapScheduler from '../../../hooks/tone/useTimeSignatureMapScheduler';

const BaseContainer = styled(Box)({
  marginLeft: 20,
});

function TimeSignature() {
  const currentTimeSignature = useRecoilValue(projectStore.currentTimeSignature);

  useTimeSignatureMapScheduler();

  return (
    <BaseContainer>
      <Typography variant={'body2'}>{currentTimeSignature[0]} / {currentTimeSignature[1]}</Typography>
    </BaseContainer>
  );
}

export default TimeSignature;
