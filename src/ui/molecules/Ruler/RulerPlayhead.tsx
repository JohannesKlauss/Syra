import React, { HTMLAttributes, useEffect } from 'react';
import { styled } from '@material-ui/core';
import { useRecoilValue, useSetRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import usePlayheadAnimation from '../../../hooks/ui/usePlayheadAnimation';
import { projectStore } from '../../../recoil/projectStore';
import { red } from '@material-ui/core/colors';
import { transportStore } from '../../../recoil/transportStore';

interface PlayheadProps {
  translateX: number;
  isRecording: boolean;
}

const PlayheadIndicator = styled(
  ({ translateX, isRecording, ...other }: PlayheadProps & Omit<HTMLAttributes<HTMLSpanElement>, keyof PlayheadProps>) => <span {...other} />,
)({
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
    fontSize: 23,
    left: -16,
    position: 'absolute',
    textAlign: 'center',
    width: 32,
    top: -23,
  },
  '&:after': {
    backgroundColor: ({isRecording}: PlayheadProps) => isRecording ? red[500] : 'white',
    boxShadow: '0 0 4px 0 black',
    content: '""',
    display: 'inline-block',
    height: '100%',
    marginTop: -1,
    width: 1,
  },
});

function RulerPlayhead() {
  const snappedPlayheadPos = useRecoilValue(arrangeWindowStore.snappedPlayheadPosition);
  const beatsPerSecond = useRecoilValue(arrangeWindowStore.beatsPerSecond);
  const isRecording = useRecoilValue(projectStore.isRecording);
  const setTransportSeconds = useSetRecoilState(transportStore.seconds);
  const transportTranslate = usePlayheadAnimation();

  useEffect(() => {
    setTransportSeconds((snappedPlayheadPos - 1) * 4 * beatsPerSecond);
  }, [snappedPlayheadPos, beatsPerSecond, setTransportSeconds]);

  return (
    <PlayheadIndicator translateX={transportTranslate} isRecording={isRecording}/>
  );
}

export default RulerPlayhead;
