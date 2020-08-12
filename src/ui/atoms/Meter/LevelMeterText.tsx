import React, { useContext, useEffect, useRef, useState } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import useBackboneChannel from '../../../hooks/tone/BackboneMixer/useBackboneChannel';
import { Typography } from '@material-ui/core';
import { transportStore } from '../../../recoil/transportStore';
import { useRecoilValue } from 'recoil/dist';

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
    if (isPlaying || isRecording) {
      setLevel(-95);
      intervalRef.current = setInterval(anim, 60);
    }

    return () => {
      clearInterval(intervalRef.current);
    }
  }, [isPlaying, isRecording]);

  return (
    <Typography gutterBottom align={'center'}>
      {level <= -95 ? '-∞' : level.toFixed(1)}
    </Typography>
  );
}

export default LevelMeterText;
