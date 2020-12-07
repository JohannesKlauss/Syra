import React, { useContext, useEffect, useRef, useState } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import useBackboneChannel from '../../../hooks/tone/BackboneMixer/useBackboneChannel';
import { transportStore } from '../../../recoil/transportStore';
import { useRecoilValue } from 'recoil';
import { Box, Text } from "@chakra-ui/react";

function LevelMeterText() {
  const channelId = useContext(ChannelContext);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const isRecording = useRecoilValue(transportStore.isRecording);
  const {rmsMeter} = useBackboneChannel(channelId);
  const [level, setLevel] = useState(-95);
  const intervalRef = useRef<any>();

  const anim = () => {
    setLevel(currVal => {
      if (currVal < (rmsMeter.getValue() as number)) {
        return rmsMeter.getValue() as number;
      }

      return currVal;
    });
  }

  useEffect(() => {
    // TODO: THIS IS A BIT STUPID BECAUSE WE DON'T SEE LEVELS WHEN WE ARE NOT PLAYING OR RECORDING. I.E. SYNTHS OR INPUT MONITORING DOESN'T WORK THAT WAY.
    if (isPlaying || isRecording) {
      setLevel(-95);
      intervalRef.current = setInterval(anim, 60);
    }

    return () => {
      clearInterval(intervalRef.current);
    }
  }, [isPlaying, isRecording]);

  return (
    <Box w={'35%'} bg={'gray.800'} boxShadow={'inner'} p={2} rounded={'md'}>
      <Text textAlign={'center'}>
        {level <= -95 ? '-∞' : level.toFixed(1)}
      </Text>
    </Box>
  );
}

export default LevelMeterText;
