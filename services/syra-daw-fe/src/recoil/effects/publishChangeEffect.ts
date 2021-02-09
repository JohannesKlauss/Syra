import { AtomEffect } from 'recoil';
import { getApolloClient } from '../../apollo/client';
import { PublishChangeDocument, PublishChangeMutation, PublishChangeMutationVariables } from '../../gql/generated';
import { createNewId } from '../../utils/createNewId';
import { RecoilAtomEffect } from '../../types/Recoil';

const client = getApolloClient();

let projectId: string | null;

export const publishChangeEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({ onSet }) => {
  onSet((newValue) => {
    if (projectId == null) {
      projectId = window.localStorage.getItem('projectId');
    }

    if (projectId == null) {
      return;
    }

    client.mutate<PublishChangeMutation, PublishChangeMutationVariables>({
      mutation: PublishChangeDocument,
      variables: {
        projectId,
        changeId: createNewId('change-'),
        date: 1,
        change: {
          key,
          id,
          newValue,
        },
      },
    });
  });
};
