import { AtomEffect } from 'recoil';
import { getApolloClient } from '../../apollo/client';
import { PublishChangeDocument, PublishChangeMutation, PublishChangeMutationVariables } from '../../gql/generated';
import { RecoilAtomEffect } from '../../types/Recoil';
import { getPriorityForAtomKey } from "../../utils/pubSubSync";
import { createNewId } from "../../utils/createNewId";

const client = getApolloClient();

let changes: Array<{ key: string, id?: unknown, newValue: unknown, priority: number }> = [];

export const publishChangesToClients = async (projectId: string) => {
  if (changes.length === 0) {
    return;
  }

  const copy = changes.slice();

  // An entry was added while we copied the changes array. Retry later.
  // TODO: WE NEED A BETTER HANDLING FOR THIS. CONCURRENT READ/WRITE ON ONE OBJECT THAT IS THAT IMPORTANT ISN'T VERY GOOD.
  if (copy.length !== changes.length) {
    return;
  }

  changes = [];

  const list = copy.sort((a, b) => a.priority - b.priority);

  await client.mutate<PublishChangeMutation, PublishChangeMutationVariables>({
    mutation: PublishChangeDocument,
    variables: {
      projectId,
      changeId: createNewId('change-'),
      date: Date.now().valueOf(),
      changes: {
        // We have to sort the changes by a priority to ensure that changes of id lists (which everything else depends upon) are applied first.
        list,
      }
    },
  });
};

export const publishChangeEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({ onSet }) => {
  onSet(async (newValue) => {
    changes.push({
      key,
      id,
      newValue,
      priority: getPriorityForAtomKey(key),
    });
  });
};
