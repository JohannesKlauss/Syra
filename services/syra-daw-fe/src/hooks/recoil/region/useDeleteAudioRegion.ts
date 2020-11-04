import { useRecoilState } from 'recoil';
import { regionStore } from '../../../recoil/regionStore';
import { useCallback, useContext } from 'react';
import { removeItemAtIndex } from '../../../utils/recoil';
import { ChannelContext } from '../../../providers/ChannelContext';

export default function useDeleteAudioRegion(regionId: string) {
  const channelId = useContext(ChannelContext);
  const [regionIds, setRegionIds] = useRecoilState(regionStore.ids(channelId));

  return useCallback(() => {
    const index = regionIds.findIndex(val => val === regionId);

    setRegionIds(currVal => removeItemAtIndex(currVal, index));
  }, [regionId, setRegionIds, regionIds]);
}