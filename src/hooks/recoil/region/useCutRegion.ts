import { useRecoilCallback, useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import { useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import useDuplicateRegion from './useDuplicateRegion';

export default function useCutRegion(originalRegionId: string) {
  const channelId = useContext(ChannelContext);
  const duplicateRegion = useDuplicateRegion(originalRegionId);

  const originalState = useRecoilValue(regionStore.regionState(originalRegionId));

  return useRecoilCallback(({set}) => (cutAt: number) => {
    set(regionStore.trimEnd(originalRegionId), (originalState.audioBuffer?.duration ?? 0) - (originalState.trimStart + cutAt));

    const newRegionId = duplicateRegion();

    set(regionStore.trimStart(newRegionId), originalState.trimStart + cutAt);

    return newRegionId;
  }, [originalRegionId, channelId, duplicateRegion]);
}