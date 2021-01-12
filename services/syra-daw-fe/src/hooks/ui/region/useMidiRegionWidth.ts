import {useContext} from "react";
import {RegionContext} from "../../../providers/RegionContext";
import {useRecoilValue} from "recoil";
import {regionStore} from "../../../recoil/regionStore";
import useTicksToPixel from "../../tone/useTicksToPixel";

export default function useMidiRegionWidth() {
  const id = useContext(RegionContext);
  const duration = useRecoilValue(regionStore.duration(id));
  const offset = useRecoilValue(regionStore.offset(id));
  const ticksToPixel = useTicksToPixel();

  return ticksToPixel(duration - offset);
}