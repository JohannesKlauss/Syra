import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { transportStore } from '../../../recoil/transportStore';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useMovable from '../useMovable';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';

export default function useMoveCycleBar() {
  const [cycleStart, setCycleStart] = useRecoilState(transportStore.cycleStart);
  const [cycleEnd, setCycleEnd] = useRecoilState(transportStore.cycleEnd);
  const setIsCycleActive = useSetRecoilState(transportStore.isCycleActive);
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const isSnapActive = useRecoilValue(arrangeWindowStore.isSnapActive);
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);
  const isPressed = useIsHotkeyPressed();

  const [translateX, setTranslateX] = useState(pixelPerSecond * cycleStart);

  const initialValues = useRef({ x: 0, offsetStart: 0, offsetEnd: 0 });

  const cycleWidth = useMemo(() => pixelPerSecond * cycleEnd - pixelPerSecond * cycleStart, [pixelPerSecond, cycleEnd, cycleStart]);

  useEffect(() => setTranslateX(cycleStart * pixelPerSecond), [cycleStart, pixelPerSecond]);

  useEffect(() => {
    initialValues.current.offsetStart = pixelPerSecond * cycleStart;
    initialValues.current.offsetEnd = pixelPerSecond * cycleEnd;
  }, [pixelPerSecond, cycleStart, cycleEnd]);

  const onMouseUp = useCallback(() => {
    setCycleStart(translateX / pixelPerSecond);
    setCycleEnd((translateX + cycleWidth) / pixelPerSecond);
  }, [translateX, setCycleEnd, cycleWidth, pixelPerSecond, setCycleStart, isPressed]);

  const onMouseMove = useCallback(e => {
    const inverse = 1 / (snapWidth / 4); // Make the cycle snap value a quarter of the curent snap.

    let x = initialValues.current.offsetStart + e.clientX - initialValues.current.x;

    if (x < 1) {
      x = 1;
    }

    const snappedPos = isSnapActive && !isPressed('ctrl') ? Math.round(x * inverse) / inverse : x;

    setTranslateX(snappedPos);
  }, [snapWidth, setTranslateX, isSnapActive]);

  const movableTrigger = useMovable(onMouseMove, onMouseUp);

  const onMouseDown = useCallback(e => {
    movableTrigger();

    setIsCycleActive(true);

    initialValues.current.x = e.clientX;
  }, [initialValues, setIsCycleActive, movableTrigger]);

  return {onMouseDown, translateX};
}