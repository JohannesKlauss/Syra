import { removeItemAtIndex } from '../../../utils/recoil';
import { useCallback, useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilState } from 'recoil/dist';
import { channelStore } from '../../../recoil/channelStore';

export default function useDeleteChannel() {
  const channelId = useContext(ChannelContext);
  const [channelIds, setChannelIds] = useRecoilState(channelStore.ids);
  const [selectedChannelId, setSelectedChannelId] = useRecoilState(channelStore.selectedId);

  return useCallback(() => {
    if (selectedChannelId === channelId) {
      console.log('delete', channelId);

      const index = channelIds.findIndex(val => val === channelId);

      setChannelIds(currVal => {
        const newIds = removeItemAtIndex(currVal, index);

        if (newIds.length > 0) {
          setSelectedChannelId(newIds[0]);
        }

        return newIds;
      });
    }
  }, [selectedChannelId, channelId, setChannelIds, channelIds, setSelectedChannelId]);
}