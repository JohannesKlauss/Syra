import { useSetRecoilState } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import { useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';

export default function useDuplicateRegion(originalRegionId: string) {
  const channelId = useContext(ChannelContext);
  return useSetRecoilState(regionStore.duplicateRegionFromId({ originalRegionId, channelId }));
}