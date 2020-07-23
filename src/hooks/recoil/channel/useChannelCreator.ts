import { useCallback, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil/dist';
import { channelStore } from '../../../recoil/channelStore';
import { ChannelType } from '../../../types/Channel';
import { createNewId } from '../../../utils/createNewId';
import useRegionCreator from '../useRegionCreator';

const CHANNEL_ID_PREFIX = 'channel-';

export default function useChannelCreator() {
  const nextChannelId = useRef(createNewId(CHANNEL_ID_PREFIX));
  const setChannelIds = useSetRecoilState(channelStore.ids);
  const setSelectedChannelId = useSetRecoilState(channelStore.selectedId);

  // TODO: FIGURE OUT A WAY TO UPDATE THESE FAST ENOUGH. WHEN DROPPING IN MULTIPLE FILES WE END UP WITH THE SAME CHANNEL ID.
  const setChannelType = useSetRecoilState(channelStore.type(nextChannelId.current));
  const [channelColor, setChannelColor] = useRecoilState(channelStore.color(nextChannelId.current));
  const [channelName, setChannelName] = useRecoilState(channelStore.name(nextChannelId.current));
  const createRegion = useRegionCreator(nextChannelId.current);

  return useCallback((type: ChannelType, name?: string) => {
    setChannelIds(currVal => [...currVal, nextChannelId.current]);
    setChannelType(type);

    setChannelName(name ? name : channelName);
    setChannelColor(channelColor);

    setSelectedChannelId(nextChannelId.current);

    nextChannelId.current = createNewId(CHANNEL_ID_PREFIX);

    return createRegion;
  }, [setChannelIds, setChannelType, createRegion, setChannelName, channelColor, channelName, setChannelColor]);
}