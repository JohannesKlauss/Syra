import { MeDocument } from '../gql/generated';
import { ApolloClient, ApolloLink, Observable, Operation } from '@apollo/client';

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

    operation.variables[variableName] = results.data.me.id;
  }
};