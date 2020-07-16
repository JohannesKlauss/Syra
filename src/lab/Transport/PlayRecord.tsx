import React, { useCallback, useState } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { Box, IconButton, styled } from '@material-ui/core';
import { useSetRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import useToneJsTransport from '../../hooks/tone/useToneJsTransport';

const BaseContainer = styled(Box)({
  marginLeft: 20,
  marginRight: 20,
});

function PlayRecord() {
  const setPlayheadPosition = useSetRecoilState(arrangeWindowStore.playheadPosition);
  const transport = useToneJsTransport();
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickPlayPause = useCallback(() => {
    console.log('is playing', isPlaying);
    isPlaying ? transport.stop() : transport.start();
    setIsPlaying(currVal => !currVal);
  }, [setIsPlaying, transport, isPlaying]);

  const onClickReset = useCallback(() => {
    transport.position = 0;
    setPlayheadPosition(1);
  }, [transport, setPlayheadPosition]);

  return (
    <BaseContainer>
      <IconButton color={'default'} component="span" onClick={onClickReset}>
        <SkipPreviousIcon/>
      </IconButton>
      <IconButton color={'primary'} component="span" onClick={onClickPlayPause}>
        {isPlaying ? <PauseIcon/> : <PlayArrowIcon/>}
      </IconButton>
      <IconButton color={'secondary'} component="span">
        <FiberManualRecordIcon/>
      </IconButton>
    </BaseContainer>
  );
}

export default PlayRecord;
