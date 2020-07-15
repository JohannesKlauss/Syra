import { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil/dist';
import { channelStore } from '../../recoil/channelStore';
import { ChannelType } from '../../types/Channel';
const uniqid = require('uniqid');

const CHANNEL_ID_PREFIX = 'channel-';

const createNewChannelId = () => uniqid(CHANNEL_ID_PREFIX);

export default function useChannelCreator() {
  const [nextChannelId, setNextChannelId] = useState(createNewChannelId());
  const setChannelIds = useSetRecoilState(channelStore.ids);
  const setChannelType = useSetRecoilState(channelStore.type(nextChannelId));

  return useCallback((type: ChannelType) => {
    setChannelIds(currVal => [...currVal, nextChannelId]);
    setChannelType(type);

    setNextChannelId(createNewChannelId());
  }, [setChannelIds, nextChannelId, setNextChannelId, setChannelType]);
}