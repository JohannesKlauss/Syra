import { useCallback, useContext, useRef, useState } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilState } from 'recoil/dist';
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
  const [start, setStart] = useRecoilState(regionStore.start(id));
  const [translateX, setTranslateX] = useState(secondsToPixel(start));
  const [showPreview, setShowPreview] = useState(false);
  const initialValues = useRef({ x: 0 });

  const duplicateRegion = useDuplicateRegion(id);
  const isPressed = useIsHotkeyPressed();

  const onMouseUp = useCallback(() => {
    if (isPressed('alt')) {
      // @ts-ignore
      duplicateRegion();
    }

    const pos = translateX + secondsToPixel(start);

    setStart(pos >= 0 ? pixelToSeconds(pos) : 0);
    setShowPreview(false);
  }, [isPressed, duplicateRegion, setStart, start, secondsToPixel, pixelToSeconds, translateX, setShowPreview]);

  const onMouseMove = useCallback((e) => {
    setTranslateX(calcSnappedX(e.clientX - initialValues.current.x));
    setShowPreview(true);
  }, [calcSnappedX, initialValues, setShowPreview, setTranslateX]);

  const movableTrigger = useMovable(onMouseMove, onMouseUp);

  const onMouseDown = useCallback((e) => {
    initialValues.current = {
      x: e.clientX,
    };

    setTranslateX(secondsToPixel(start));

    movableTrigger();
  }, [initialValues, start, secondsToPixel, setTranslateX, movableTrigger]);

  return {
    onMouseDown,
    translateX,
    showPreview,
  };
}