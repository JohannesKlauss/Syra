import React from 'react';
import { styled } from '@material-ui/core';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import usePlayheadAnimation from '../../hooks/ui/usePlayheadAnimation';

interface PlayheadProps {
  translateX: number;
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
    color: 'white',
    fontSize: 28,
    left: -7,
    position: 'absolute',
    textAlign: 'center',
    width: 30,
    top: -28,
  },
  '&:after': {
    backgroundColor: 'white',
    boxShadow: '0 0 4px 0 black',
    content: '""',
    display: 'inline-block',
    height: '100%',
    marginLeft: 7,
    marginTop: -1,
    width: 2,
  },
});

function Playhead() {
  const snappedPlayheadPos = useRecoilValue(arrangeWindowStore.snappedPlayheadPosition);
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const snapValue = useRecoilValue(arrangeWindowStore.snapValue);
  const transportTranslate = usePlayheadAnimation();

  const translateX = (snappedPlayheadPos - 1) * (snapWidth * (1 / snapValue));

  return (
    <PlayheadIndicator translateX={translateX + transportTranslate}/>
  );
}

export default Playhead;
