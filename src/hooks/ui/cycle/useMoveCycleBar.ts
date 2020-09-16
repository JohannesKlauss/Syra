import { useRecoilState, useSetRecoilState } from 'recoil';
import { transportStore } from '../../../recoil/transportStore';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useMovable from '../useMovable';
import useSnapCtrlPixelCalc from '../useSnapCtrlPixelCalc';
import useSecondsToPixel from '../useSecondsToPixel';
import usePixelToSeconds from '../usePixelToSeconds';

export default function useMoveCycleBar() {
  const [cycleStart, setCycleStart] = useRecoilState(transportStore.cycleStart);
  const [cycleEnd, setCycleEnd] = useRecoilState(transportStore.cycleEnd);
  const setIsCycleActive = useSetRecoilState(transportStore.isCycleActive);
  const secondsToPixel = useSecondsToPixel();
  const pixelToSeconds = usePixelToSeconds();
  const calcSnappedX = useSnapCtrlPixelCalc();

  const [translateX, setTranslateX] = useState(secondsToPixel(cycleStart));

  const initialValues = useRef({ x: 0, offsetStart: 0, offsetEnd: 0 });

  const cycleWidth = useMemo(() => secondsToPixel(cycleEnd) - secondsToPixel(cycleStart) , [secondsToPixel, cycleEnd, cycleStart]);

  useEffect(() => setTranslateX(secondsToPixel(cycleStart)), [cycleStart, secondsToPixel]);

  useEffect(() => {
    initialValues.current.offsetStart = secondsToPixel(cycleStart);
    initialValues.current.offsetEnd = secondsToPixel(cycleEnd);
  }, [secondsToPixel, cycleStart, cycleEnd]);

  const onMouseUp = useCallback(() => {
    setCycleStart(pixelToSeconds(translateX));
    setCycleEnd(pixelToSeconds(translateX + cycleWidth));
  }, [translateX, setCycleEnd, cycleWidth, pixelToSeconds, setCycleStart]);

  const onMouseMove = useCallback(e => {
    const x = initialValues.current.offsetStart + e.clientX - initialValues.current.x;

    setTranslateX(calcSnappedX(x < 1 ? 1 : x));
  }, [calcSnappedX, setTranslateX]);

  const movableTrigger = useMovable(onMouseMove, onMouseUp);

  const onMouseDown = useCallback(e => {
    movableTrigger();

    setIsCycleActive(true);

    initialValues.current.x = e.clientX;
  }, [initialValues, setIsCycleActive, movableTrigger]);

  return {onMouseDown, translateX};
}