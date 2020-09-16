import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { transportStore } from '../../../recoil/transportStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { useCallback, useEffect, useRef, useState } from 'react';
import useMovable from '../useMovable';
import useSnapCtrlPixelCalc from '../useSnapCtrlPixelCalc';
import useSecondsToPixel from '../useSecondsToPixel';
import usePixelToSeconds from '../usePixelToSeconds';

export default function useMoveCycleStart() {
  const [cycleStart, setCycleStart] = useRecoilState(transportStore.cycleStart);
  const setIsCycleActive = useSetRecoilState(transportStore.isCycleActive);
  const cycleEnd = useRecoilValue(transportStore.cycleEnd);
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const secondsToPixel = useSecondsToPixel();
  const pixelToSeconds = usePixelToSeconds();
  const calcSnappedX = useSnapCtrlPixelCalc();

  const [isActive, setIsActive] = useState(false);
  const [translateX, setTranslateX] = useState(secondsToPixel(cycleStart));

  const initialValues = useRef({ x: 0, offsetStart: 0, offsetEnd: 0 });

  useEffect(() => {
    initialValues.current.offsetStart = secondsToPixel(cycleStart);
    initialValues.current.offsetEnd = secondsToPixel(cycleEnd);
  }, [secondsToPixel, cycleStart, cycleEnd]);

  const onMouseUp = useCallback(() => {
    setCycleStart(pixelToSeconds(translateX));
    setIsActive(false);
  }, [setCycleStart, setIsActive, translateX, pixelToSeconds]);

  const onMouseMove = useCallback(e => {
    let x = initialValues.current.offsetStart + e.clientX - initialValues.current.x;

    if (x < 1) {
      x = 1;
    }
    else if (x >= secondsToPixel(cycleEnd) - (snapWidth / 4)) {
      x = secondsToPixel(cycleEnd) - (snapWidth / 4); // TODO: THIS WORKS IN DEFAULT ZOOM, BUT PROBABLY NOT IN FINE GRAINED SITUATIONS.
    }

    setTranslateX(calcSnappedX(x));
  }, [snapWidth, cycleEnd, secondsToPixel, calcSnappedX]);

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