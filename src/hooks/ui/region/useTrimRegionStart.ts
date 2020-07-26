import { useCallback, useContext, useRef, useState } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import useRegionWidth from './useRegionWidth';
import useMovable from '../useMovable';
import usePixelToSeconds from '../usePixelToSeconds';
import useSecondsToPixel from '../useSecondsToPixel';
import useSnapCtrlPixelCalc from '../useSnapCtrlPixelCalc';

export default function useTrimRegionStart() {
  const pixelToSeconds = usePixelToSeconds();
  const secondsToPixel = useSecondsToPixel();
  const calcSnappedX = useSnapCtrlPixelCalc();

  const regionId = useContext(RegionContext);
  const [trimStart, setTrimStart] = useRecoilState(regionStore.trimStart(regionId));
  const start = useRecoilValue(regionStore.start(regionId));
  const trimEnd = useRecoilValue(regionStore.trimEnd(regionId));
  const initialWidth = useRegionWidth() - secondsToPixel(trimEnd);
  const [width, setWidth] = useState(initialWidth - secondsToPixel(trimStart));
  const [translateX, setTranslateX] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const initialX = useRef(0);

  const onMouseMove = useCallback((e) => {
    const x = e.clientX - initialX.current;

    let tempWidth = initialWidth - x;
    let tempTranslateX = x;

    if (tempWidth > initialWidth) {
      tempWidth = initialWidth;
    }
    else if (tempWidth < 1) {
      tempWidth = 1;
    }

    if (tempTranslateX < 1) {
      tempTranslateX = 1;
    }
    else if (tempTranslateX > initialWidth) {
      tempTranslateX = initialWidth;
    }

    setWidth(tempWidth);
    setTranslateX(calcSnappedX(tempTranslateX));
    setShowPreview(true);
  }, [initialX, setWidth, setShowPreview, initialWidth, calcSnappedX]);

  const onMouseUp = useCallback(e => {
    let newVal = Math.max(0, pixelToSeconds(translateX)); // The trim itself has to be minimum 0 relative to the region start.

    if (newVal + start < 0) { // If the region is already trimmed the start val could be negative.
      newVal = -start; // In that case we set the newVal to be exactly -start, because the User tried to drag the trimStart out of bounds.
    }

    setTrimStart(newVal);
    setShowPreview(false);
  }, [setShowPreview, setTrimStart, start, translateX, pixelToSeconds]);

  const movableTrigger = useMovable(onMouseMove, onMouseUp);

  const onMouseDown = useCallback((e) => {
    initialX.current = e.clientX - secondsToPixel(trimStart);
    setWidth(initialWidth);

    movableTrigger();
  }, [initialX, trimStart, movableTrigger, initialWidth, secondsToPixel, setWidth]);

  return {onMouseDown, width, showPreview, translateX};
}