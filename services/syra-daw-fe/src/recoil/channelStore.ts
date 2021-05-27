import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import { SoulInstance, SoulPatchDescriptor, SoulPatchParameter } from '../types/Soul';
import { ChannelMode, ChannelType } from "../types/Channel";
import { RegionState, regionStore } from './regionStore';
import atomFamilyWithEffects from './proxy/atomFamilyWithEffects';
import atomWithEffects from './proxy/atomWithEffects';
import { createSoulInstance } from '../soul/createSoulInstance';
import { soulPluginStore } from './soulPluginStore';
import { projectStore } from './projectStore';
import { undoRedoEffect } from './effects/undoRedoEffect';
import { MASTER_CHANNEL } from "../engine/const/ids";
import { removeItemAtIndex } from "../utils/recoil";
import { pubSubEffect } from "./effects/pubSubEffect";
import { saveToDatabaseEffect } from "./effects/saveToDatabaseEffect";
import makeInitialStateSelector from "./selectors/makeInitialStateSelector";
import makeInitialStateSelectorFamily from "./selectors/makeInitialStateSelectorFamily";

const ids = atomWithEffects<string[]>({
  key: 'channel/ids',
  default: makeInitialStateSelector('channel/ids', []),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
    undoRedoEffect,
  ],
});

const name = atomFamilyWithEffects<string, string>({
  key: 'channel/name',
  default: makeInitialStateSelectorFamily('channel/name', 'New Channel'),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ],
});

const type = atomFamilyWithEffects<ChannelType, string>({
  key: 'channel/type',
  default: makeInitialStateSelectorFamily('channel/type', ChannelType.INSTRUMENT),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ],
});

const mode = atomFamilyWithEffects<ChannelMode, string>({
  key: 'channel/mode',
  default: makeInitialStateSelectorFamily('channel/mode', ChannelMode.MONO),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ],
});

const color = atomFamilyWithEffects<string, string>({
  key: 'channel/color',
  default: makeInitialStateSelectorFamily('channel/color', 'cyan.400'),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ],
});

const volume = atomFamilyWithEffects<number, string>({
  key: 'channel/volume',
  default: makeInitialStateSelectorFamily('channel/volume', 0),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ]
});

const pan = atomFamilyWithEffects<number, string>({
  key: 'channel/pan',
  default: makeInitialStateSelectorFamily('channel/pan', 0),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ]
});

// Whether the user clicked the record button the channel or not.
const isArmed = atomFamilyWithEffects<boolean, string>({
  key: 'channel/isArmed',
  default: makeInitialStateSelectorFamily('channel/isArmed', false),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ]
});

const isSolo = atomFamilyWithEffects<boolean, string>({
  key: 'channel/isSolo',
  default: makeInitialStateSelectorFamily('channel/isSolo', false),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ]
});

const isMuted = atomFamilyWithEffects<boolean, string>({
  key: 'channel/isMuted',
  default: makeInitialStateSelectorFamily('channel/isMuted', false),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ]
});

const isInputMonitoringActive = atomFamilyWithEffects<boolean, string>({
  key: 'channel/isInputMonitoringActive',
  default: makeInitialStateSelectorFamily('channel/isInputMonitoringActive', false),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ]
});

// Whether an instrument or plugin is active or bypassed.
const isPluginActive = atomFamilyWithEffects<boolean, string>({
  key: 'channel/isPluginActive',
  default: makeInitialStateSelectorFamily('channel/isPluginActive', false),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ]
});

const pluginIds = atomFamilyWithEffects<string[], string>({
  key: 'channel/pluginIds',
  default: makeInitialStateSelectorFamily('channel/pluginIds', []),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
    undoRedoEffect,
  ]
});

// TODO: WE HAVE TO FIND A DEFINITION FOR WHEN TO USE PATCH, PLUGIN, SOUL_INSTANCE, SOUL_PATCH, etc. RIGHT NOW THIS IS CONFUSING.
// This represents an instrument or plugin.
const soulInstanceCache = atomFamily<SoulInstance | undefined, string>({
  key: 'channel/soulInstance',
  default: undefined,
});

const soulPatchDescriptor = atomFamilyWithEffects<SoulPatchDescriptor | undefined, string>({
  key: 'channel/soulPatchDescriptor',
  default: makeInitialStateSelectorFamily('channel/soulPatchDescriptor', undefined),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ]
});

const soulPatchParameter = atomFamilyWithEffects<SoulPatchParameter, {soulInstanceId: string, parameterId: string}>({
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
  }),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ]
});

const soulInstance = selectorFamily<SoulInstance | undefined, string>({
  key: 'channel/soulInstance',
  get: pluginId => async ({get}) => {
    if (!get(projectStore.isEngineRunning)) {
      return undefined;
    }

    let instance = get(soulInstanceCache(pluginId));

    if (instance === undefined) {
      const patchDescriptor = get(soulPatchDescriptor(pluginId));

      if (patchDescriptor && patchDescriptor.description) {
        const patch = get(soulPluginStore.findPluginByUid(patchDescriptor.description.UID));

        if (patch) {
          try {
            instance = await createSoulInstance(patch, patchDescriptor.description.isInstrument);
          } catch (e) {
          }
        }
      }
    }

    return instance;
  },
  set: pluginId => ({set, get}, instance) => {
    set(soulInstanceCache(pluginId), instance);
    set(soulPatchDescriptor(pluginId), (instance as SoulInstance).soulPatch.descriptor);
  },
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

const selectedId = atom<string>({
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
});

const findActivePluginsForChannelId = selectorFamily<SoulInstance[], string>({
  key: 'channel/findActivePluginsForChannelId',
  get: channelId => ({get}) => {
    const ids = get(pluginIds(channelId));

    return ids.filter(id => get(isPluginActive(id))).map(id => get(soulInstance(id))).filter(patch => patch !== undefined) as SoulInstance[];
  }
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

const findByRegionId = selectorFamily<string, string>({
  key: 'region/assignedChannelId',
  get: regionId => ({get}) => {
    const channelIds = get(ids);

    for (let i = 0; i < channelIds.length; i++) {
      const regionIds = get(regionStore.ids(channelIds[i]));

      if (regionIds.find(id => id === regionId) !== undefined) {
        return channelIds[i];
      }
    }

    return '';
  }
});

const idsWithMasterAtEnd = selector<string[]>({
  key: 'channel/idsWithMasterAtEnd',
  get: ({get}) => {
    const tmp = get(ids);

    return [...removeItemAtIndex(tmp, tmp.indexOf(MASTER_CHANNEL)), MASTER_CHANNEL];
  }
});

const idsWithoutMaster = selector<string[]>({
  key: 'channel/idsWithoutMaster',
  get: ({get}) => {
    const tmp = get(ids);

    return removeItemAtIndex(tmp, tmp.indexOf(MASTER_CHANNEL));
  }
});

export const channelStore = {
  name,
  type,
  mode,
  color,
  volume,
  pan,
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
  findActivePluginsForChannelId,
  findSelectedChannel,
  findByRegionId,
  idsWithMasterAtEnd,
  idsWithoutMaster,
};