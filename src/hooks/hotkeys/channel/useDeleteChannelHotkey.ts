import { useHotkeys } from 'react-hotkeys-hook';
import useDeleteChannel from '../../recoil/channel/useDeleteChannel';
import { channelStore } from '../../../recoil/channelStore';
import { useRecoilValue } from 'recoil/dist';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useContext } from 'react';

export default function useDeleteChannelHotkey() {
  const channelId = useContext(ChannelContext);
  const deleteChannel = useDeleteChannel();
  const selectedId = useRecoilValue(channelStore.selectedId);

  return useHotkeys('backspace', () => {
    if (channelId === selectedId) {
      deleteChannel();
    }
  }, [deleteChannel, selectedId, channelId]);
}