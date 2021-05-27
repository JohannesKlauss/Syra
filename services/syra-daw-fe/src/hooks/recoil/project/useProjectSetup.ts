import { ChannelMode, ChannelType } from '../../../types/Channel';
import useCreateChannel from '../channel/useCreateChannel';
import { MASTER_CHANNEL } from '../../../engine/const/ids';

export default function useProjectSetup() {
  const createChannel = useCreateChannel();

  return async (channelType: ChannelType, numberChannels: number) => {
    const label = channelType === ChannelType.AUDIO ? 'Audio' : 'Instrument';

    await createChannel(ChannelType.MASTER, ChannelMode.STEREO, 0, 'Stereo Out', MASTER_CHANNEL);

    for (let i = 1; i <= numberChannels; i++) {
      await createChannel(channelType, ChannelMode.MONO, i, `${label} ${i}`);
    }
  };
}