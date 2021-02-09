import {useCallback, useContext} from "react";
import {ViewContext} from "../../providers/ViewContext";
import {useRecoilValue} from "recoil";
import {gridStore} from "../../recoil/gridStore";

export default function useTicksToPixel() {
  const {view} = useContext(ViewContext);
  const pixelPerTick = useRecoilValue(gridStore.pixelPerTick(view));

  return useCallback((ticks: number) => ticks * pixelPerTick, [pixelPerTick]);
}