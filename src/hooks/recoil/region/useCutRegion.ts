import { useRecoilCallback, useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import { useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import useDuplicateRegion from './useDuplicateRegion';

export default function useCutRegion(originalRegionId: string) {
  const channelId = useContext(ChannelContext);
  const duplicateRegion = useDuplicateRegion(originalRegionId);

  const originalState = useRecoilValue(regionStore.regionState(originalRegionId));

  // cutAt is in seconds, not pixel!
  return useRecoilCallback(({set}) => (cutAt: number) => {
    const slicePosition = originalState.trimStart + cutAt;
    const newRegionId = duplicateRegion();

    set(regionStore.trimEnd(originalRegionId), (originalState.audioBuffer?.duration ?? 0) - slicePosition);
    set(regionStore.trimStart(newRegionId), slicePosition);

    return newRegionId;
  }, [originalRegionId, channelId, duplicateRegion, originalState]);
}