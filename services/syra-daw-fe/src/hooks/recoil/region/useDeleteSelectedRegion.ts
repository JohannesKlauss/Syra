import { useRecoilState } from "recoil";
import { useCallback } from "react";
import { regionStore } from "../../../recoil/regionStore";
import useDeleteRegion from "./useDeleteRegion";
import { removeItemAtIndex } from "../../../utils/recoil";

export default function useDeleteSelectedRegions() {
  const [selectedRegionIds, setSelectedRegionIds] = useRecoilState(regionStore.selectedIds);
  const deleteRegion = useDeleteRegion();

  return useCallback(() => {
    const tmpCopy = selectedRegionIds.slice();

    tmpCopy.map((regionId) => {
      deleteRegion(regionId);

      setSelectedRegionIds(currVal => removeItemAtIndex(currVal, currVal.findIndex(val => val === regionId)))
    });
  }, [selectedRegionIds, deleteRegion, setSelectedRegionIds]);
}