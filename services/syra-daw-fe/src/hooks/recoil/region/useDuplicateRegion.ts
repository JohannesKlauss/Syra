import { useRecoilCallback } from 'recoil';
import { RegionState, regionStore } from '../../../recoil/regionStore';
import { useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { createNewId } from '../../../utils/createNewId';
import { REGION_ID_PREFIX } from '../../../const/ids';
import { cloneDeep } from 'lodash';

export default function useDuplicateRegion() {
  const channelId = useContext(ChannelContext);

  return useRecoilCallback(({set, snapshot}) => (originalRegionId: string, newStart: number) => {
    const originalState = snapshot.getLoadable(regionStore.regionState(originalRegionId)).contents as RegionState;
    const audioBufferPointer = snapshot.getLoadable(regionStore.audioBufferPointer(originalRegionId)).contents as string;

    const newRegionId = createNewId(REGION_ID_PREFIX);

    set(regionStore.audioBufferPointer(newRegionId), audioBufferPointer);
    set(regionStore.start(newRegionId), newStart);
    set(regionStore.duration(newRegionId), originalState.duration);
    set(regionStore.offset(newRegionId), originalState.offset);
    set(regionStore.isMidi(newRegionId), originalState.isMidi);
    set(regionStore.midiNotes(newRegionId), cloneDeep(originalState.midiNotes));
    set(regionStore.start(newRegionId), originalState.start);
    set(regionStore.isSolo(newRegionId), originalState.isSolo);
    set(regionStore.isMuted(newRegionId), originalState.isMuted);
    set(regionStore.name(newRegionId), originalState.name);

    set(regionStore.ids(channelId), currVal => [...currVal, newRegionId]);

    return newRegionId;
  }, [channelId]);
}