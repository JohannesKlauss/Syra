import { difference } from 'lodash';
import { useRecoilCallback } from "recoil";
import { regionStore } from "../../../recoil/regionStore";
import { removeItemAtIndex } from "../../../utils/recoil";

export default function useUpdateSelectedRegions() {
  return useRecoilCallback(({snapshot, set}) => (regionIds: string[], isExclusiveSelect: boolean = false, toggle: boolean = true, selectStateValue?: boolean) => {
    const selectedRegionIds = snapshot.getLoadable(regionStore.selectedIds).contents as string[];

    let newSelectedRegionIds = [...selectedRegionIds];

    regionIds.forEach(regionId => {
      const i = newSelectedRegionIds.findIndex(val => val === regionId);

      if (i < 0) {
        // region isn't currently selected
        if (toggle || selectStateValue) {
          newSelectedRegionIds.push(regionId);
        }
      } else if (toggle || !selectStateValue) {
        newSelectedRegionIds = removeItemAtIndex(newSelectedRegionIds, i)
      }
    });

    if (isExclusiveSelect) {
      set(regionStore.selectedIds, difference(newSelectedRegionIds, selectedRegionIds));
    } else {
      set(regionStore.selectedIds, newSelectedRegionIds);
    }
  }, []);
}