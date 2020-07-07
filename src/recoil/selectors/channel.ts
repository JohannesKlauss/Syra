import { atomFamily, selectorFamily } from 'recoil/dist';
import { SoulInstance } from '../../types/SoulInstance';

export const selectedChannelInstrument = atomFamily<SoulInstance | undefined, string>({
  key: 'selectedChannelInstrument',
  default: undefined,
});

export const selectedChannelPlugins = atomFamily<string[], string>({
  key: 'selectedChannelPlugins',
  default: [],
});

export const channelState = selectorFamily<{ soulInstrument: SoulInstance | undefined, plugins: string[] }, string>({
  key: `channelState`,
  get: (id) => ({get}) => ({
    soulInstrument: get(selectedChannelInstrument(id)),
    plugins: get(selectedChannelPlugins(id)),
  }),
});