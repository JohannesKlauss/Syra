import React, { useCallback, useEffect, useState } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { Box, IconButton, styled } from '@material-ui/core';
import { useRecoilValue, useSetRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import useToneJsTransport from '../../hooks/tone/useToneJsTransport';

const BaseContainer = styled(Box)({
  marginLeft: 20,
  marginRight: 20,
});

function PlayRecord() {
  const setPlayheadPosition = useSetRecoilState(arrangeWindowStore.playheadPosition);
  const playheadPosition = useRecoilValue(arrangeWindowStore.snappedPlayheadPosition);
  const secondsPerBeat = useRecoilValue(arrangeWindowStore.secondsPerBeat);
  const transport = useToneJsTransport();
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickPlayPause = useCallback(() => {
    isPlaying ? transport.stop() : transport.start("+0.05", `+${(playheadPosition - 1) * 4 * secondsPerBeat}`);

    setIsPlaying(currVal => !currVal);
  }, [setIsPlaying, transport, isPlaying, playheadPosition, secondsPerBeat]);

  const onClickReset = useCallback(() => {
    setPlayheadPosition(1);
  }, [setPlayheadPosition]);

  useEffect(() => {
    transport.on('start', (...args) => console.log('started', args[1]));
  }, []);

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
