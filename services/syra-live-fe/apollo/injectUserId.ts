import { MeDocument, MeQuery } from '../gql/generated';
import { ApolloClient, ApolloQueryResult, Operation } from '@apollo/client';
import mixpanel from 'mixpanel-browser';

const queryRequiresVariable = (variableName, operation) =>
  operation.query.definitions?.some(({ variableDefinitions }) => {
    return variableDefinitions?.some(
        ({ variable }) => variable.name.value === variableName,
      );
    },
  );

export const injectUserId = async (operation: Operation, apolloClient: ApolloClient<unknown>) => {
  const variableName = 'me';

  if (queryRequiresVariable(variableName, operation)) {
    const results: ApolloQueryResult<MeQuery> = await apolloClient.query({
      query: MeDocument,
    });

    try {
      // Identify user for tracking purposes.
      mixpanel.people.set({
        "USER_ID": results.data.me.id,
        "$avatar": results.data.me.avatar,
      });
      mixpanel.identify(results.data.me.id);
    } catch(e) {}

    operation.variables[variableName] = results.data.me.id;
  }
};