import { useCallback, useContext, useRef, useState } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import useDuplicateRegion from '../../recoil/region/useDuplicateRegion';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';
import useMovable from '../useMovable';
import usePixelToSeconds from '../usePixelToSeconds';
import useSecondsToPixel from '../useSecondsToPixel';
import useSnapCtrlPixelCalc from '../useSnapCtrlPixelCalc';

export default function useMoveRegion() {
  const pixelToSeconds = usePixelToSeconds();
  const secondsToPixel = useSecondsToPixel();
  const calcSnappedX = useSnapCtrlPixelCalc();

  const id = useContext(RegionContext);
  const trimStart = useRecoilValue(regionStore.trimStart(id));
  const [start, setStart] = useRecoilState(regionStore.start(id));
  const [translateX, setTranslateX] = useState(secondsToPixel(start));
  const [showPreview, setShowPreview] = useState(false);
  const initialValues = useRef(0);

  const duplicateRegion = useDuplicateRegion(id);
  const isPressed = useIsHotkeyPressed();

  const onMouseUp = useCallback((e) => {
    if (e.clientX === initialValues.current) {
      return;
    }

    if (isPressed('alt')) {
      // @ts-ignore
      duplicateRegion();
    }

    const pos = Math.max(translateX + secondsToPixel(start), -secondsToPixel(trimStart));

    setStart(pixelToSeconds(pos));
    setShowPreview(false);
  }, [isPressed, duplicateRegion, setStart, start, secondsToPixel, pixelToSeconds, translateX, trimStart, setShowPreview, initialValues]);

  const onMouseMove = useCallback((e) => {
    const x = e.clientX - initialValues.current;

    setTranslateX(calcSnappedX(x));
    setShowPreview(true);
  }, [calcSnappedX, initialValues, setShowPreview, setTranslateX]);

  const movableTrigger = useMovable(onMouseMove, onMouseUp);

  const onMouseDown = useCallback((e) => {
    initialValues.current = e.clientX;

    setTranslateX(secondsToPixel(start));

    movableTrigger();
  }, [initialValues, start, secondsToPixel, setTranslateX, movableTrigger]);

  return {
    onMouseDown,
    translateX,
    showPreview,
  };
}