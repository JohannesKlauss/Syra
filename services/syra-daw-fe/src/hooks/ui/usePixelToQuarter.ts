import { useRecoilValue } from 'recoil';
import { useCallback, useContext } from "react";
import { gridStore } from "../../recoil/gridStore";
import { ViewContext } from "../../providers/ViewContext";

export default function usePixelToQuarter() {
  const { view } = useContext(ViewContext);
  const zoomedQuarterPixelWidth = useRecoilValue(gridStore.zoomedQuarterPixelWidth(view));

  return useCallback((pixel: number) => pixel / zoomedQuarterPixelWidth, [zoomedQuarterPixelWidth]);
}