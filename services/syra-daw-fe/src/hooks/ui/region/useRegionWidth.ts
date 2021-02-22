import {useContext} from "react";
import {RegionContext} from "../../../providers/RegionContext";
import {useRecoilValue} from "recoil";
import {regionStore} from "../../../recoil/regionStore";
import useTicksToPixel from "../../tone/useTicksToPixel";

export default function useRegionWidth(regionId?: string) {
  const id = useContext(RegionContext);
  const duration = useRecoilValue(regionStore.duration(regionId ?? id));
  const ticksToPixel = useTicksToPixel();

  return ticksToPixel(duration);
}