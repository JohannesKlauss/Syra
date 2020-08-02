import { useRecoilCallback } from 'recoil/dist';
import { createNewId } from '../../../utils/createNewId';
import { CHANNEL_ID_PREFIX } from '../../../const/ids';
import { channelStore } from '../../../recoil/channelStore';
import { ChannelType } from '../../../types/Channel';
import { channelColors } from '../../../utils/channelColors';

export default function useCreateChannel() {
  // The queueIndex state which file index of the dropped array is currently processed.
  return useRecoilCallback(({set, snapshot}) => async (type: ChannelType, queueIndex: number = 0, channelName?: string, channelId?: string) => {
    const newChannelId = channelId ?? createNewId(CHANNEL_ID_PREFIX);

    const channelIds = await snapshot.getLoadable(channelStore.ids).contents as string[];

    set(channelStore.type(newChannelId), type);
    set(channelStore.selectedId, newChannelId);
    set(channelStore.color(newChannelId), channelColors[(channelIds.length + queueIndex + 1) % channelColors.length])

    if (channelName) {
      set(channelStore.name(newChannelId), channelName);
    }

    set(channelStore.ids, currVal => [...currVal, newChannelId]);

    return newChannelId;
  }, []);
}