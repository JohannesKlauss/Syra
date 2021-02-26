import {useRecoilCallback} from "recoil";
import {RegionContext} from "../../../providers/RegionContext";
import {useContext} from "react";
import {regionStore} from "../../../recoil/regionStore";

export default function useUpdateRegionPosition() {
  const regionId = useContext(RegionContext);

  return useRecoilCallback(({set, snapshot}) => (start: number, duration: number, offset: number) => {
    set(regionStore.start(regionId), start);
    set(regionStore.duration(regionId), duration);
    set(regionStore.offset(regionId), offset);
  }, [regionId]);
}