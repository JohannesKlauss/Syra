import { AtomEffect } from "recoil";
import { getApolloClient } from "../../apollo/client";
import { PublishChangeDocument, PublishChangeMutation, PublishChangeMutationVariables } from "../../gql/generated";
import { createNewId } from "../../utils/createNewId";

const client = getApolloClient();

export const publishChangeEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({onSet, trigger}) => {
  onSet(newValue => {
    console.log('trigger', trigger);

    if (trigger === 'get') {
      client.mutate<PublishChangeMutation, PublishChangeMutationVariables>({
        mutation: PublishChangeDocument,
        variables: {
          projectId: "ckkbj5l5l0706lp14figy1mb1",
          changeId: createNewId('change-'),
          date: 1,
          change: {
            key,
            id,
            newValue,
          }
        }
      });
    }
  });
};