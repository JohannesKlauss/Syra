import { useContext, useMemo } from 'react';
import { regionStore } from '../../../recoil/regionStore';
import { useRecoilValue } from 'recoil';
import { RegionContext } from '../../../providers/RegionContext';
import { channelStore } from '../../../recoil/channelStore';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useTheme } from '@chakra-ui/react';

export default function useRegionColor(isUnderManipulation: boolean) {
  const regionId = useContext(RegionContext);
  const channelId = useContext(ChannelContext);
  const isRecording = useRecoilValue(regionStore.isRecording(regionId));
  const channelColor = useRecoilValue(channelStore.color(channelId));
  const theme = useTheme()

  return useMemo(() => {
    if (isRecording) {
      return theme.colors.red[500];
    } else if (isUnderManipulation) {
      return theme.colors.gray[800];
    }

    if (channelId === '') {
      return theme.colors.gray[800];
    }

    const split = channelColor.split('.');

    return theme.colors[split[0]][split[1]];
  }, [isRecording, channelColor, isUnderManipulation]);
}