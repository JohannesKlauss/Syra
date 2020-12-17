import { useRecoilValue } from "recoil";
import { useIsHotkeyPressed } from "react-hotkeys-hook";
import { useCallback, useContext } from "react";
import { ViewContext } from "../../providers/ViewContext";
import { gridStore } from "../../recoil/gridStore";

export default function useSnapPixelValue() {
  const { view } = useContext(ViewContext);
  const snapWidth = useRecoilValue(gridStore.snapValueWidthInPixels(view));
  const isSnapActive = useRecoilValue(gridStore.isSnapActive(view));
  const isPressed = useIsHotkeyPressed();

  const inverse = 1 / snapWidth;

  return useCallback((x: number) => {
    return isSnapActive && !isPressed('ctrl') ? Math.round(x * inverse) / inverse : x;
  }, [isSnapActive, isPressed, inverse]);
}