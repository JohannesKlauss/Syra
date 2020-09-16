import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { transportStore } from '../../../recoil/transportStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { useCallback, useEffect, useRef, useState } from 'react';
import useMovable from '../useMovable';
import useSnapCtrlPixelCalc from '../useSnapCtrlPixelCalc';
import useSecondsToPixel from '../useSecondsToPixel';
import usePixelToSeconds from '../usePixelToSeconds';

export default function useMoveCycleEnd() {
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const cycleStart = useRecoilValue(transportStore.cycleStart);
  const [cycleEnd, setCycleEnd] = useRecoilState(transportStore.cycleEnd);
  const setIsCycleActive = useSetRecoilState(transportStore.isCycleActive);
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const secondsToPixel = useSecondsToPixel();
  const pixelToSeconds = usePixelToSeconds();
  const calcSnappedX = useSnapCtrlPixelCalc();

  const [isActive, setIsActive] = useState(false);
  const [translateX, setTranslateX] = useState(secondsToPixel(cycleEnd));

  const initialValues = useRef({ x: 0, offsetStart: 0, offsetEnd: 0 });

  useEffect(() => {
    initialValues.current.offsetStart = secondsToPixel(cycleStart);
    initialValues.current.offsetEnd = secondsToPixel(cycleEnd);
  }, [secondsToPixel, cycleStart, cycleEnd]);

  const onMouseUp = useCallback(() => {
    setCycleEnd(pixelToSeconds(translateX));
    setIsActive(false);
  }, [setCycleEnd, setIsActive, translateX, pixelToSeconds]);

  const onMouseMove = useCallback(e => {
    let x = initialValues.current.offsetEnd + e.clientX - initialValues.current.x;

    if (x > windowWidth) {
      x = windowWidth;
    }
    else if (x <= secondsToPixel(cycleStart) + (snapWidth / 4)) {
      x = secondsToPixel(cycleStart) + (snapWidth / 4);
    }

    setTranslateX(calcSnappedX(x));
  }, [snapWidth, cycleStart, secondsToPixel, windowWidth, calcSnappedX]);

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