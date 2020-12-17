import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import { useRecoilValue } from 'recoil';
import { useCallback, useContext } from "react";
import { gridStore } from "../../recoil/gridStore";
import { ViewContext } from "../../providers/ViewContext";

export default function useQuarterToPixel() {
  const { view } = useContext(ViewContext);
  const zoomedQuarterPixelWidth = useRecoilValue(gridStore.zoomedQuarterPixelWidth(view));

  return useCallback((quarter: number) => quarter * zoomedQuarterPixelWidth, [zoomedQuarterPixelWidth]);
}