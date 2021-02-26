import { useRecoilCallback } from "recoil";
import { channelStore } from "../../../recoil/channelStore";
import { regionStore } from "../../../recoil/regionStore";
import { removeItemAtIndex } from "../../../utils/recoil";

export default function useChangeChannelOfRegion() {
  return useRecoilCallback(({snapshot, set}) => (regionId: string, shiftIndex: number) => {
    const channelIds = snapshot.getLoadable(channelStore.ids).contents as string[];
    const currentChannelId = snapshot.getLoadable(channelStore.findByRegionId(regionId)).contents as string;
    const currentIndex = channelIds.findIndex(channelId => channelId === currentChannelId);
    const newIndex = Math.max(0, Math.min(currentIndex + shiftIndex, channelIds.length - 1));
    const newChannelId = channelIds[newIndex];

    if (newChannelId !== currentChannelId) {
      set(regionStore.ids(currentChannelId), currVal => removeItemAtIndex(currVal, currVal.findIndex(val => val === regionId)));
      set(regionStore.ids(newChannelId), currVal => [...currVal, regionId]);
    }
  }, []);
}