import { ChannelMode, ChannelType } from "../../types/Channel";
import { AudioChannel } from "../channels/AudioChannel";
import { InstrumentChannel } from "../channels/InstrumentChannel";
import { MasterChannel } from "../channels/MasterChannel";

export const channelFactory = async (id: string, channelType: ChannelType, channelMode?: ChannelMode) => {
  switch (channelType) {
    case ChannelType.AUDIO:
      return new AudioChannel(id, channelMode, await AudioChannel.createAudioInNode());
    case ChannelType.INSTRUMENT:
      return new InstrumentChannel(id, channelMode);
    case ChannelType.MASTER:
      return MasterChannel.getInstance();
    default:
      return null;
  }
}