import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { IconButton } from '@material-ui/core';
import { useSetRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindow';

function PlayRecord() {
  const setPlayheadPosition = useSetRecoilState(arrangeWindowStore.playheadPosition);

  return (
    <>
      <IconButton color={'default'} component="span" onClick={() => setPlayheadPosition(1)}>
        <SkipPreviousIcon />
      </IconButton>
      <IconButton color={'primary'} component="span">
        <PlayArrowIcon />
      </IconButton>
      <IconButton color={'secondary'} component="span">
        <FiberManualRecordIcon />
      </IconButton>
    </>
  );
}

export default PlayRecord;
