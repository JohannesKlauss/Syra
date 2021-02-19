import { removeItemAtIndex } from '../../../utils/recoil';
import { useRecoilCallback } from 'recoil';
import { channelStore } from '../../../recoil/channelStore';
import { regionStore } from '../../../recoil/regionStore';

export default function useDeleteChannel() {
  return useRecoilCallback(({set, snapshot, reset}) => (channelId: string) => {
    const channelIds = snapshot.getLoadable(channelStore.ids).contents as string[];
    const selectedId = snapshot.getLoadable(channelStore.selectedId).contents as string;

    if (channelId === selectedId && channelIds.length > 1) {
      const regions = snapshot.getLoadable(regionStore.ids(channelId)).contents as string[];

      regions.forEach(regionId => {
        reset(regionStore.audioBufferPointer(regionId));
      });

      reset(regionStore.ids(channelId));

      const index = channelIds.findIndex(val => val === channelId);

      set(channelStore.ids, currVal => removeItemAtIndex(currVal, index));
    }
  });
}