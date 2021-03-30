import { atom, selector, selectorFamily } from 'recoil';
import { transportStore } from './transportStore';
import * as Tone from 'tone';
import atomWithEffects from './proxy/atomWithEffects';
import { syncEffectsComb } from './effects/syncEffectsComb';
import { getToneJsTransport } from '../utils/tonejs';
import { getApolloClient } from '../apollo/client';
import { UpdateNameDocument, UpdateNameMutation, UpdateNameMutationVariables } from '../gql/generated';
import { updateDocumentTitle } from '../utils/window';

const client = getApolloClient();

let projectId: string;

const isEngineRunning = atom({
  key: 'project/isEngineRunning',
  default: false,
});

const isSetupFinished = atom({
  key: 'project/isSetupFinished',
  default: false,
});

const name = atom({
  key: 'project/name',
  default: 'New Syra Project',
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        updateDocumentTitle(newValue as string);

        if (projectId != null) {
          client.mutate<UpdateNameMutation, UpdateNameMutationVariables>({
            mutation: UpdateNameDocument,
            variables: {
              name: newValue as string,
              projectId,
            },
          });
        }
      });
    },
  ],
});

const id = atom<string>({
  key: 'project/id',
  default: '',
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        projectId = newValue as string;
      });
    },
  ],
});

/**
 * Key is quarter in project, value is bpm.
 * TODO: We have to change this data structure to allow linear and exponential ramp ups.
 */
const tempoMap = atomWithEffects<{ [name: number]: number }>({
  key: 'project/tempoMap',
  default: {
    0: 240,
  },
  effects: [
    ...syncEffectsComb,
    () => ({ onSet }) => {
      onSet((newValue) => {
        const transport = getToneJsTransport();

        // @ts-ignore Reset all automation.
        transport.bpm.value = newValue[0];

        Object.keys(newValue).forEach((key) => {
          // @ts-ignore
          transport.bpm.setValueAtTime(newValue[key], Tone.Time({ '4n': key }).valueOf());
        });
      });
    },
  ],
});

const tempoAtQuarter = selectorFamily<number, number>({
  key: 'project/tempoAtQuarter',
  get: quarter => () => {
    return getToneJsTransport().bpm.getValueAtTime(Tone.Time({ '4n': quarter }).valueOf());
  },
});

// The time signature map of the project. The key is quarters and the value num of beats over division (7/4, 3/4, etc.).
// So 8: [7, 4] means after 8 elapsed quarters, change the time signature to 7/4.
const timeSignatureMap = atomWithEffects<{ [name: number]: [number, number] }>({
  key: 'project/timeSignatureMap',
  default: {
    0: [4, 4],
  },
  effects: [...syncEffectsComb],
});

const timeSignatureAtQuarter = selectorFamily<[number, number], number>({
  key: 'project/timeSignatureAtQuarter',
  get: (quarter) => ({ get }) => {
    const bar = get(transportStore.barAtQuarter(quarter));

    return bar?.timeSignature || get(timeSignatureMap)[0];
  },
});

const currentTimeSignature = atom<[number, number]>({
  key: 'project/currentTimeSignature',
  default: selector({
    key: 'project/currentTimeSignature/Default',
    get: ({ get }) => {
      const currentBar = get(transportStore.currentBar);

      return currentBar?.timeSignature || get(timeSignatureMap)[0];
    },
  }),
});

const lengthInQuarters = selector({
  key: 'project/lengthInQuarters',
  get: ({ get }) => parseInt(Tone.Ticks(get(lengthInTicks)).toBarsBeatsSixteenths()),
});

const lengthInTicks = atomWithEffects({
  key: 'project/lengthInTicks',
  default: Tone.Ticks(`${60}:0:0`).toTicks(), // TODO: THIS DEFAULT SETTING IS A BIT WEIRD, BECAUSE THIS EVALUATION HAPPENS __BEFORE__ WE SET TONE JS TO 1/4 Time Signature. We have to figure out a better way to handle this.
  effects: [...syncEffectsComb],
});

const secondsPerBeat = selector({
  key: 'project/secondsPerBeat',
  get: ({ get }) => 60 / get(transportStore.currentTempo),
});

const isClickMuted = atomWithEffects<boolean>({
  key: 'project/isClickMuted',
  default: true,
  effects: [...syncEffectsComb],
});

export const projectStore = {
  isSetupFinished,
  isEngineRunning,
  id,
  name,
  tempoMap,
  tempoAtQuarter,
  timeSignatureMap,
  timeSignatureAtQuarter,
  currentTimeSignature,
  secondsPerBeat,
  lengthInQuarters,
  lengthInTicks,
  isClickMuted,
};
