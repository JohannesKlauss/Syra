import { useRecoilCallback } from 'recoil';
import { regionStore } from '../../../recoil/regionStore';

export default function useMuteSelectedRegions() {
  return useRecoilCallback(({set, snapshot}) => () => {
    const selectedRegionIds = snapshot.getLoadable(regionStore.selectedIds).contents as string[];

    if (selectedRegionIds.length > 0) {
      const firstRegionMutedState = snapshot.getLoadable(regionStore.isMuted(selectedRegionIds[0])).contents as boolean;

      selectedRegionIds.forEach(regionId => {
        set(regionStore.isMuted(regionId), !firstRegionMutedState);
      });
    }
  }, []);
}