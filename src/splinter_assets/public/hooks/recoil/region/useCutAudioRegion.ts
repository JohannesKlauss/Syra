import { useRecoilCallback } from 'recoil/dist';
import { RegionState, regionStore } from '../../../recoil/regionStore';
import { useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import useDuplicateAudioRegion from './useDuplicateAudioRegion';

export default function useCutAudioRegion() {
  const channelId = useContext(ChannelContext);
  const duplicateRegion = useDuplicateAudioRegion();

  // cutAt is in seconds, not pixel!
  return useRecoilCallback(({set, snapshot}) => (originalRegionId: string, cutAt: number) => {
    const originalState = snapshot.getLoadable(regionStore.regionState(originalRegionId)).contents as RegionState;

    const slicePosition = originalState.trimStart + cutAt;
    const newRegionId = duplicateRegion(originalRegionId);

    set(regionStore.trimEnd(originalRegionId), slicePosition);
    set(regionStore.trimStart(newRegionId), slicePosition);

    return newRegionId;
  }, [channelId, duplicateRegion]);
}