import { useHotkeys } from 'react-hotkeys-hook';
import useDeleteChannel from '../../recoil/channel/useDeleteChannel';
import { channelStore } from '../../../recoil/channelStore';
import { useRecoilValue } from 'recoil/dist';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useContext } from 'react';
import useDeleteSelectedChannel from '../../recoil/channel/useDeleteSelectedChannel';

export default function useDeleteChannelHotkey() {
  const deleteChannel = useDeleteSelectedChannel();

  return useHotkeys('backspace', deleteChannel, [deleteChannel]);
}