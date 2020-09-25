import { useRecoilState, useSetRecoilState } from 'recoil';
import { transportStore } from '../../../recoil/transportStore';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useMovable from '../useMovable';
import useSnapCtrlPixelCalc from '../useSnapCtrlPixelCalc';
import useQuarterToPixel from '../useQuarterToPixel';
import usePixelToQuarter from '../usePixelToQuarter';

export default function useMoveCycleBar() {
  const [cycleStart, setCycleStart] = useRecoilState(transportStore.cycleStart);
  const [cycleEnd, setCycleEnd] = useRecoilState(transportStore.cycleEnd);
  const setIsCycleActive = useSetRecoilState(transportStore.isCycleActive);
  const quarterToPixel = useQuarterToPixel();
  const pixelToQuarter = usePixelToQuarter();
  const calcSnappedX = useSnapCtrlPixelCalc();

  const [translateX, setTranslateX] = useState(quarterToPixel(cycleStart));

  const initialValues = useRef({ x: 0, offsetStart: 0, offsetEnd: 0 });

  const cycleWidth = useMemo(() => quarterToPixel(cycleEnd) - quarterToPixel(cycleStart), [quarterToPixel, cycleEnd, cycleStart]);

  useEffect(() => setTranslateX(quarterToPixel(cycleStart)), [cycleStart, quarterToPixel]);

  useEffect(() => {
    initialValues.current.offsetStart = quarterToPixel(cycleStart);
    initialValues.current.offsetEnd = quarterToPixel(cycleEnd);
  }, [quarterToPixel, cycleStart, cycleEnd]);

  const onMouseUp = useCallback(() => {
    setCycleStart(pixelToQuarter(translateX));
    setCycleEnd(pixelToQuarter(translateX + cycleWidth));
  }, [translateX, setCycleEnd, cycleWidth, pixelToQuarter, setCycleStart]);

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

  return { onMouseDown, translateX };
}