import { useMemo } from 'react';
import { ChannelType } from '../../../types/Channel';
import { buttonInfo } from '../../../utils/text';
import { channelTypeMap } from '../../../const/channels';

export default function useAvailableChannels() {
  return useMemo(
    () => [
      {
        icon: channelTypeMap[ChannelType.AUDIO]!.icon,
        name: channelTypeMap[ChannelType.AUDIO]!.name,
        type: ChannelType.AUDIO,
        title: buttonInfo('Add Audio Channel', 'Alt+Cmd+A'),
      },
      {
        icon: channelTypeMap[ChannelType.INSTRUMENT]!.icon,
        name: channelTypeMap[ChannelType.INSTRUMENT]!.name,
        type: ChannelType.INSTRUMENT,
        title: buttonInfo('Add Instrument Channel', 'Alt+Cmd+S'),
      },
      {
        icon: channelTypeMap[ChannelType.AUX]!.icon,
        name: channelTypeMap[ChannelType.AUX]!.name,
        type: ChannelType.AUX,
        title: buttonInfo('Add Aux Channel', 'Alt+Cmd+B'),
      },
      {
        icon: channelTypeMap[ChannelType.VCA_GROUP]!.icon,
        name: channelTypeMap[ChannelType.VCA_GROUP]!.name,
        type: ChannelType.VCA_GROUP,
        title: buttonInfo('Add VCA Group Channel', 'Alt+Cmd+D'),
      },
      {
        icon: channelTypeMap[ChannelType.MIX_GROUP]!.icon,
        name: channelTypeMap[ChannelType.MIX_GROUP]!.name,
        type: ChannelType.MIX_GROUP,
        title: buttonInfo('Add Mix Group Channel', 'Alt+Cmd+F'),
      },
    ],
    [],
  );
}
