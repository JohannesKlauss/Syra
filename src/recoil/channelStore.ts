import { atom, atomFamily, selector, selectorFamily } from 'recoil/dist';
import { SoulInstance, SoulPatchParameter } from '../types/Soul';
import { ChannelType } from '../types/Channel';
import { teal } from '@material-ui/core/colors';
import { channelTypeToLabel } from '../utils/channelTypeToLabel';
import { RegionState, regionStore } from './regionStore';

const name = atomFamily<string, string>({
  key: 'channel/name',
  default: selector({
    key: 'channel/name/Default',
    get: ({get}) => {
      const channelIds = get(ids);

      return `${channelTypeToLabel(get(type(channelIds[channelIds.length - 1])))} ${channelIds.length}`;
    }
  }),
});

const type = atomFamily<ChannelType, string>({
  key: 'channel/type',
  default: ChannelType.INSTRUMENT,
});

const color = atomFamily<string, string>({
  key: 'channel/color',
  default: teal['400'],
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
const isPatchActive = atomFamily<boolean, string>({
  key: 'channel/isPatchActive',
  default: true,
});

// This represents the audio input channel of an AudioChannel. Currently there is only one possible due to this bug in chromium:
// https://bugs.chromium.org/p/chromium/issues/detail?id=453876 Hopefully this finally gets fixed soon.
// Since we don't have multiple input choices at hand this is currently not really used, since it just selects the audioIn state.
// This is also why this is currently an atom instead of an atomFamily.

const pluginIds = atomFamily<string[], string>({
  key: 'channel/pluginIds',
  default: [],
});

const findPluginsByIds = selectorFamily<SoulInstance[], string[]>({
  key: 'channel/findPluginsByIds',
  get: ids => ({get}) => ids.map(id => get(soulInstance(id))).filter(patch => patch !== undefined) as SoulInstance[],
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

export const channelStore = {
  name,
  type,
  color,
  isArmed,
  isSolo,
  isMuted,
  isPatchActive,
  pluginIds,
  findPluginsByIds,
  state,
  ids,
  soulPatchParameter,
  soulInstance,
  toneJsMap,
};