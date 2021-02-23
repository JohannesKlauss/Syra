import { RecoilAtomEffect } from '../../types/Recoil';
import { AtomEffect } from 'recoil';
import { replaceItemAtIndex } from '../../utils/recoil';
import { getApolloClient } from '../../apollo/client';
import { isEqual } from 'lodash';
import {
  UpdateProjectContentDocument,
  UpdateProjectContentMutation,
  UpdateProjectContentMutationVariables,
} from '../../gql/generated';

let changesToSave: { [name: string]: any | Array<{ id: string; value: any }> } = {};

const client = getApolloClient();

export const saveToDb = async (projectId: string) => {
  if (Object.keys(changesToSave).length > 0) {
    const { errors } = await client.mutate<UpdateProjectContentMutation, UpdateProjectContentMutationVariables>({
      mutation: UpdateProjectContentDocument,
      variables: {
        id: projectId,
        content: changesToSave,
      },
    });

    if (errors === undefined) {
      changesToSave = {};
    } else {
      console.log('error while auto save', errors);
    }
  }
};

export const saveToDatabaseEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({ onSet }) => {
  onSet((value) => {
    const prevValue = changesToSave[key];

    if (prevValue === undefined) {
      changesToSave[key] = id ? [{ id, value }] : value;
    } else {
      if (changesToSave[key] instanceof Array && id !== undefined) {
        const j = changesToSave[key].findIndex((val: { id: P; value: any }) => isEqual(val.id, id));

        if (j < 0) {
          changesToSave[key] = [...changesToSave[key], { id, value }];
        } else {
          changesToSave[key] = replaceItemAtIndex(changesToSave[key], j, { id, value });
        }
      } else {
        changesToSave[key] = value;
      }
    }
  });
};
