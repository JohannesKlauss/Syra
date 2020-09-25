import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { transportStore } from '../../../recoil/transportStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { useCallback, useEffect, useRef, useState } from 'react';
import useMovable from '../useMovable';
import useSnapCtrlPixelCalc from '../useSnapCtrlPixelCalc';
import useQuarterToPixel from '../useQuarterToPixel';
import usePixelToQuarter from '../usePixelToQuarter';

export default function useMoveCycleStart() {
  const [cycleStart, setCycleStart] = useRecoilState(transportStore.cycleStart);
  const setIsCycleActive = useSetRecoilState(transportStore.isCycleActive);
  const cycleEnd = useRecoilValue(transportStore.cycleEnd);
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const quarterToPixel = useQuarterToPixel();
  const pixelToQuarter = usePixelToQuarter();
  const calcSnappedX = useSnapCtrlPixelCalc();

  const [isActive, setIsActive] = useState(false);
  const [translateX, setTranslateX] = useState(quarterToPixel(cycleStart));

  console.log('cycle start', cycleStart);
  console.log('pixel', quarterToPixel(cycleStart));

  const initialValues = useRef({ x: 0, offsetStart: 0, offsetEnd: 0 });

  useEffect(() => {
    initialValues.current.offsetStart = quarterToPixel(cycleStart);
    initialValues.current.offsetEnd = quarterToPixel(cycleEnd);
  }, [quarterToPixel, cycleStart, cycleEnd]);

  const onMouseUp = useCallback(() => {
    setCycleStart(pixelToQuarter(translateX));
    setIsActive(false);
  }, [setCycleStart, setIsActive, translateX, pixelToQuarter]);

  const onMouseMove = useCallback(e => {
    let x = initialValues.current.offsetStart + e.clientX - initialValues.current.x;

    if (x < 1) {
      x = 1;
    }
    else if (x >= quarterToPixel(cycleEnd) - (snapWidth / 4)) {
      x = quarterToPixel(cycleEnd) - (snapWidth / 4); // TODO: THIS WORKS IN DEFAULT ZOOM, BUT PROBABLY NOT IN FINE GRAINED SITUATIONS.
    }

    setTranslateX(calcSnappedX(x));
  }, [snapWidth, cycleEnd, quarterToPixel, calcSnappedX]);

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