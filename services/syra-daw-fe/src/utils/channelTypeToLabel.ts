import { ChannelType } from '../types/Channel';

export function channelTypeToLabel(channelType: ChannelType): string {
  switch(channelType) {
    case ChannelType.AUDIO: return 'Audio';
    case ChannelType.INSTRUMENT: return 'Instrument';
    case ChannelType.MIX_GROUP: return 'Mix';
    case ChannelType.VCA_GROUP: return 'VCA';
    case ChannelType.AUX: return 'Aux';
    case ChannelType.MASTER: return 'Master';
  }
}