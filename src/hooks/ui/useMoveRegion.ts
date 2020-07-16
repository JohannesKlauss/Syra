import { useCallback, useContext, useRef, useState } from 'react';
import { RegionContext } from '../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import { regionStore } from '../../recoil/regionStore';

export default function useMoveRegion(isSelected: boolean) {
  const id = useContext(RegionContext);
  const [isDraggingActive, setIsDraggingActive] = useState(false);
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);
  const isSnapActive = useRecoilValue(arrangeWindowStore.isSnapActive);
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const [start, setStart] = useRecoilState(regionStore.start(id));
  const initialValues = useRef({ x: 0, offset: start });

  const onMouseDown = useCallback((e) => {
    initialValues.current = {
      x: e.clientX,
      offset: start * pixelPerSecond,
    };
    setIsDraggingActive(isSelected);
  }, [initialValues, setIsDraggingActive, isSelected, start, pixelPerSecond]);

  const onMouseUpLeave = useCallback(() => setIsDraggingActive(false), [setIsDraggingActive]);

  const onMouseMove = useCallback((e) => {
    if (isDraggingActive) {
      const x = initialValues.current.offset + e.clientX - initialValues.current.x;
      const inverse = 1 / snapWidth;
      const snappedPos = isSnapActive ? Math.round(x * inverse) / inverse : x;

      setStart(snappedPos >= 0 ? snappedPos / pixelPerSecond : 0);
    }
  }, [isDraggingActive,  setStart, isSnapActive, pixelPerSecond, initialValues, snapWidth]);

  return {
    onMouseDown,
    onMouseMove,
    onMouseUpLeave,
  };
}