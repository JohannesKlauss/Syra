import { atomFamily, selectorFamily } from 'recoil/dist';
import { SoulInstance } from '../../types/SoulInstance';

export const channelName = atomFamily<string, string>({
  key: 'selectedChannelInstrument',
  default: 'Instrument',
});

export const selectedChannelInstrument = atomFamily<SoulInstance | undefined, string>({
  key: 'selectedChannelInstrument',
  default: undefined,
});

export const selectedChannelPlugins = atomFamily<SoulInstance[], string>({
  key: 'selectedChannelPlugins',
  default: [],
});

export const channelPluginByIndex = selectorFamily<SoulInstance, { channelId: string, index: number }>({
  key: 'findChannelPluginByUID',
  get: ({ channelId, index }) => ({ get }) => get(selectedChannelPlugins(channelId))[index],
  set: ({ channelId, index }) => ({get, set}, newPlugin) => {
    const plugins = get(selectedChannelPlugins(channelId));

    set(selectedChannelPlugins(channelId), [...plugins.slice(0, index), newPlugin, ...plugins.slice(index + 1)] as SoulInstance[]);
  }
});

interface ChannelState {
  soulInstrument?: SoulInstance;
  soulPlugins: SoulInstance[];
}

export const channelState = selectorFamily<ChannelState, string>({
  key: `channelState`,
  get: id => ({ get }) => ({
    soulInstrument: get(selectedChannelInstrument(id)),
    soulPlugins: get(selectedChannelPlugins(id)),
  }),
});