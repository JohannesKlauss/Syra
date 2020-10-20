import { useHotkeys } from 'react-hotkeys-hook';
import { useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { channelStore } from '../../../recoil/channelStore';

export default function useMuteChannelHotkey() {
  const channelId = useContext(ChannelContext);
  const selectedChannelId = useRecoilValue(channelStore.selectedId);
  const setIsMuted = useSetRecoilState(channelStore.isMuted(channelId));

  useHotkeys('m', () => {
    if (channelId === selectedChannelId) {
      setIsMuted(currVal => !currVal);
    }
  }, [channelId, selectedChannelId]);
}