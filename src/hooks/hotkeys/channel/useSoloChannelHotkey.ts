import { useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useHotkeys } from 'react-hotkeys-hook';
import { channelStore } from '../../../recoil/channelStore';

export default function useSoloChannelHotkey() {
  const channelId = useContext(ChannelContext);
  const selectedChannelId = useRecoilValue(channelStore.selectedId);
  const setIsSolo = useSetRecoilState(channelStore.isSolo(channelId));

  useHotkeys('s', () => {
    if (channelId === selectedChannelId) {
      setIsSolo(currVal => !currVal);
    }
  }, [channelId, selectedChannelId]);
}