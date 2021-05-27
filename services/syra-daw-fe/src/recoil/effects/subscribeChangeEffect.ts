import { getApolloClient } from '../../apollo/client';
import {
  ChangesDocument,
  ChangesSubscription,
  ChangesSubscriptionVariables,
  MeDocument,
  MeQuery,
} from '../../gql/generated';
import { RecoilAtomEffect } from '../../types/Recoil';
import { isEqual } from 'lodash';
import { FetchResult, Observable } from '@apollo/client';

const client = getApolloClient();

let userId: string;

client
  .query<MeQuery>({
    query: MeDocument,
  })
  .then(({ data }) => {
    userId = data.me.id;
  });

let observable: Observable<FetchResult<ChangesSubscription, Record<string, any>, Record<string, any>>>;

export const initSubscription = (projectId: string) => {
  observable = client.subscribe<ChangesSubscription, ChangesSubscriptionVariables>({
    query: ChangesDocument,
    variables: {
      projectId,
    },
  });
};

const filterChangesList = <T>(
  changes: Array<{ key: string; id?: unknown; newValue: T }>,
  key: string,
  id?: unknown,
) => {
  return changes.filter((change) => {
    return (
      key === change.key &&
      ((change.id === undefined && id === undefined) ||
        (id !== undefined && typeof id === 'string' && id === change.id) ||
        (id !== undefined && typeof id === 'object' && isEqual(id, change.id)))
    );
  });
};

export const subscribeChangeEffect: RecoilAtomEffect<string | Record<string, any>, any> = (key, id) => ({ setSelf }) => {
  if (observable) {
    observable.subscribe((data) => {
      if (data.data?.changes.authorId === userId) {
        return;
      }

      const changesToApply = filterChangesList<any>(data.data?.changes.changes.list ?? [], key, id);

      if (changesToApply.length > 0) {
        setSelf(changesToApply[changesToApply.length - 1].newValue);
      }
    });
  }
};
