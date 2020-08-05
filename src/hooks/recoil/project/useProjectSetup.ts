import { ChannelType } from '../../../types/Channel';
import useCreateChannel from '../channel/useCreateChannel';

export default function useProjectSetup() {
  const createChannel = useCreateChannel();

  return async (channelType: ChannelType, numberChannels: number) => {
    const label = channelType === ChannelType.AUDIO ? 'Audio' : 'Instrument';

    for(let i = 1; i <= numberChannels; i++) {
      await createChannel(channelType, 0, `${label} ${i}`);
    }
  }
}