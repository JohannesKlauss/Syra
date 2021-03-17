import { ChannelMode, ChannelType } from "../../types/Channel";
import { AudioChannel } from "../channels/AudioChannel";
import { InstrumentChannel } from "../channels/InstrumentChannel";

const channelMap = {
  [ChannelType.AUDIO]: async (id: string, channelMode: ChannelMode) => async () => new AudioChannel(id, channelMode, await AudioChannel.createAudioInNode()),
  [ChannelType.INSTRUMENT]: async (id: string, channelMode: ChannelMode) => async () => new InstrumentChannel(id, channelMode),
  [ChannelType.AUX]: async (id: string, channelMode: ChannelMode) => async () => null,
  [ChannelType.MASTER]: async (id: string, channelMode: ChannelMode) => async () => null,
  [ChannelType.MIX_GROUP]: async (id: string, channelMode: ChannelMode) => async () => null,
  [ChannelType.VCA_GROUP]: async (id: string, channelMode: ChannelMode) => async () => null,
}

export const channelFactory = async (id: string, channelType: ChannelType, channelMode: ChannelMode) => await channelMap[channelType](id, channelMode);

