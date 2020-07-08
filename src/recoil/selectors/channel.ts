import { atom, atomFamily, selectorFamily } from 'recoil/dist';
import { SoulInstance, SoulPatchParameter } from '../../types/Soul';
import * as Tone from 'tone';

export const channelName = atomFamily<string, string>({
  key: 'channelName',
  default: id => id,
});

export const isPatchActive = atomFamily<boolean, string>({
  key: 'isPatchActive',
  default: true,
});

// TODO: WE HAVE TO FIND A DEFINITION FOR WHEN TO USE PATCH, PLUGIN, SOUL_INSTANCE, SOUL_PATCH, etc. RIGHT NOW THIS IS CONFUSING.
export const soulInstance = atomFamily<SoulInstance | undefined, string>({
  key: 'soulInstance',
  default: undefined,
});

export const soulPatchParameter = atomFamily<SoulPatchParameter, {soulInstanceId: string, parameterId: string}>({
  key: 'soulPatchParameter',
  default: selectorFamily({
    key: 'soulPatchParameter/Default',
    get: ({soulInstanceId, parameterId}) => ({get}) => {
      const instance = get(soulInstance(soulInstanceId));

      const param = instance?.soulPatch.descriptor.parameters.find(param => param.id === parameterId);

      if (param === undefined) {
        throw new Error(`Trying to create a patchParameter atom for "${parameterId}" parameter in patch "${soulInstanceId}". Either the patch or the parameter does not exist.`);
      }

      return {
        ...param,
        value: param.initialValue,
      };
    }
  })
});

export const channelPluginIds = atomFamily<string[], string>({
  key: 'channelPluginIds',
  default: [],
});

export const findPluginsByIds = selectorFamily<SoulInstance[], string[]>({
  key: 'findPluginsByIds',
  get: ids => ({get}) => ids.map(id => get(soulInstance(id))).filter(patch => patch !== undefined) as SoulInstance[],
});

export const findSoulInstanceByChannelIdAndIndex = selectorFamily<SoulInstance, {channelId: string, index: number}>({
  key: 'findSoulInstanceByChannelIdAndIndex',
  get: ({channelId, index}) => ({get}) => {
    const pluginId = get(channelPluginIds(channelId))[index];

    if (pluginId == null) {
      throw new Error(`There is no plugin on channel "${channelId}" at index ${index}`);
    }

    return get(soulInstance(pluginId))!;
  }
});

export const channelToneChannelNode = atomFamily<Tone.Channel | undefined, string>({
  key: 'channelToneChannelNode',
  default: undefined,
});

interface ChannelState {
  name: string;
  soulInstrument?: SoulInstance;
  soulPlugins: SoulInstance[];
  soulPluginIds: string[];
  toneChannel?: Tone.Channel; // TODO: THIS NAMING IS CONFUSING, SINCE THE WHOLE THING IS A CHANNEL, BUT THE SPECIFIC TONE COMPONENT IS ALSO CALLED CHANNEL.
}

export const channelState = selectorFamily<ChannelState, string>({
  key: `channelState`,
  get: channelId => ({ get }) => {
    const soulPluginIds = get(channelPluginIds(channelId));

    return {
      name: get(channelName(channelId)),
      soulInstrument: get(soulInstance(channelId)),
      soulPlugins: get(findPluginsByIds(soulPluginIds)),
      soulPluginIds,
      toneChannel: get(channelToneChannelNode(channelId)),
    }
  }
});

export const channelIds = atom<string[]>({
  key: 'channelIds',
  default: []
});