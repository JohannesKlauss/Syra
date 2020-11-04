import { MockedResponse } from '@apollo/client/utilities/testing/mocking/mockLink';
import { DocumentNode } from 'graphql';

type MockApolloResultFn = <TData, TVariables = never>(query: DocumentNode, data: TData, variables?: TVariables) => MockedResponse<TData>;
type MockApolloResult = {
  apolloClient: {
    mocks: ReadonlyArray<MockedResponse<unknown>>,
  }
}

export const mockApollo = (mocks: ReadonlyArray<MockedResponse<unknown>>): MockApolloResult => ({
  apolloClient: {
    mocks,
  },
});

export const mockApolloResult: MockApolloResultFn = <TData, TVariables = never>(query: DocumentNode, data: TData, variables?: TVariables): MockedResponse<TData> => ({
  request: {
    query,
    variables,
  },
  result: {
    data,
  },
})