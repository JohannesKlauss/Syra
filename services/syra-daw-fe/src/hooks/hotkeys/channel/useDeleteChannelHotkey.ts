import { useHotkeys } from 'react-hotkeys-hook';
import useDeleteSelectedChannel from '../../recoil/channel/useDeleteSelectedChannel';

export default function useDeleteChannelHotkey() {
  const deleteChannel = useDeleteSelectedChannel();

  return useHotkeys('backspace', deleteChannel, [deleteChannel]);
}