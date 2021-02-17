import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { SoulInstance, SoulPatchDescriptor, SoulPatchParameter } from "../types/Soul";
import { ChannelType } from '../types/Channel';
import { RegionState, regionStore } from './regionStore';
import atomFamilyWithEffects from "./proxy/atomFamilyWithEffects";
import atomWithEffects from "./proxy/atomWithEffects";
import { syncEffectsComb } from "./effects/syncEffectsComb";
import { createSoulInstance } from "../soul/createSoulInstance";
import { soulPluginStore } from "./soulPluginStore";
import { projectStore } from "./projectStore";
import { undoRedoEffect } from "./effects/undoRedoEffect";

let lastChannelNum = 2;

const name = atomFamilyWithEffects<string, string>({
  key: 'channel/name',
  default: selector({
    key: 'channel/name/Default',
    get: () => `Channel ${lastChannelNum++}`,
  }),
  effects: [
    ...syncEffectsComb
  ]
});

const type = atomFamilyWithEffects<ChannelType, string>({
  key: 'channel/type',
  default: ChannelType.INSTRUMENT,
  effects: [
    ...syncEffectsComb
  ]
});

const color = atomFamilyWithEffects<string, string>({
  key: 'channel/color',
  default: 'cyan.400',
  effects: [
    ...syncEffectsComb
  ]
})

// Whether the user clicked the record button the channel or not.
const isArmed = atomFamilyWithEffects<boolean, string>({
  key: 'channel/isArmed',
  default: false,
  effects: [
    ...syncEffectsComb
  ]
});

const isSolo = atomFamilyWithEffects<boolean, string>({
  key: 'channel/isSolo',
  default: false,
  effects: [
    ...syncEffectsComb
  ]
});

const isMuted = atomFamilyWithEffects<boolean, string>({
  key: 'channel/isMuted',
  default: false,
  effects: [
    ...syncEffectsComb
  ]
});

const isInputMonitoringActive = atomFamilyWithEffects<boolean, string>({
  key: 'channel/isInputMonitoringActive',
  default: false,
  effects: [
    ...syncEffectsComb
  ]
});

// Whether an instrument or plugin is active or bypassed.
const isPluginActive = atomFamilyWithEffects<boolean, string>({
  key: 'channel/isPluginActive',
  default: true,
  effects: [
    ...syncEffectsComb
  ]
});

const pluginIds = atomFamilyWithEffects<string[], string>({
  key: 'channel/pluginIds',
  default: [],
  effects: [
    ...syncEffectsComb,
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
  default: undefined,
  effects: [
    ...syncEffectsComb,
  ]
});

const soulInstance = selectorFamily<SoulInstance | undefined, string>({
  key: 'channel/soulInstanceSel',
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
            console.log('Audio Context is suspended.');
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
  effects: [...syncEffectsComb]
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

const ids = atomWithEffects<string[]>({
  key: 'channel/ids',
  default: [],
  effects: [
    ...syncEffectsComb,
    undoRedoEffect,
  ]
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