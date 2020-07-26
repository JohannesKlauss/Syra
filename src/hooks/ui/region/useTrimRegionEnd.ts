import useMovable from '../useMovable';
import { useCallback, useContext, useRef, useState } from 'react';
import useRegionWidth from './useRegionWidth';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';

export default function useTrimRegionEnd() {
  const regionId = useContext(RegionContext);
  const [trimEnd, setTrimEnd] = useRecoilState(regionStore.trimEnd(regionId));
  const initialWidth = useRegionWidth();
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);
  const [width, setWidth] = useState(initialWidth);
  const [showPreview, setShowPreview] = useState(false);
  const initialX = useRef(0);

  const onMouseMove = useCallback((e) => {
    const x = e.clientX - initialX.current;

    let tempWidth = initialWidth + x;

    if (tempWidth > initialWidth) {
      tempWidth = initialWidth;
    }
    else if (tempWidth < 1) {
      tempWidth = 1;
    }

    setWidth(tempWidth);
    setShowPreview(true);
  }, [initialX, setWidth, setShowPreview, initialWidth]);

  const onMouseUp = useCallback(e => {
    setTrimEnd((initialWidth - width) / pixelPerSecond);
    setShowPreview(false);
  }, [setTrimEnd, pixelPerSecond, width, initialWidth, setShowPreview]);

  const movableTrigger = useMovable(onMouseMove, onMouseUp);

  const onMouseDown = useCallback((e) => {
    initialX.current = e.clientX + trimEnd * pixelPerSecond;

    movableTrigger();
  }, [initialX, trimEnd, pixelPerSecond, movableTrigger]);

  return {onMouseDown, width, showPreview};
}