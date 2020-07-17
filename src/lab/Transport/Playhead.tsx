import React, { useEffect } from 'react';
import { styled } from '@material-ui/core';
import { useRecoilValue, useSetRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import usePlayheadAnimation from '../../hooks/ui/usePlayheadAnimation';
import useToneJsTransport from '../../hooks/tone/useToneJsTransport';
import { projectStore } from '../../recoil/projectStore';
import { red } from '@material-ui/core/colors';
import { transportStore } from '../../recoil/transportStore';

interface PlayheadProps {
  translateX: number;
  isRecording: boolean;
}

const PlayheadIndicator = styled('span')({
  zIndex: 12,
  width: 15,
  top: 20,
  position: 'absolute',
  height: 1200,
  display: 'inline-block',
  cursor: 'col-resize',
  willChange: 'transform',
  pointerEvents: 'none',
  transform: ({ translateX }: PlayheadProps) => `translateX(${translateX}px)`,
  '&::before': {
    content: '"\\25BC"',
    bottom: '100%',
    color: ({isRecording}: PlayheadProps) => isRecording ? red[500] : 'white',
    fontSize: 31,
    left: -9,
    position: 'absolute',
    textAlign: 'center',
    width: 32,
    top: -31,
  },
  '&:after': {
    backgroundColor: ({isRecording}: PlayheadProps) => isRecording ? red[500] : 'white',
    boxShadow: '0 0 4px 0 black',
    content: '""',
    display: 'inline-block',
    height: '100%',
    marginLeft: 6,
    marginTop: -1,
    width: 1,
  },
});

function Playhead() {
  const transport = useToneJsTransport();
  const snappedPlayheadPos = useRecoilValue(arrangeWindowStore.snappedPlayheadPosition);
  const beatsPerSecond = useRecoilValue(arrangeWindowStore.beatsPerSecond);
  const isRecording = useRecoilValue(projectStore.isRecording);
  const setTransportSeconds = useSetRecoilState(transportStore.seconds);
  const transportTranslate = usePlayheadAnimation();

  useEffect(() => {
    transport.seconds = (snappedPlayheadPos - 1) * 4 * beatsPerSecond;

    setTransportSeconds(transport.seconds);
  }, [snappedPlayheadPos, beatsPerSecond]);

  return (
    <PlayheadIndicator translateX={transportTranslate} isRecording={isRecording}/>
  );
}

export default Playhead;
