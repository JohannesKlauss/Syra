import React, { useEffect, useState } from 'react';
import { styled, Typography } from '@material-ui/core';
import { useRecoilValue } from 'recoil/dist';
import { transportStore } from '../../../recoil/transportStore';
import { getBarCountForTransportSeconds, getBeatCountForTransportSeconds } from '../../../utils/time';
import { projectStore } from '../../../recoil/projectStore';
import useToneJsTransport from '../../../hooks/tone/useToneJsTransport';

const InfoBox = styled('div')({
  marginLeft: 20,
  flexDirection: 'column',
});

function BarsAndBeats() {
  const [bars, setBars] = useState(1);
  const [beats, setBeats] = useState(1);

  const seconds = useRecoilValue(transportStore.seconds);
  const timeSignatureMap = useRecoilValue(projectStore.timeSignatureMap);
  const currentTimeSignature = useRecoilValue(projectStore.currentTimeSignature);
  const transport = useToneJsTransport();

  useEffect(() => {
    setBars(getBarCountForTransportSeconds(timeSignatureMap, seconds));
    setBeats(getBeatCountForTransportSeconds(timeSignatureMap, seconds));
  }, [seconds, timeSignatureMap, setBeats, setBars]);

  useEffect(() => {
    const id = transport.scheduleRepeat(() => {
      // Start of a new bar.
      if (beats % currentTimeSignature[0] === 0) {
        setBars(prevState => prevState + 1);
      }

      setBeats(prevState => prevState % currentTimeSignature[0] + 1);
    }, `${currentTimeSignature[1]}n`, 0);

    return () => {
      transport.clear(id);
    };
  }, [transport, currentTimeSignature, beats, bars]);

  return (
    <>
      <InfoBox>
        <Typography variant={'body2'} align={'right'}>{bars}</Typography>
        <Typography variant={'body2'}>Bar</Typography>
      </InfoBox>
      <InfoBox>
        <Typography variant={'body2'} align={'right'}>{beats}</Typography>
        <Typography variant={'body2'}>Beat</Typography>
      </InfoBox>
    </>
  );
}

export default BarsAndBeats;
