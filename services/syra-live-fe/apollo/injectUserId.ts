import { MeDocument } from '../gql/generated';
import { ApolloClient, Operation } from '@apollo/client';
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
    const results = await apolloClient.query({
      query: MeDocument,
      fetchPolicy: 'cache-first',
    });

    mixpanel.identify(results.data.me.id);

    operation.variables[variableName] = results.data.me.id;
  }
};