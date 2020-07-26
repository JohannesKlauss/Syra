import { atom, atomFamily, selector, selectorFamily } from 'recoil/dist';
import { SoulInstance, SoulPatchParameter } from '../types/Soul';
import { ChannelType } from '../types/Channel';
import { RegionState, regionStore } from './regionStore';
import { channelColors } from '../utils/channelColors';

const name = atomFamily<string, string>({
  key: 'channel/name',
  default: selector({
    key: 'channel/name/Default',
    get: ({get}) => {
      const channelIds = get(ids);

      return `channel ${channelIds.length}`;
    }
  }),
});

const type = atomFamily<ChannelType, string>({
  key: 'channel/type',
  default: ChannelType.INSTRUMENT,
});

const color = atomFamily<string, string>({
  key: 'channel/color',
  default: selector({
    key: 'channel/color/Default',
    get: ({get}) => channelColors[get(ids).length % channelColors.length],
  }),
})

// Whether the user clicked the record button the channel or not.
const isArmed = atomFamily<boolean, string>({
  key: 'channel/isArmed',
  default: false,
});

const isSolo = atomFamily<boolean, string>({
  key: 'channel/isSolo',
  default: false,
});

const isMuted = atomFamily<boolean, string>({
  key: 'channel/isMuted',
  default: false,
});

// Whether an instrument or plugin is active or bypassed.
const isPluginActive = atomFamily<boolean, string>({
  key: 'channel/isPluginActive',
  default: true,
});

const pluginIds = atomFamily<string[], string>({
  key: 'channel/pluginIds',
  default: [],
});

// TODO: WE HAVE TO FIND A DEFINITION FOR WHEN TO USE PATCH, PLUGIN, SOUL_INSTANCE, SOUL_PATCH, etc. RIGHT NOW THIS IS CONFUSING.
// This represents an instrument or plugin.
const soulInstance = atomFamily<SoulInstance | undefined, string>({
  key: 'channel/soulInstance',
  default: undefined,
});

const soulPatchParameter = atomFamily<SoulPatchParameter, {soulInstanceId: string, parameterId: string}>({
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

const toneJsMap = atomFamily<Map<string, any>, string>({
  key: 'channel/toneJsMap',
  default: selectorFamily({
    key: 'channel/toneJsMap/Default',
    get: channelId => () => {
      const map = new Map<string, any>();

      map.set('channelId', channelId);

      return map;
    }
  }),
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
  channelType: ChannelType;
  toneJsMap: Map<string, any>;
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
      channelType: get(type(id)),
      toneJsMap: get(toneJsMap(id)),
      regionIds: get(regionStore.ids(id)),
      regions: get(regionStore.findByChannelId(id))
    };
  }
});

const ids = atom<string[]>({
  key: 'channel/ids',
  default: []
});

const selectedId = atom<string>({
  key: 'channel/selectedId',
  default: '',
})

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
  isPluginActive,
  pluginIds,
  state,
  ids,
  selectedId,
  soulPatchParameter,
  soulInstance,
  toneJsMap,
  findPluginsByIds,
  findActivePluginsByIds,
  findSelectedChannel,
};