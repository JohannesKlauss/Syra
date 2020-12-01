import { useContext, useMemo } from 'react';
import { regionStore } from '../../../recoil/regionStore';
import { useRecoilValue } from 'recoil';
import { RegionContext } from '../../../providers/RegionContext';
import { channelStore } from '../../../recoil/channelStore';
import { ChannelContext } from '../../../providers/ChannelContext';

export default function useRegionColor(isUnderManipulation: boolean) {
  const regionId = useContext(RegionContext);
  const channelId = useContext(ChannelContext);
  const isRecording = useRecoilValue(regionStore.isRecording(regionId));
  const channelColor = useRecoilValue(channelStore.color(channelId));

  return useMemo(() => {
    if (isRecording) {
      return 'red.500';
    } else if (isUnderManipulation) {
      return 'gray.800';
    }

    return channelColor;
  }, [isRecording, channelColor, isUnderManipulation]);
}