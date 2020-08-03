import { useCallback } from 'react';
import { useRecoilState } from 'recoil/dist';
import { channelStore } from '../../../recoil/channelStore';
import { removeItemAtIndex } from '../../../utils/recoil';

export default function useDeleteSelectedChannel() {
  const [channelIds, setChannelIds] = useRecoilState(channelStore.ids);
  const [selectedChannelId, setSelectedChannelId] = useRecoilState(channelStore.selectedId);

  return useCallback(() => {
    if (selectedChannelId !== '') {
      const index = channelIds.findIndex(val => val === selectedChannelId);

      setChannelIds(currVal => {
        const newIds = removeItemAtIndex(currVal, index);

        if (newIds.length > 0) {
          setSelectedChannelId(newIds[0]);
        }

        return newIds;
      });
    }
  }, [selectedChannelId, setChannelIds, channelIds, setSelectedChannelId]);
}