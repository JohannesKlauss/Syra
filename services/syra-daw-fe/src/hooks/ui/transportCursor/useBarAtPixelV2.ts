import { useRecoilCallback, useRecoilValue } from "recoil";
import { transportStore } from "../../../recoil/transportStore";
import { Bar } from "../../../types/Ui";
import { gridStore } from "../../../recoil/gridStore";
import { ViewContext } from "../../../providers/ViewContext";
import { useContext } from "react";

export default function useBarAtPixelV2() {
  const view = useContext(ViewContext);
  const zoomedQuarterPixelWidth = useRecoilValue(gridStore.zoomedQuarterPixelWidth(view));

  return useRecoilCallback(({snapshot}) => (x: number) => {
    return snapshot.getLoadable(transportStore.barAtQuarter(x / zoomedQuarterPixelWidth)).contents as Bar | undefined;
  }, [zoomedQuarterPixelWidth]);
}