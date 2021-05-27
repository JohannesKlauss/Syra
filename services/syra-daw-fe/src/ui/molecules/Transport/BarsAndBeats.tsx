import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import useToneJsTransport from '../../../hooks/tone/useToneJsTransport';
import { transportStore } from '../../../recoil/transportStore';
import { Box, Text } from '@chakra-ui/react';
import { gridStore } from "../../../recoil/gridStore";
import { View } from "../../../types/View";

function BarsAndBeats() {
  const [bars, setBars] = useState(0);
  const [beats, setBeats] = useState(1);

  const isRecording = useRecoilValue(transportStore.isRecording);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const currentTimeSignature = useRecoilValue(transportStore.currentTimeSignature);
  const currentQuarterPosition = useRecoilValue(transportStore.currentQuarter);
  const playheadPosition = useRecoilValue(gridStore.playheadPosition(View.ARRANGE_WINDOW));
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
    if (beats === 0 && (isPlaying || isRecording)) {
      setBars(prevState => prevState + 1);
    }
  }, [beats, isPlaying, isRecording, currentBar]);

  useEffect(() => {
    setBars(currentBar?.bar ?? 1);
    setBeats(Math.floor(currentQuarterPosition - (currentBar?.quarterInProject ?? 0)));
  }, [currentQuarterPosition, playheadPosition, currentBar]);

  return (
    <>
      <Box>
        <Text fontSize={'sm'} textAlign={'right'} userSelect={'none'}>{bars}</Text>
        <Text fontSize={'sm'} userSelect={'none'}>Bar</Text>
      </Box>
      <Box>
        <Text fontSize={'sm'} textAlign={'right'} userSelect={'none'}>{beats + 1}</Text>
        <Text fontSize={'sm'} userSelect={'none'}>Beat</Text>
      </Box>
    </>
  );
}

export default BarsAndBeats;
