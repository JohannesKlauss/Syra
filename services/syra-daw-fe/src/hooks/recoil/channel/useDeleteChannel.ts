import { removeItemAtIndex } from '../../../utils/recoil';
import { useRecoilCallback } from 'recoil';
import { channelStore } from '../../../recoil/channelStore';
import { regionStore } from '../../../recoil/regionStore';
import { ChannelType } from '../../../types/Channel';

export default function useDeleteChannel() {
  return useRecoilCallback(({ set, snapshot }) => (channelId: string) => {
    const channelIds = snapshot.getLoadable(channelStore.ids).contents as string[];
    const selectedId = snapshot.getLoadable(channelStore.selectedId).contents as string;
    const type = snapshot.getLoadable(channelStore.type(channelId)).contents as ChannelType;

    if (channelId === selectedId && channelIds.length > 1) {
      const regions = snapshot.getLoadable(regionStore.ids(channelId)).contents as string[];

      if (type === ChannelType.AUDIO) {
        regions.forEach((regionId) => {
          set(regionStore.audioBufferPointer(regionId), '');
        });
      }

      set(regionStore.ids(channelId), []);

      const index = channelIds.findIndex((val) => val === channelId);

      set(channelStore.ids, (currVal) => removeItemAtIndex(currVal, index));
    }
  });
}