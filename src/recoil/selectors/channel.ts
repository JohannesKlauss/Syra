import { atom, atomFamily, selector, selectorFamily } from 'recoil/dist';
import { SoulInstance, SoulPatchParameter } from '../../types/Soul';
import { ChannelType } from '../../types/Channel';
import { audioIn } from '../atoms/audioInOut';

export const channelName = atomFamily<string, string>({
  key: 'channelName',
  default: selector({
    key: 'channelName/Default',
    get: ({get}) => `Channel ${get(channelIds).length}`
  }),
});

export const channelType = atomFamily<ChannelType, string>({
  key: 'channelType',
  default: ChannelType.INSTRUMENT,
});

// Whether the user clicked the record button the channel or not.
export const isChannelArmed = atomFamily<boolean, string>({
  key: 'isChannelArmed',
  default: false,
});

export const isChannelSolo = atomFamily<boolean, string>({
  key: 'isChannelSolo',
  default: false,
});

export const isChannelMuted = atomFamily<boolean, string>({
  key: 'isChannelMuted',
  default: false,
});

// Whether an instrument or plugin is active or bypassed.
export const isPatchActive = atomFamily<boolean, string>({
  key: 'isPatchActive',
  default: true,
});

// This represents the audio input channel of an AudioChannel. Currently there is only one possible due to this bug in chromium:
// https://bugs.chromium.org/p/chromium/issues/detail?id=453876 Hopefully this finally gets fixed soon.
// Since we don't have multiple input choices at hand this is currently not really used, since it just selects the audioIn state.
// This is also why this is currently an atom instead of an atomFamily.
export const channelAudioInput = atom({
  key: 'channelAudioInput',
  default: selector({
    key: 'channelAudioInput/Default',
    get: ({get}) => get(audioIn),
  }),
});

// TODO: WE HAVE TO FIND A DEFINITION FOR WHEN TO USE PATCH, PLUGIN, SOUL_INSTANCE, SOUL_PATCH, etc. RIGHT NOW THIS IS CONFUSING.
// This represents an instrument or plugin.
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
  channelType: ChannelType;
}

// The complete channel state. You would not really use this to set state, because every atom is gettable with just the
// channelId which gets provided by the ChannelContext anyway.
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
      channelType: get(channelType(channelId)),
    }
  }
});

export const channelIds = atom<string[]>({
  key: 'channelIds',
  default: []
});