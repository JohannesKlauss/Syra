import React, { useCallback, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  arrangeWindowStore,
} from '../../../recoil/arrangeWindowStore';
import RulerPlayhead from './RulerPlayhead';
import useSnapCtrlPixelCalc from '../../../hooks/ui/useSnapCtrlPixelCalc';
import useMovable from '../../../hooks/ui/useMovable';
import { transportStore } from '../../../recoil/transportStore';
import { isBetween } from '../../../utils/numbers';
import useBarAtPixel from '../../../hooks/ui/transportCursor/useBarAtPixel';
import { Box } from '@chakra-ui/react';

function RulerTransportCursor() {
  const setTransportQuarters = useSetRecoilState(transportStore.currentQuarter);
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const playheadPosition = useRecoilValue(arrangeWindowStore.playheadPosition);
  const calcSnappedPos = useSnapCtrlPixelCalc();
  const zoomedQuarterPixelWidth = useRecoilValue(arrangeWindowStore.zoomedQuarterPixelWidth);
  const viewportWidth = useRecoilValue(arrangeWindowStore.viewportWidth);
  const arrangeWindowRef = useRecoilValue(arrangeWindowStore.ref);
  const snapValue = useRecoilValue(arrangeWindowStore.snapValue);
  const barAtPixel = useBarAtPixel();
  const isSnapActive = useRecoilValue(arrangeWindowStore.isSnapActive);

  const onMouseInteraction = useCallback(e => {
    const rawPosition = e.clientX - e.target.getBoundingClientRect().left;
    const position = calcSnappedPos(rawPosition);

    if (playheadPosition !== position) {
      if (snapValue === 4 && isSnapActive) { // If snap Value is at 1 bar we have to snap to the nearest bar.
        setTransportQuarters(barAtPixel(position)?.quarterInProject || position / zoomedQuarterPixelWidth);
      } else {
        setTransportQuarters((isSnapActive ? position : rawPosition) / zoomedQuarterPixelWidth);
      }
    }
  }, [calcSnappedPos, setTransportQuarters, playheadPosition, zoomedQuarterPixelWidth, barAtPixel, snapValue, isSnapActive]);

  const onMovableTrigger = useMovable(onMouseInteraction, onMouseInteraction);

  const onMouseDown = useCallback((e) => {
    onMouseInteraction(e);
    onMovableTrigger();
  }, [onMouseInteraction, onMovableTrigger]);

  // Scroll the arrange window if playhead exceed viewport
  useEffect(() => {
    const scrollLeft = arrangeWindowRef?.current?.scrollLeft ?? 0;

    if (!isBetween(playheadPosition, [scrollLeft, scrollLeft + viewportWidth])) {
      arrangeWindowRef?.current?.scrollTo({
        left: Math.max(0, playheadPosition - 30)
      });
    }
  }, [playheadPosition, viewportWidth, arrangeWindowRef]);

  return (
    <Box w={`${windowWidth}px`} bg={'transparent'} pos={'absolute'} bottom={0} h={'20px'} zIndex={2} onMouseDown={onMouseDown}>
      <RulerPlayhead/>
    </Box>
  );
}

export default RulerTransportCursor;
