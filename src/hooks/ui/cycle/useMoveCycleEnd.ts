import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil/dist';
import { transportStore } from '../../../recoil/transportStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { useCallback, useEffect, useRef, useState } from 'react';
import useMovable from '../useMovable';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';

export default function useMoveCycleEnd() {
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const cycleStart = useRecoilValue(transportStore.cycleStart);
  const [cycleEnd, setCycleEnd] = useRecoilState(transportStore.cycleEnd);
  const setIsCycleActive = useSetRecoilState(transportStore.isCycleActive);
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const isSnapActive = useRecoilValue(arrangeWindowStore.isSnapActive);
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);
  const isPressed = useIsHotkeyPressed();

  const [isActive, setIsActive] = useState(false);
  const [translateX, setTranslateX] = useState(pixelPerSecond * cycleEnd);

  const initialValues = useRef({ x: 0, offsetStart: 0, offsetEnd: 0 });

  useEffect(() => {
    initialValues.current.offsetStart = pixelPerSecond * cycleStart;
    initialValues.current.offsetEnd = pixelPerSecond * cycleEnd;
  }, [pixelPerSecond, cycleStart, cycleEnd]);

  const onMouseUp = useCallback(() => {
    setCycleEnd(translateX / pixelPerSecond);
    setIsActive(false);
  }, [setCycleEnd, setIsActive, translateX, pixelPerSecond]);

  const onMouseMove = useCallback(e => {
    const inverse = 1 / (snapWidth / 4); // Make the cycle snap value a quarter of the curent snap.

    let x = initialValues.current.offsetEnd + e.clientX - initialValues.current.x;

    if (x > windowWidth) {
      x = windowWidth;
    }
    else if (x <= (pixelPerSecond * cycleStart) + (snapWidth / 4)) {
      x = (pixelPerSecond * cycleStart) + (snapWidth / 4);
    }

    const snappedPos = isSnapActive && !isPressed('ctrl') ? Math.round(x * inverse) / inverse : x;

    setTranslateX(snappedPos);
  }, [snapWidth, isSnapActive, cycleStart, pixelPerSecond, windowWidth, isPressed]);

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