import { MeDocument, MeQuery } from '../gql/generated';
import { ApolloClient, ApolloQueryResult, Operation } from '@apollo/client';

const queryRequiresVariable = (variableName: any, operation: any) =>
  operation.query.definitions?.some(({ variableDefinitions }: { variableDefinitions: any}) => {
    return variableDefinitions?.some(
        ({ variable }: {variable: any}) => variable.name.value === variableName,
      );
    },
  );

export const injectUserId = async (operation: Operation, apolloClient: ApolloClient<unknown>) => {
  const variableName = 'me';

  if (queryRequiresVariable(variableName, operation)) {
    const results: ApolloQueryResult<MeQuery> = await apolloClient.query({
      query: MeDocument,
    });

    operation.variables[variableName] = results.data.me.id;
  }
};