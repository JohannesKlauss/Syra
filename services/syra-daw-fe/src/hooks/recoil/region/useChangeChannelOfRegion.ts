import { useRecoilCallback } from "recoil";
import { channelStore } from "../../../recoil/channelStore";
import { regionStore } from "../../../recoil/regionStore";
import { removeItemAtIndex } from "../../../utils/recoil";

export default function useChangeChannelOfRegion() {
  return useRecoilCallback(({snapshot, set}) => (regionId: string, shiftIndex: number) => {
    const channelIds = snapshot.getLoadable(channelStore.ids).getValue();
    const currentChannelId = snapshot.getLoadable(channelStore.findByRegionId(regionId)).getValue();
    const currentIndex = channelIds.findIndex(channelId => channelId === currentChannelId);
    const newIndex = Math.max(0, Math.min(currentIndex + shiftIndex, channelIds.length - 1));
    const newChannelId = channelIds[newIndex];

    const currentChannelType = snapshot.getLoadable(channelStore.type(currentChannelId)).getValue();
    const newChannelType = snapshot.getLoadable(channelStore.type(newChannelId)).getValue();

    if (newChannelId !== currentChannelId && currentChannelType === newChannelType) {
      set(regionStore.ids(currentChannelId), currVal => removeItemAtIndex(currVal, currVal.findIndex(val => val === regionId)));
      set(regionStore.ids(newChannelId), currVal => [...currVal, regionId]);

      return true;
    }

    return false;
  }, []);
}