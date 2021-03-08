import { AtomEffect } from 'recoil';
import { getApolloClient } from '../../apollo/client';
import { PublishChangeDocument, PublishChangeMutation, PublishChangeMutationVariables } from '../../gql/generated';
import { createNewId } from '../../utils/createNewId';
import { RecoilAtomEffect } from '../../types/Recoil';
import { getPriorityForAtomKey } from "../../utils/pubSubSync";

const client = getApolloClient();

let changes: Array<{ key: string, id?: unknown, newValue: unknown, priority: number }> = [];

export const publishChangesToClients = async (projectId: string) => {
  if (changes.length === 0) {
    return;
  }

  await client.mutate<PublishChangeMutation, PublishChangeMutationVariables>({
    mutation: PublishChangeDocument,
    variables: {
      projectId,
      changeId: createNewId('change-'),
      date: Date.now().valueOf(),
      changes: {
        list: changes.sort((a, b) => a.priority - b.priority), // We have to sort the changes by a priority
      }
    },
  });

  changes = [];
};

export const publishChangeEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({ onSet }) => {
  onSet(async (newValue) => {
    console.log('push changes for', key);

    changes.push({
      key,
      id,
      newValue,
      priority: getPriorityForAtomKey(key),
    });
  });
};
