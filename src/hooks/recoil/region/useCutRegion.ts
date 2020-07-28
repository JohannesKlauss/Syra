import { useSetRecoilState } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import { useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';

export default function useCutRegion(originalRegionId: string) {
  const channelId = useContext(ChannelContext);
  return useSetRecoilState(regionStore.cutRegionById({ originalRegionId, channelId }));
}