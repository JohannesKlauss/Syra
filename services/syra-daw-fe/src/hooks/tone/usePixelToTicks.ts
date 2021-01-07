import {useCallback, useContext} from "react";
import {ViewContext} from "../../providers/ViewContext";
import {useRecoilValue} from "recoil";
import {gridStore} from "../../recoil/gridStore";
import * as Tone from 'tone';

export default function usePixelToTicks() {
  const {view} = useContext(ViewContext);
  const zoomedQuarterPixelWidth = useRecoilValue(gridStore.zoomedQuarterPixelWidth(view));

  return useCallback((pixel: number) => {
    const quarter = pixel / zoomedQuarterPixelWidth;

    return Tone.Ticks(`${quarter}:0:0`);
  }, [zoomedQuarterPixelWidth]);
}