import { atom, selector, selectorFamily } from 'recoil';
import * as Tone from 'tone';
import atomWithEffects from './proxy/atomWithEffects';
import { getToneJsTransport } from '../utils/tonejs';
import { getApolloClient } from '../apollo/client';
import {
  ProjectDocument,
  ProjectQuery,
  ProjectQueryVariables,
  UpdateNameDocument,
  UpdateNameMutation,
  UpdateNameMutationVariables
} from "../gql/generated";
import { updateDocumentTitle } from '../utils/window';
import { pubSubEffect } from "./effects/pubSubEffect";
import { saveToDatabaseEffect } from "./effects/saveToDatabaseEffect";
import makeInitialStateSelector from "./selectors/makeInitialStateSelector";

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
          getApolloClient().mutate<UpdateNameMutation, UpdateNameMutationVariables>({
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
  default: makeInitialStateSelector('project/tempoMap', {0: 120}),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
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
  default: makeInitialStateSelector('project/timeSignatureMap', {0: [4, 4]}),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ],
});

const lengthInQuarters = selector({
  key: 'project/lengthInQuarters',
  get: ({ get }) => parseInt(Tone.Ticks(get(lengthInTicks)).toBarsBeatsSixteenths()),
});

// TODO: THIS DEFAULT SETTING IS A BIT WEIRD, BECAUSE THIS EVALUATION HAPPENS __BEFORE__ WE SET TONE JS TO 1/4 Time Signature.
//  We have to figure out a better way to handle this.
const lengthInTicks = atomWithEffects({
  key: 'project/lengthInTicks',
  default: makeInitialStateSelector('project/lengthInTicks', Tone.Ticks(`${60}:0:0`).toTicks()),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ],
});

const isClickMuted = atomWithEffects<boolean>({
  key: 'project/isClickMuted',
  default: makeInitialStateSelector('project/isClickMuted', true),
  effects: [
    pubSubEffect,
    saveToDatabaseEffect,
  ],
});

const initialState = selector<Record<string, any>>({
  key: 'project/initialState',
  get: async ({get}) => {
    const projectId = get(id);

    if (projectId.length > 0 && get(isSetupFinished) && get(isEngineRunning)) {
      const res = await getApolloClient().query<ProjectQuery, ProjectQueryVariables>({
        variables: {id: projectId},
        query: ProjectDocument,
      });

      return res.data.project?.content;
    } else if (projectId.length === 0) {
      throw new Error('The initial State object is empty, but an atom or atomFamily tries to access it before a projectId has been set.');
    }

    return {};
  }
});

export const projectStore = {
  isSetupFinished,
  isEngineRunning,
  id,
  name,
  tempoMap,
  tempoAtQuarter,
  timeSignatureMap,
  lengthInQuarters,
  lengthInTicks,
  isClickMuted,
  initialState,
};
