import { useHotkeys } from 'react-hotkeys-hook';
import useDeleteChannel from '../../recoil/channel/useDeleteChannel';

export default function useDeleteChannelHotkey() {
  return useHotkeys('backspace', useDeleteChannel());
}