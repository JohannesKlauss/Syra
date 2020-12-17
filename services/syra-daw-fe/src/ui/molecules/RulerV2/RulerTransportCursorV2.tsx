import React, { useCallback, useContext, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import useMovable from '../../../hooks/ui/useMovable';
import { transportStore } from '../../../recoil/transportStore';
import { isBetween } from '../../../utils/numbers';
import { Box } from '@chakra-ui/react';
import { gridStore } from "../../../recoil/gridStore";
import { ViewContext } from "../../../providers/ViewContext";
import RulerPlayheadV2 from "./RulerPlayheadV2";
import useSnapPixelValue from "../../../hooks/ui/useSnapPixelValue";
import useBarAtPixelV2 from "../../../hooks/ui/transportCursor/useBarAtPixelV2";

const RulerTransportCursorV2: React.FC = ({children}) => {
  const { view, viewRef } = useContext(ViewContext);
  const setTransportQuarters = useSetRecoilState(transportStore.currentQuarter);
  const windowWidth = useRecoilValue(gridStore.totalWidth(view));
  const playheadPosition = useRecoilValue(gridStore.playheadPosition(view));
  const snapPixelValue = useSnapPixelValue();
  const zoomedQuarterPixelWidth = useRecoilValue(gridStore.zoomedQuarterPixelWidth(view));
  const viewWidth = useRecoilValue(gridStore.viewWidth(view));
  const snapValue = useRecoilValue(gridStore.snapValue(view));
  const barAtPixel = useBarAtPixelV2();
  const isSnapActive = useRecoilValue(gridStore.isSnapActive(view));

  const onMouseInteraction = useCallback(e => {
    const rawPosition = e.clientX - e.target.getBoundingClientRect().left;
    const position = snapPixelValue(rawPosition);

    if (playheadPosition !== position) {
      if (snapValue === 4 && isSnapActive) { // If snap Value is at 1 bar we have to snap to the nearest bar.
        setTransportQuarters(barAtPixel(position)?.quarterInProject || position / zoomedQuarterPixelWidth);
      } else {
        setTransportQuarters((isSnapActive ? position : rawPosition) / zoomedQuarterPixelWidth);
      }
    }
  }, [snapPixelValue, setTransportQuarters, playheadPosition, zoomedQuarterPixelWidth, barAtPixel, snapValue, isSnapActive]);

  const onMovableTrigger = useMovable(onMouseInteraction, onMouseInteraction);

  const onMouseDown = useCallback((e) => {
    onMouseInteraction(e);
    onMovableTrigger();
  }, [onMouseInteraction, onMovableTrigger]);

  // Scroll the grid view if playhead exceed viewport
  useEffect(() => {
    const scrollLeft = viewRef?.current?.scrollLeft ?? 0;

    if (!isBetween(playheadPosition, [scrollLeft, scrollLeft + viewWidth - 60])) {
      viewRef?.current?.scrollTo({
        left: Math.max(0, Math.ceil((playheadPosition / viewWidth)) * viewWidth - 60)
      });
    }
  }, [playheadPosition, viewWidth, viewRef]);

  return (
    <Box w={`${windowWidth}px`} bg={'transparent'} pos={'absolute'} bottom={0} h={'20px'} zIndex={2} onMouseDown={onMouseDown}>
      <RulerPlayheadV2/>
      {children}
    </Box>
  );
};

export default RulerTransportCursorV2;