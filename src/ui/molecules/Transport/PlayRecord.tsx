import React, { useCallback, useContext, useRef } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { Box, IconButton, styled } from '@material-ui/core';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import useToneJsTransport from '../../../hooks/tone/useToneJsTransport';
import { transportStore } from '../../../recoil/transportStore';
import { useHotkeys } from 'react-hotkeys-hook';
import { buttonInfo } from '../../../utils/text';
import useAudioContext from '../../../hooks/audio/useAudioContext';
import { BackboneMixerContext } from '../../../providers/BackboneMixerContext';
import { projectStore } from '../../../recoil/projectStore';
import { getToneJsPositionInQuarter } from '../../../utils/tonejs';

const BaseContainer = styled(Box)({
  marginLeft: 20,
  marginRight: 20,
  flex: 1,
  display: 'flex',
});

function PlayRecord() {
  const ctx = useAudioContext();
  const [isRecording, setIsRecording] = useRecoilState(transportStore.isRecording);
  const [isPlaying, setIsPlaying] = useRecoilState(transportStore.isPlaying);
  const setCurrentTransportQuarter = useSetRecoilState(transportStore.currentQuarter);
  const isCycleActive = useRecoilValue(transportStore.isCycleActive);
  const cycleStart = useRecoilValue(transportStore.cycleStart);
  const lengthInQuarters = useRecoilValue(projectStore.lengthInQuarters);
  const transport = useToneJsTransport();
  const stopScheduleId = useRef<null | number>(null);
  const { meta: { setTransportStart, setTransportStop } } = useContext(BackboneMixerContext);

  const onClickPlayPause = useCallback(() => {
    if (isRecording) {
      return;
    }

    if (isPlaying) {
      const pos = getToneJsPositionInQuarter();
      transport.stop();

      if (stopScheduleId.current) {
        transport.clear(stopScheduleId.current);
      }

      setCurrentTransportQuarter(pos);
    } else {
      if (isCycleActive) {
        setCurrentTransportQuarter(cycleStart);
      }

      transport.start('+0.01');

      stopScheduleId.current = transport.scheduleOnce(() => {
        const pos = getToneJsPositionInQuarter();
        transport.stop();

        setCurrentTransportQuarter(pos);
        setIsPlaying(false);
      }, `${lengthInQuarters}:0:0`);
    }

    setIsPlaying(currVal => !currVal);
  }, [setIsPlaying, transport, isPlaying, isRecording, cycleStart, isCycleActive, lengthInQuarters]);

  const onClickReset = useCallback(() => setCurrentTransportQuarter(0), [setCurrentTransportQuarter]);

  const onClickRecord = useCallback(() => {
    if (isRecording) {
      setIsRecording(false);
      transport.stop();

      setTransportStop(ctx.rawContext.currentTime);
    } else {
      setIsRecording(true);
      transport.start('+0.05');

      setTransportStart(ctx.rawContext.currentTime + 0.05);
    }
  }, [setIsRecording, isRecording, transport, setTransportStart, setTransportStop, ctx]);

  useHotkeys('space', onClickPlayPause, [onClickPlayPause]);
  useHotkeys('r', onClickRecord, [onClickRecord]);
  useHotkeys('return', onClickReset, [onClickReset]);

  return (
    <BaseContainer>
      <IconButton color={'default'} component="span" onClick={onClickReset}
                  title={buttonInfo('Reset to project start', 'Return')}>
        <SkipPreviousIcon/>
      </IconButton>
      <IconButton color={'primary'} component="span" onClick={onClickPlayPause}
                  title={buttonInfo('Play and Pause project', 'Space')}>
        {isPlaying ? <PauseIcon/> : <PlayArrowIcon/>}
      </IconButton>
      <IconButton color={'secondary'} component="span" onClick={onClickRecord}
                  title={buttonInfo('Start and Stop recording', 'R')}>
        {isRecording ? <StopIcon/> : <FiberManualRecordIcon/>}
      </IconButton>
    </BaseContainer>
  );
}

export default PlayRecord;
