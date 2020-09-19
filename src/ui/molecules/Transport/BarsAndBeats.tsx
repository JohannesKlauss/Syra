import React, { useEffect, useState } from 'react';
import { styled, Typography } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { projectStore } from '../../../recoil/projectStore';
import useToneJsTransport from '../../../hooks/tone/useToneJsTransport';
import { transportStore } from '../../../recoil/transportStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import * as Tone from 'tone';

const InfoBox = styled('div')({
  marginLeft: 20,
  flexDirection: 'column',
});

function BarsAndBeats() {
  const [bars, setBars] = useState(0);
  const [beats, setBeats] = useState(1);

  const currentTimeSignature = useRecoilValue(projectStore.currentTimeSignature);
  const currentQuarterPosition = useRecoilValue(transportStore.currentQuarter);
  const playheadPosition = useRecoilValue(arrangeWindowStore.playheadPosition);
  const currentBar = useRecoilValue(transportStore.currentBar);
  const transport = useToneJsTransport();

  useEffect(() => {
    const id = transport.scheduleRepeat(() => {
      setBeats(prevState => (prevState + 1) % currentTimeSignature[0]);
    }, `${currentTimeSignature[1]}n`, `${currentTimeSignature[1]}n`);

    return () => {
      transport.clear(id);
    };
  }, [transport, currentTimeSignature, setBars, setBeats]);

  useEffect(() => {
    if (beats === 1) {
      setBars(prevState => prevState + 1); // TODO: For some reason this gets called twice.
    }
  }, [beats]);

  useEffect(() => {
    console.log('current', currentQuarterPosition);
    console.log('position', Tone.getTransport().position);
  }, [currentQuarterPosition, playheadPosition]);

  return (
    <>
      <InfoBox>
        <Typography variant={'body2'} align={'right'}>{bars}</Typography>
        <Typography variant={'body2'}>Bar</Typography>
      </InfoBox>
      <InfoBox>
        <Typography variant={'body2'} align={'right'}>{beats !== 0 ? beats : currentTimeSignature[0]}</Typography>
        <Typography variant={'body2'}>Beat</Typography>
      </InfoBox>
    </>
  );
}

export default BarsAndBeats;
