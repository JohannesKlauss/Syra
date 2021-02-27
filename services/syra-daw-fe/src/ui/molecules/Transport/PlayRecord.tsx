import React, { useCallback, useContext, useRef } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import useToneJsTransport from '../../../hooks/tone/useToneJsTransport';
import { transportStore } from '../../../recoil/transportStore';
import { useHotkeys } from 'react-hotkeys-hook';
import { buttonInfo } from '../../../utils/text';
import useAudioContext from '../../../hooks/audio/useAudioContext';
import { BackboneMixerContext } from '../../../providers/BackboneMixerContext';
import { projectStore } from '../../../recoil/projectStore';
import { getToneJsPositionInQuarter } from '../../../utils/tonejs';
import { Flex, IconButton } from '@chakra-ui/react';
import { AiFillStepBackward } from 'react-icons/ai';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { MdFiberManualRecord } from 'react-icons/md';
import { RiStopFill } from 'react-icons/ri';

function PlayRecord() {
  const ctx = useAudioContext();
  const [isRecording, setIsRecording] = useRecoilState(transportStore.isRecording);
  const [isPlaying, setIsPlaying] = useRecoilState(transportStore.isPlaying);
  const setCurrentTransportQuarter = useSetRecoilState(transportStore.currentQuarter);
  const setTransportSeconds = useSetRecoilState(transportStore.seconds);
  const isCycleActive = useRecoilValue(transportStore.isCycleActive);
  const cycleStart = useRecoilValue(transportStore.cycleStart);
  const lengthInQuarters = useRecoilValue(projectStore.lengthInQuarters);
  const transport = useToneJsTransport();
  const stopScheduleId = useRef<null | number>(null);
  const {
    meta: { setTransportStart, setTransportStop },
  } = useContext(BackboneMixerContext);

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
        setTransportSeconds(cycleStart);
      }

      transport.start('+0.1'); // TODO: THIS VALUE WILL DIFFER FROM MACHINE TO MACHINE. WE NEED A WAY TO CALCULATE THE NEEDED OFFSET.

      stopScheduleId.current = transport.scheduleOnce(() => {
        const pos = getToneJsPositionInQuarter();
        transport.stop();

        setCurrentTransportQuarter(pos);
        setIsPlaying(false);
      }, `${lengthInQuarters}:0:0`);
    }

    setIsPlaying((currVal) => !currVal);
  }, [setIsPlaying, transport, isPlaying, isRecording, cycleStart, isCycleActive, lengthInQuarters, setCurrentTransportQuarter, setTransportSeconds]);

  const onClickReset = useCallback(() => {
    setTransportSeconds(0);
  }, [setTransportSeconds]);

  const onClickRecord = useCallback(e => {
    if (isRecording) {
      setIsRecording(false);
      transport.stop();

      setTransportStop(ctx.rawContext.currentTime);
    } else {
      setIsRecording(true);
      transport.start('+0.1');

      setTransportStart(ctx.rawContext.currentTime + 0.05);
    }
  }, [setIsRecording, isRecording, transport, setTransportStart, setTransportStop, ctx]);

  useHotkeys('space', onClickPlayPause, [onClickPlayPause]);
  useHotkeys('r', onClickRecord, [onClickRecord]);
  useHotkeys('return', onClickReset, [onClickReset]);

  return (
    <Flex>
      <IconButton
        aria-label={'Reset to project start'}
        icon={<AiFillStepBackward />}
        onClick={onClickReset}
        title={buttonInfo('Reset to project start', 'Return')}
        onMouseDown={e => e.preventDefault()}
      />
      <IconButton
        aria-label={'Play and pause project'}
        icon={isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
        colorScheme={'teal'}
        onClick={onClickPlayPause}
        mx={1}
        title={buttonInfo('Play and pause project', 'Return')}
        onMouseDown={e => e.preventDefault()}
      />
      <IconButton
        aria-label={'Start and stop recording'}
        icon={isRecording ? <RiStopFill /> : <MdFiberManualRecord />}
        colorScheme={'red'}
        onClick={onClickRecord}
        title={buttonInfo('Start and stop recording', 'Return')}
        onMouseDown={e => e.preventDefault()}
      />
    </Flex>
  );
}

export default PlayRecord;
