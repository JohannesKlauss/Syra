import useDeltaTracker from './useDeltaTracker';
import { useCallback, useContext, useEffect, useState } from 'react';
import { arrangeWindowStore } from '../../../../recoil/arrangeWindowStore';
import { useRecoilCallback, useRecoilValue } from 'recoil/dist';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { channelStore } from '../../../../recoil/channelStore';
import { regionStore } from '../../../../recoil/regionStore';
import { removeItemAtIndex } from '../../../../utils/recoil';
import { RegionContext } from '../../../../providers/RegionContext';

export default function useTrackSwitch() {
  const channelId = useContext(ChannelContext);
  const regionId = useContext(RegionContext);
  const ids = useRecoilValue(channelStore.ids);
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);

  const index = ids.findIndex(id => id === channelId);

  const [initialTop, setInitialTop] = useState(index * trackHeight);
  const [cssTop, setCssTop] = useState(0);

  useEffect(() => {
    setInitialTop(index * trackHeight);
  }, [index, setInitialTop, trackHeight]);

  const switchChannel = useRecoilCallback(({set, snapshot}) => (newChannelIndex: number) => {
    const newChannelId = ids[newChannelIndex];
    const oldChannelRegions = snapshot.getLoadable(regionStore.ids(channelId)).contents as string[];

    set(regionStore.ids(newChannelId), currVal => [...currVal, regionId]);

    setTimeout(() => {
      set(regionStore.ids(channelId), removeItemAtIndex(oldChannelRegions, oldChannelRegions.findIndex(id => id === regionId)));
    }, 200);
  }, [ids, channelId, regionId]);

  const onChange = useCallback(delta => {
    const newChannelIndex = Math.round((initialTop + delta) / trackHeight);

    if (newChannelIndex >= 0 && newChannelIndex < ids.length && newChannelIndex !== index) {
      setCssTop(Math.round(delta / trackHeight) * trackHeight);
    }
  }, [trackHeight, setCssTop, initialTop, ids, index]);

  const onMouseUp = useCallback(delta => {
    const newChannelIndex = Math.round((initialTop + delta) / trackHeight);

    if (newChannelIndex >= 0 && newChannelIndex < ids.length && newChannelIndex !== index) {
      switchChannel(newChannelIndex);
    }
  }, [ids, trackHeight, initialTop, index, switchChannel]);

  const switchTrigger = useDeltaTracker(onChange, onMouseUp, false, true);

  return { switchTrigger, cssTop };
}