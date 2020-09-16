import React, { useEffect, useRef, useState } from 'react';
import { Typography } from '@material-ui/core';
import useToneJsTransport from '../../../hooks/tone/useToneJsTransport';
import { formatSecondsToTime } from '../../../utils/time';
import { transportStore } from '../../../recoil/transportStore';
import { useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';

function TimeInformation() {
  const isRecording = useRecoilValue(transportStore.isRecording);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const playheadPosition = useRecoilValue(arrangeWindowStore.playheadPosition);
  const transport = useToneJsTransport();
  const [time, setTime] = useState(formatSecondsToTime(transport.seconds));
  const animRef = useRef<number>(0);

  const updater = () => setTime(formatSecondsToTime(transport.seconds));

  const updateTime = () => {
    updater();

    animRef.current = requestAnimationFrame(updateTime);
  }

  useEffect(() => {
    if (isRecording || isPlaying) {
      animRef.current = requestAnimationFrame(updateTime);
    }
    else {
      cancelAnimationFrame(animRef.current);
    }

    updater();
  }, [isRecording, isPlaying, playheadPosition]);

  return (
    <>
      <Typography variant={'h5'}>
        {time}
      </Typography>
    </>
  );
}

export default TimeInformation;
