import { useCallback, useContext, useRef, useState } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilState, useSetRecoilState } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import useRegionWidth from './useRegionWidth';
import useMovable from '../useMovable';
import usePixelToSeconds from '../usePixelToSeconds';
import useSecondsToPixel from '../useSecondsToPixel';

export default function useTrimRegionStart() {
  const regionId = useContext(RegionContext);
  const setStart = useSetRecoilState(regionStore.start(regionId));
  const [trimStart, setTrimStart] = useRecoilState(regionStore.trimStart(regionId));
  const initialWidth = useRegionWidth();
  const [width, setWidth] = useState(initialWidth);
  const [translateX, setTranslateX] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const initialX = useRef(0);
  const pixelToSeconds = usePixelToSeconds();
  const secondsToPixel = useSecondsToPixel();

  const onMouseMove = useCallback((e) => {
    const x = e.clientX - initialX.current;

    let tempWidth = initialWidth + x;
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
    setTranslateX(tempTranslateX);
    setShowPreview(true);
  }, [initialX, setWidth, setShowPreview, initialWidth]);

  const onMouseUp = useCallback(e => {
    console.log('set start trim', pixelToSeconds(translateX));

    setTrimStart(pixelToSeconds(translateX));
    setStart(currVal => currVal + pixelToSeconds(translateX));
    setShowPreview(false);
  }, [setShowPreview, setTrimStart, translateX, setStart, pixelToSeconds]);

  const movableTrigger = useMovable(onMouseMove, onMouseUp);

  const onMouseDown = useCallback((e) => {
    initialX.current = e.clientX + secondsToPixel(trimStart);
    setWidth(initialWidth - secondsToPixel(trimStart));

    movableTrigger();
  }, [initialX, initialWidth, trimStart, movableTrigger, secondsToPixel, setWidth]);

  return {onMouseDown, width, showPreview, translateX};
}