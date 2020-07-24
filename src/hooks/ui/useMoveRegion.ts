import { useCallback, useContext, useRef, useState } from 'react';
import { RegionContext } from '../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import { regionStore } from '../../recoil/regionStore';
import useDuplicateRegion from '../recoil/region/useDuplicateRegion';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';

export default function useMoveRegion(isSelected: boolean) {
  const id = useContext(RegionContext);
  const [isDraggingActive, setIsDraggingActive] = useState(false);
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);
  const isSnapActive = useRecoilValue(arrangeWindowStore.isSnapActive);
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const [start, setStart] = useRecoilState(regionStore.start(id));
  const initialValues = useRef({ x: 0, offsetStart: start });
  const duplicateRegion = useDuplicateRegion(id);
  const isPressed = useIsHotkeyPressed();

  const onMouseDown = useCallback((e) => {
    initialValues.current = {
      x: e.clientX,
      offsetStart: start * pixelPerSecond,
    };

    if (isSelected && isPressed('alt')) {
      // @ts-ignore
      duplicateRegion(null);
    }
    else {
      setIsDraggingActive(isSelected);
    }
  }, [initialValues, setIsDraggingActive, isSelected, start, pixelPerSecond]);

  const onMouseUpLeave = useCallback(() => setIsDraggingActive(false), [setIsDraggingActive]);

  const onMouseMove = useCallback((e) => {
    if (isDraggingActive) {
      const x = initialValues.current.offsetStart + e.clientX - initialValues.current.x;
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