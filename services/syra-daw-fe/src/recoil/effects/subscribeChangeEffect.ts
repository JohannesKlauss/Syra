import { getApolloClient } from '../../apollo/client';
import {
  ChangesDocument,
  ChangesSubscription,
  ChangesSubscriptionVariables,
  MeDocument,
  MeQuery,
} from '../../gql/generated';
import { AtomEffect } from 'recoil';
import { RecoilAtomEffect } from '../../types/Recoil';
import { isEqual } from 'lodash';
import { FetchResult, Observable } from "@apollo/client";

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
}

export const subscribeChangeEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({ setSelf }) => {
  observable.subscribe((data) => {
    // If the user does not exist yet or the incoming change is from the user itself, we don't change anything.
    // If the change key does not correspond with the atom key, we skip the effect.
    if (userId == null || userId === data.data?.changes.authorId || key !== data.data?.changes.change.key) {
      return;
    }

    // TODO: CHECK IF THIS IF IS EVEN NEEDED...
    if (
      (data.data?.changes.change.id === undefined && id === undefined) ||
      (id !== undefined && typeof id === 'string' && id === data.data?.changes.change.id) ||
      (id !== undefined && typeof id === 'object' && isEqual(id, data.data?.changes.change.id))
    ) {
      setSelf(data.data?.changes.change.newValue);
    }
  });
};
