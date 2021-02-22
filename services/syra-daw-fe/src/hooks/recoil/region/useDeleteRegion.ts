import { useRecoilCallback } from "recoil";
import { removeItemAtIndex } from '../../../utils/recoil';
import { channelStore } from "../../../recoil/channelStore";
import { regionStore } from "../../../recoil/regionStore";

export default function useDeleteRegion() {
  return useRecoilCallback(({snapshot, set}) => (regionId: string) => {
    const channelId = snapshot.getLoadable(channelStore.findByRegionId(regionId)).contents as string;
    const regionIds = snapshot.getLoadable(regionStore.ids(channelId)).contents as string[];
    const index = regionIds.findIndex(val => val === regionId);

    set(regionStore.ids(channelId), currVal => removeItemAtIndex(currVal, index));
  }, []);
}