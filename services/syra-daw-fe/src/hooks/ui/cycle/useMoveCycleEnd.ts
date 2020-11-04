import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { transportStore } from '../../../recoil/transportStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { useCallback, useEffect, useRef, useState } from 'react';
import useMovable from '../useMovable';
import useSnapCtrlPixelCalc from '../useSnapCtrlPixelCalc';
import useQuarterToPixel from '../useQuarterToPixel';
import usePixelToQuarter from '../usePixelToQuarter';

export default function useMoveCycleEnd() {
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const cycleStart = useRecoilValue(transportStore.cycleStart);
  const [cycleEnd, setCycleEnd] = useRecoilState(transportStore.cycleEnd);
  const setIsCycleActive = useSetRecoilState(transportStore.isCycleActive);
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const quarterToPixel = useQuarterToPixel();
  const pixelToQuarter = usePixelToQuarter();
  const calcSnappedX = useSnapCtrlPixelCalc();

  const [isActive, setIsActive] = useState(false);
  const [translateX, setTranslateX] = useState(quarterToPixel(cycleEnd));

  const initialValues = useRef({ x: 0, offsetStart: 0, offsetEnd: 0 });

  useEffect(() => {
    initialValues.current.offsetStart = quarterToPixel(cycleStart);
    initialValues.current.offsetEnd = quarterToPixel(cycleEnd);
  }, [quarterToPixel, cycleStart, cycleEnd]);

  const onMouseUp = useCallback(() => {
    setCycleEnd(pixelToQuarter(translateX));
    setIsActive(false);
  }, [setCycleEnd, setIsActive, translateX, pixelToQuarter]);

  const onMouseMove = useCallback(e => {
    let x = initialValues.current.offsetEnd + e.clientX - initialValues.current.x;

    if (x > windowWidth) {
      x = windowWidth;
    }
    else if (x <= quarterToPixel(cycleStart) + (snapWidth / 4)) {
      x = quarterToPixel(cycleStart) + (snapWidth / 4);
    }

    setTranslateX(calcSnappedX(x));
  }, [snapWidth, cycleStart, quarterToPixel, windowWidth, calcSnappedX]);

  const movableTrigger = useMovable(onMouseMove, onMouseUp);

  const onMouseDown = useCallback(e => {
    e.stopPropagation();

    setIsCycleActive(true);
    setIsActive(true);

    movableTrigger();

    initialValues.current.x = e.clientX;
  }, [initialValues, setIsActive, setIsCycleActive, movableTrigger]);

  return {onMouseDown, translateX, isActive};
}