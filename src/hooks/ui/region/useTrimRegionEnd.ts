import useMovable from '../useMovable';
import { useCallback, useContext, useRef, useState } from 'react';
import useRegionWidth from './useRegionWidth';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import useSnapCtrlPixelCalc from '../useSnapCtrlPixelCalc';
import usePixelToSeconds from '../usePixelToSeconds';
import useSecondsToPixel from '../useSecondsToPixel';

export default function useTrimRegionEnd() {
  const pixelToSeconds = usePixelToSeconds();
  const secondsToPixel = useSecondsToPixel();

  const regionId = useContext(RegionContext);
  const [trimEnd, setTrimEnd] = useRecoilState(regionStore.trimEnd(regionId));
  const trimStart = useRecoilValue(regionStore.trimStart(regionId));
  const initialWidth = useRegionWidth() - secondsToPixel(trimStart);
  const [width, setWidth] = useState(initialWidth);
  const [showPreview, setShowPreview] = useState(false);
  const initialX = useRef(0);
  const calcSnappedX = useSnapCtrlPixelCalc();

  const onMouseMove = useCallback((e) => {
    const x = e.clientX - initialX.current;

    let tempWidth = calcSnappedX(initialWidth + x);

    if (tempWidth > initialWidth) {
      tempWidth = initialWidth;
    }
    else if (tempWidth < 1) {
      tempWidth = 1;
    }

    setWidth(tempWidth);
    setShowPreview(true);
  }, [initialX, setWidth, setShowPreview, initialWidth, calcSnappedX]);

  const onMouseUp = useCallback(e => {
    setTrimEnd(pixelToSeconds(initialWidth - width));
    setShowPreview(false);
  }, [setTrimEnd, width, initialWidth, setShowPreview, pixelToSeconds]);

  const movableTrigger = useMovable(onMouseMove, onMouseUp);

  const onMouseDown = useCallback((e) => {
    initialX.current = e.clientX + secondsToPixel(trimEnd);

    movableTrigger();
  }, [initialX, trimEnd, secondsToPixel, movableTrigger]);

  return {onMouseDown, width, showPreview};
}