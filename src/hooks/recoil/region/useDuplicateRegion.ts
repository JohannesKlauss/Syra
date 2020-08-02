import { useRecoilCallback, useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import { useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { createNewId } from '../../../utils/createNewId';
import { REGION_ID_PREFIX } from '../../../const/ids';

export default function useDuplicateRegion(originalRegionId: string) {
  const channelId = useContext(ChannelContext);

  const originalState = useRecoilValue(regionStore.regionState(originalRegionId));
  const audioBufferPointer = useRecoilValue(regionStore.audioBufferPointer(originalRegionId));

  return useRecoilCallback(({set}) => () => {
    const newRegionId = createNewId(REGION_ID_PREFIX);

    console.log('duplicate');
    console.log(originalRegionId, newRegionId);

    set(regionStore.audioBufferPointer(newRegionId), audioBufferPointer);
    set(regionStore.start(newRegionId), originalState.start);
    set(regionStore.isSolo(newRegionId), originalState.isSolo);
    set(regionStore.isMuted(newRegionId), originalState.isMuted);
    set(regionStore.trimStart(newRegionId), originalState.trimStart);
    set(regionStore.trimEnd(newRegionId), originalState.trimEnd);

    set(regionStore.ids(channelId), currVal => [...currVal, newRegionId]);

    return newRegionId;
  }, [originalRegionId, channelId]);
}