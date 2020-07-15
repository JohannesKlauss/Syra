import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { Box, IconButton, styled } from '@material-ui/core';
import { useSetRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindow';

const BaseContainer = styled(Box)({
  marginLeft: 20,
  marginRight: 20,
});

function PlayRecord() {
  const setPlayheadPosition = useSetRecoilState(arrangeWindowStore.playheadPosition);

  return (
    <BaseContainer>
      <IconButton color={'default'} component="span" onClick={() => setPlayheadPosition(1)}>
        <SkipPreviousIcon />
      </IconButton>
      <IconButton color={'primary'} component="span">
        <PlayArrowIcon />
      </IconButton>
      <IconButton color={'secondary'} component="span">
        <FiberManualRecordIcon />
      </IconButton>
    </BaseContainer>
  );
}

export default PlayRecord;
