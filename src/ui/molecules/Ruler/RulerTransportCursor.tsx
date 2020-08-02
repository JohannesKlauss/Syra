import React, { useCallback } from 'react';
import { Box, BoxProps, styled } from '@material-ui/core';
import { useRecoilValue, useSetRecoilState } from 'recoil/dist';
import {
  arrangeWindowStore,
} from '../../../recoil/arrangeWindowStore';
import RulerPlayhead from './RulerPlayhead';
import useSnapCtrlPixelCalc from '../../../hooks/ui/useSnapCtrlPixelCalc';
import useMovable from '../../../hooks/ui/useMovable';
import { transportStore } from '../../../recoil/transportStore';
import usePixelToSeconds from '../../../hooks/ui/usePixelToSeconds';

interface BaseContainerProps {
  windowWidth: number;
}

const BaseContainer = styled(
  ({ windowWidth, ...other }: BaseContainerProps & Omit<BoxProps, keyof BaseContainerProps>) => <Box {...other} />,
)({
  backgroundColor: 'transparent',
  width: ({ windowWidth }: BaseContainerProps) => windowWidth,
  position: 'absolute',
  bottom: 0,
  height: 20,
  zIndex: 2,
});

function RulerTransportCursor() {
  const pixelToSeconds = usePixelToSeconds();
  const setTransportSeconds = useSetRecoilState(transportStore.seconds);
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const setPlayheadPos = useSetRecoilState(arrangeWindowStore.playheadPosition);
  const calcSnappedPos = useSnapCtrlPixelCalc();

  const onMouseInteraction = useCallback(e => {
    const position = calcSnappedPos(e.clientX - e.target.getBoundingClientRect().left);

    setPlayheadPos(position);
    setTransportSeconds(pixelToSeconds(position));
  }, [setPlayheadPos, calcSnappedPos, pixelToSeconds, setTransportSeconds]);

  const onMovableTrigger = useMovable(onMouseInteraction, onMouseInteraction);

  const onMouseDown = useCallback((e) => {
    onMouseInteraction(e);
    onMovableTrigger();
  }, [onMouseInteraction, onMovableTrigger]);

  return (
    <BaseContainer windowWidth={windowWidth} onMouseDown={onMouseDown}>
      <RulerPlayhead/>
    </BaseContainer>
  );
}

export default RulerTransportCursor;
