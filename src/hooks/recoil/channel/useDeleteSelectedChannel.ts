import { useCallback } from 'react';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../../recoil/channelStore';
import useDeleteChannel from './useDeleteChannel';

export default function useDeleteSelectedChannel() {
  const selectedChannelId = useRecoilValue(channelStore.selectedId);
  const deleteChannel = useDeleteChannel();

  return useCallback(() => deleteChannel(selectedChannelId), [selectedChannelId, deleteChannel]);
}