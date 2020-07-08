import { atomFamily, selectorFamily } from 'recoil/dist';
import { SoulInstance, SoulPatchParameter } from '../../types/Soul';

export const channelName = atomFamily<string, string>({
  key: 'channelName',
  default: id => id,
});

export const isPatchActive = atomFamily<boolean, string>({
  key: 'isPatchActive',
  default: true,
});

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

interface ChannelState {
  name: string;
  soulInstrument?: SoulInstance;
  soulPlugins: SoulInstance[];
  soulPluginIds: string[];
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
    }
  }
});