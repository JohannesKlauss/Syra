import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';
import { useCallback } from 'react';

export default function useSnapCtrlPixelCalc() {
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const isSnapActive = useRecoilValue(arrangeWindowStore.isSnapActive);
  const isPressed = useIsHotkeyPressed();

  const inverse = 1 / (snapWidth / 4);

  return useCallback(x =>
    isSnapActive && !isPressed('ctrl') ? Math.round(x * inverse) / inverse : x
    , [isSnapActive, isPressed, inverse]);
}