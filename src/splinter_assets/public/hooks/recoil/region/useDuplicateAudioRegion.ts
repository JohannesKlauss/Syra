import { useRecoilCallback } from 'recoil/dist';
import { RegionState, regionStore } from '../../../recoil/regionStore';
import { useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { createNewId } from '../../../utils/createNewId';
import { REGION_ID_PREFIX } from '../../../const/ids';

export default function useDuplicateAudioRegion() {
  const channelId = useContext(ChannelContext);

  return useRecoilCallback(({set, snapshot}) => (originalRegionId: string) => {
    const originalState = snapshot.getLoadable(regionStore.regionState(originalRegionId)).contents as RegionState;
    const audioBufferPointer = snapshot.getLoadable(regionStore.audioBufferPointer(originalRegionId)).contents as string;

    const newRegionId = createNewId(REGION_ID_PREFIX);

    set(regionStore.audioBufferPointer(newRegionId), audioBufferPointer);
    set(regionStore.start(newRegionId), originalState.start);
    set(regionStore.isSolo(newRegionId), originalState.isSolo);
    set(regionStore.isMuted(newRegionId), originalState.isMuted);
    set(regionStore.trimStart(newRegionId), originalState.trimStart);
    set(regionStore.trimEnd(newRegionId), originalState.trimEnd);
    set(regionStore.name(newRegionId), originalState.name + '.1');

    set(regionStore.ids(channelId), currVal => [...currVal, newRegionId]);

    return newRegionId;
  }, [channelId]);
}