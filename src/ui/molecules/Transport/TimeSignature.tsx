import React from 'react';
import { Box, styled, Typography } from '@material-ui/core';
import { projectStore } from '../../../recoil/projectStore';
import { useRecoilState } from 'recoil/dist';

const BaseContainer = styled(Box)({
  marginLeft: 20,
});

function TimeSignature() {
  const [timeSignature, setTimeSignature] = useRecoilState(projectStore.timeSignature);

  return (
    <BaseContainer>
      <Typography variant={'body2'}>{timeSignature.beats} / {timeSignature.over}</Typography>
    </BaseContainer>
  );
}

export default TimeSignature;
