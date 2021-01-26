import { getApolloClient } from '../../apollo/client';
import {
  ChangesDocument,
  ChangesSubscription,
  ChangesSubscriptionVariables,
  MeDocument,
  MeQuery,
} from '../../gql/generated';
import { AtomEffect } from 'recoil';
import { RecoilAtomEffect } from "../../types/Recoil";

const client = getApolloClient();

let userId: string;

client
  .query<MeQuery>({
    query: MeDocument,
  })
  .then(({ data }) => {
    userId = data.me.id;
  });

const observable = client.subscribe<ChangesSubscription, ChangesSubscriptionVariables>({
  query: ChangesDocument,
  variables: {
    projectId: 'ckkbj5l5l0706lp14figy1mb1',
  },
});

export const subscribeChangeEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({ setSelf, onSet, trigger }) => {
  observable.subscribe(data => {
    // If the user does not exist yet or the incoming change is from the user itself, we don't change anything.
    // If the change key does not correspond with the atom key, we skip the effect.
    if (userId == null || userId === data.data?.changes.authorId || key !== data.data?.changes.change.key) {
      return;
    }

    console.log('received change', data.data);

    if (data.data?.changes.change.id === undefined && id === undefined) {
      console.log('received atom Change', data.data);

      setSelf(data.data?.changes.change.newValue);
    } else if (id !== undefined && id === data.data?.changes.change.id) {
      console.log('received atomFamily Change', data.data);

      setSelf(data.data?.changes.change.newValue);
    }
  });
};
