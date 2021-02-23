import React, { useEffect, useRef, useState } from 'react';
import useToneJsTransport from '../../../hooks/tone/useToneJsTransport';
import { formatSecondsToTime } from '../../../utils/time';
import { transportStore } from '../../../recoil/transportStore';
import { useRecoilValue } from 'recoil';
import { Text, useBreakpointValue } from '@chakra-ui/react';
import { gridStore } from '../../../recoil/gridStore';
import { View } from '../../../types/View';

function TimeInformation() {
  const isRecording = useRecoilValue(transportStore.isRecording);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const playheadPosition = useRecoilValue(gridStore.playheadPosition(View.ARRANGE_WINDOW));
  const transport = useToneJsTransport();
  const [time, setTime] = useState(formatSecondsToTime(transport.seconds));
  const animRef = useRef<number>(0);
  const fontSize = useBreakpointValue({ "2xl": "xl", xl: "lg", base: "lg", lg: "md", md: "sm", sm: "xs", xs: "xs" });

  const updater = () => setTime(formatSecondsToTime(transport.seconds));

  const updateTime = () => {
    updater();

    animRef.current = requestAnimationFrame(updateTime);
  };

  useEffect(() => {
    if (isRecording || isPlaying) {
      animRef.current = requestAnimationFrame(updateTime);
    } else {
      cancelAnimationFrame(animRef.current);
    }

    updater();
  }, [isRecording, isPlaying, playheadPosition]);

  return <Text fontSize={fontSize} userSelect={'none'}>{time}</Text>;
}

export default TimeInformation;
