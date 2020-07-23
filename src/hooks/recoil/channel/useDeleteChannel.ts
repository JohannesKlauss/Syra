import { useCallback } from 'react';
import { removeItemAtIndex } from '../../../utils/recoil';
import { useRecoilState } from 'recoil/dist';
import { channelStore } from '../../../recoil/channelStore';

export default function useDeleteChannel(channelId: string) {
  const [channelIds, setChannelIds] = useRecoilState(channelStore.ids);

  return useCallback(() => {
    const index = channelIds.findIndex(val => val === channelId);

    setChannelIds(currVal => removeItemAtIndex(currVal, index));
  }, [setChannelIds, channelIds, channelId])
}