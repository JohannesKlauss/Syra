import { useCallback, useContext, useRef, useState } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { regionStore } from '../../../recoil/regionStore';
import useDuplicateRegion from '../../recoil/region/useDuplicateRegion';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';
import useMovable from '../useMovable';

export default function useMoveRegion() {
  const id = useContext(RegionContext);
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);
  const isSnapActive = useRecoilValue(arrangeWindowStore.isSnapActive);
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const [start, setStart] = useRecoilState(regionStore.start(id));
  const [translateX, setTranslateX] = useState(start * pixelPerSecond);
  const [showPreview, setShowPreview] = useState(false);
  const initialValues = useRef({ x: 0 });

  const duplicateRegion = useDuplicateRegion(id);
  const isPressed = useIsHotkeyPressed();

  const onMouseUp = useCallback(() => {
    if (isPressed('alt')) {
      // @ts-ignore
      duplicateRegion();
    }

    const pos = translateX + start * pixelPerSecond;

    setStart(pos >= 0 ? pos / pixelPerSecond : 0);
    setShowPreview(false);
  }, [isPressed, duplicateRegion, setStart, start, pixelPerSecond, translateX, setShowPreview]);

  const onMouseMove = useCallback((e) => {
    const x = e.clientX - initialValues.current.x;
    const inverse = 1 / (snapWidth / 4);
    const snappedPos = isSnapActive && !isPressed('ctrl') ? Math.round(x * inverse) / inverse : x;

    setTranslateX(snappedPos);
    setShowPreview(true);
  }, [isSnapActive, initialValues, snapWidth, isPressed, setShowPreview]);

  const movableTrigger = useMovable(onMouseMove, onMouseUp);

  const onMouseDown = useCallback((e) => {
    initialValues.current = {
      x: e.clientX,
    };

    setTranslateX(start * pixelPerSecond);

    movableTrigger();
  }, [initialValues, start, pixelPerSecond, setTranslateX, movableTrigger]);

  return {
    onMouseDown,
    translateX,
    showPreview,
  };
}