import { AtomEffect } from 'recoil';
import { getApolloClient } from '../../apollo/client';
import { PublishChangeDocument, PublishChangeMutation, PublishChangeMutationVariables } from '../../gql/generated';
import { createNewId } from '../../utils/createNewId';
import { RecoilAtomEffect } from '../../types/Recoil';

const client = getApolloClient();

let projectId: string | null;

let changes: Array<PublishChangeMutationVariables> = [];

export const publishChangeEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({ onSet }) => {
  onSet(async (newValue) => {
    if (projectId == null) {
      projectId = window.localStorage.getItem('projectId');
    }

    if (projectId == null) {
      return;
    }

    if (key === 'channel/type') {
      console.log('send change', newValue);
    }

    await client.mutate<PublishChangeMutation, PublishChangeMutationVariables>({
      mutation: PublishChangeDocument,
      variables: {
        projectId,
        changeId: createNewId('change-'),
        date: Date.now().valueOf(),
        change: {
          key,
          id,
          newValue,
        },
      },
    });
  });
};
