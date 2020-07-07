import { atomFamily, selectorFamily } from 'recoil/dist';
import { SoulInstance } from '../../types/SoulInstance';

export const selectedChannelInstrument = atomFamily<SoulInstance | undefined, string>({
  key: 'selectedChannelInstrument',
  default: undefined,
});

export const selectedChannelPlugins = atomFamily<SoulInstance[], string>({
  key: 'selectedChannelPlugins',
  default: [],
});

export const channelState = selectorFamily<{ soulInstrument: SoulInstance | undefined, soulPlugins: SoulInstance[] }, string>({
  key: `channelState`,
  get: (id) => ({get}) => ({
    soulInstrument: get(selectedChannelInstrument(id)),
    soulPlugins: get(selectedChannelPlugins(id)),
  }),
});