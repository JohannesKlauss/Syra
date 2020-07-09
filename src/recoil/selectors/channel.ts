import { atom, atomFamily, selectorFamily } from 'recoil/dist';
import { SoulInstance, SoulPatchParameter } from '../../types/Soul';

export const channelName = atomFamily<string, string>({
  key: 'channelName',
  default: id => id,
});

export const isChannelArmed = atomFamily<boolean, string>({
  key: 'isChannelArmed',
  default: true,
});

export const isChannelSolo = atomFamily<boolean, string>({
  key: 'isChannelSolo',
  default: false,
});

export const isChannelMuted = atomFamily<boolean, string>({
  key: 'isChannelMuted',
  default: false,
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

interface ChannelState {
  name: string;
  soulInstrument?: SoulInstance;
  soulPlugins: SoulInstance[];
  soulPluginIds: string[];
  isSolo: boolean;
  isMuted: boolean;
  isArmed: boolean;
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
      isSolo: get(isChannelSolo(channelId)),
      isMuted: get(isChannelMuted(channelId)),
      isArmed: get(isChannelArmed(channelId)),
    }
  }
});

export const channelIds = atom<string[]>({
  key: 'channelIds',
  default: []
});