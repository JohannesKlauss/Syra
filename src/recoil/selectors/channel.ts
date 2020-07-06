import { atomFamily, selectorFamily } from 'recoil/dist';

export const selectedChannelInstrument = atomFamily<string, string>({
  key: 'selectedChannelInstrument',
  default: '',
});

export const selectedChannelPlugins = atomFamily<string[], string>({
  key: 'selectedChannelPlugins',
  default: [],
});

export const channelState = selectorFamily<{ instrument: string, plugins: string[] }, string>({
  key: `channelState`,
  get: (id) => ({get}) => {
    const instrument = get(selectedChannelInstrument(id));
    const plugins = get(selectedChannelPlugins(id));

    return {
      instrument,
      plugins
    }
  },
});