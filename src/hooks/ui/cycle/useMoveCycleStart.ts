import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil/dist';
import { transportStore } from '../../../recoil/transportStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { useCallback, useEffect, useRef, useState } from 'react';
import useMovable from '../useMovable';

export default function useMoveCycleStart() {
  const [cycleStart, setCycleStart] = useRecoilState(transportStore.cycleStart);
  const setIsCycleActive = useSetRecoilState(transportStore.isCycleActive);
  const cycleEnd = useRecoilValue(transportStore.cycleEnd);
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const isSnapActive = useRecoilValue(arrangeWindowStore.isSnapActive);
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);

  const [isActive, setIsActive] = useState(false);
  const [translateX, setTranslateX] = useState(pixelPerSecond * cycleStart);

  const initialValues = useRef({ x: 0, offsetStart: 0, offsetEnd: 0 });

  useEffect(() => {
    initialValues.current.offsetStart = pixelPerSecond * cycleStart;
    initialValues.current.offsetEnd = pixelPerSecond * cycleEnd;
  }, [pixelPerSecond, cycleStart, cycleEnd]);

  const onMouseUp = useCallback(() => {
    setCycleStart(translateX / pixelPerSecond);
    setIsActive(false);
  }, [setCycleStart, setIsActive, translateX, pixelPerSecond]);

  const onMouseMove = useCallback(e => {
    const inverse = 1 / (snapWidth / 4); // Make the cycle snap value a quarter of the curent snap.

    let x = initialValues.current.offsetStart + e.clientX - initialValues.current.x;

    if (x < 1) {
      x = 1;
    }
    else if (x >= (pixelPerSecond * cycleEnd) - (snapWidth / 4)) {
      x = (pixelPerSecond * cycleEnd) - (snapWidth / 4);
    }

    const snappedPos = isSnapActive ? Math.round(x * inverse) / inverse : x;

    setTranslateX(snappedPos);
  }, [snapWidth, isSnapActive, cycleEnd, pixelPerSecond]);

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