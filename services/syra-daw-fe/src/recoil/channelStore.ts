import { selector, selectorFamily } from 'recoil';
import { SoulInstance, SoulPatchParameter } from '../types/Soul';
import { ChannelType } from '../types/Channel';
import { RegionState, regionStore } from './regionStore';
import atomFamilySynced from "./proxy/atomFamilySynced";
import atomSynced from "./proxy/atomSynced";
import atomFamilyWithEffects from "./proxy/atomFamilyWithEffects";
import { pubSubEffect } from "./effects/pubSubEffect";
import { undoRedoEffect } from "./effects/undoRedoEffect";

let lastChannelNum = 2;

const name = atomFamilyWithEffects<string, string>({
  key: 'channel/name',
  default: selector({
    key: 'channel/name/Default',
    get: () => `Channel ${lastChannelNum++}`,
  }),
  effects: [
    pubSubEffect,
    undoRedoEffect,
  ]
});

const type = atomFamilySynced<ChannelType, string>({
  key: 'channel/type',
  default: ChannelType.INSTRUMENT,
});

const color = atomFamilySynced<string, string>({
  key: 'channel/color',
  default: 'cyan.400',
})

// Whether the user clicked the record button the channel or not.
const isArmed = atomFamilySynced<boolean, string>({
  key: 'channel/isArmed',
  default: true,
});

const isSolo = atomFamilySynced<boolean, string>({
  key: 'channel/isSolo',
  default: false,
});

const isMuted = atomFamilySynced<boolean, string>({
  key: 'channel/isMuted',
  default: false,
});

const isInputMonitoringActive = atomFamilySynced<boolean, string>({
  key: 'channel/isInputMonitoringActive',
  default: false,
});

// Whether an instrument or plugin is active or bypassed.
const isPluginActive = atomFamilySynced<boolean, string>({
  key: 'channel/isPluginActive',
  default: true,
});

const pluginIds = atomFamilySynced<string[], string>({
  key: 'channel/pluginIds',
  default: [],
});

// TODO: WE HAVE TO FIND A DEFINITION FOR WHEN TO USE PATCH, PLUGIN, SOUL_INSTANCE, SOUL_PATCH, etc. RIGHT NOW THIS IS CONFUSING.
// This represents an instrument or plugin.
const soulInstance = atomFamilySynced<SoulInstance | undefined, string>({
  key: 'channel/soulInstance',
  default: undefined,
});

const soulPatchParameter = atomFamilySynced<SoulPatchParameter, {soulInstanceId: string, parameterId: string}>({
  key: 'channel/soulPatchParameter',
  default: selectorFamily({
    key: 'channel/soulPatchParameter/Default',
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

interface ChannelState {
  name: string;
  color: string;
  soulInstrument?: SoulInstance;
  soulPlugins: SoulInstance[];
  soulPluginIds: string[];
  isSolo: boolean;
  isMuted: boolean;
  isArmed: boolean;
  isInputMonitoringActive: boolean;
  channelType: ChannelType;
  regionIds: string[];
  regions: RegionState[];
}

// The complete channel state. You would not really use this to set state, because every atom is gettable with just the
// channelId which gets provided by the ChannelContext anyway.
const state = selectorFamily<ChannelState, string>({
  key: `channel/state`,
  get: id => ({ get }) => {
    const soulPluginIds = get(pluginIds(id));

    return {
      name: get(name(id)),
      color: get(color(id)),
      soulInstrument: get(soulInstance(id)),
      soulPlugins: get(findPluginsByIds(soulPluginIds)),
      soulPluginIds,
      isSolo: get(isSolo(id)),
      isMuted: get(isMuted(id)),
      isArmed: get(isArmed(id)),
      isInputMonitoringActive: get(isInputMonitoringActive(id)),
      channelType: get(type(id)),
      regionIds: get(regionStore.ids(id)),
      regions: get(regionStore.findByChannelId(id))
    };
  }
});

const ids = atomSynced<string[]>({
  key: 'channel/ids',
  default: []
});

const selectedId = atomSynced<string>({
  key: 'channel/selectedId',
  default: '',
});

const findPluginsByIds = selectorFamily<SoulInstance[], string[]>({
  key: 'channel/findPluginsByIds',
  get: ids => ({get}) =>
    ids.map(id => get(soulInstance(id))).filter(patch => patch !== undefined) as SoulInstance[],
});

const findActivePluginsByIds = selectorFamily<SoulInstance[], string[]>({
  key: 'channel/findActivePluginsByIds',
  get: ids => ({get}) =>
    ids.filter(id => get(isPluginActive(id))).map(id => get(soulInstance(id))).filter(patch => patch !== undefined) as SoulInstance[],
})

const findSelectedChannel = selector({
  key: 'channel/findSelectedChannel',
  get: ({get}) => {
    const id = get(selectedId);

    if (id === '') {
      return undefined;
    }

    return get(state(id));
  },
});

export const channelStore = {
  name,
  type,
  color,
  isArmed,
  isSolo,
  isMuted,
  isInputMonitoringActive,
  isPluginActive,
  pluginIds,
  state,
  ids,
  selectedId,
  soulPatchParameter,
  soulInstance,
  findPluginsByIds,
  findActivePluginsByIds,
  findSelectedChannel,
};