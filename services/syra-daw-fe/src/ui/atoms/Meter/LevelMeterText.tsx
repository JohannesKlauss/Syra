import React, { useContext, useEffect, useRef, useState } from "react";
import { ChannelContext } from '../../../providers/ChannelContext';
import { transportStore } from '../../../recoil/transportStore';
import { useRecoilValue } from 'recoil';
import { Box, Text } from '@chakra-ui/react';
import useSyraEngineChannel from '../../../hooks/engine/useSyraEngineChannel';
import { channelStore } from "../../../recoil/channelStore";
import { getPeakMeterValue } from "../../../utils/audio";

function LevelMeterText() {
  const channelId = useContext(ChannelContext);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const isRecording = useRecoilValue(transportStore.isRecording);
  const isArmed = useRecoilValue(channelStore.isArmed(channelId));
  const isInputMonitoringActive = useRecoilValue(channelStore.isInputMonitoringActive(channelId));
  const channel = useSyraEngineChannel(channelId);
  const [level, setLevel] = useState(-95);
  const intervalRef = useRef<any>();

  const anim = () => {
    const currentPeak = getPeakMeterValue(channel.rmsValue || 0);

    setLevel(prevState => {
      if (prevState < currentPeak) {
        return currentPeak
      }

      return prevState;
    });
  };

  useEffect(() => {
    if (isPlaying || isRecording || isArmed || isInputMonitoringActive) {
      setLevel(-95);
      intervalRef.current = setInterval(anim, 60);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPlaying, isRecording, isArmed, isInputMonitoringActive, intervalRef, setLevel]);

  return (
    <Box w={'35%'} bg={'gray.800'} boxShadow={'inner'} p={2} rounded={'md'}>
      <Text textAlign={'center'} fontSize={'xs'}>
        {level <= -95 ? '-∞' : level.toFixed(1)}
      </Text>
    </Box>
  );
}

export default LevelMeterText;
