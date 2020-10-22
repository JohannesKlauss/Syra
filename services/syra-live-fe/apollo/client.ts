import { useMemo } from 'react';
import { ApolloClient, ApolloLink, createHttpLink, from, InMemoryCache, Observable } from '@apollo/client';
import { injectUserId } from './injectUserId';

let apolloClient: ApolloClient<any>;
let _apolloClient: ApolloClient<any>;

export const injectUserIdLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle;
      Promise.resolve(operation)
        .then(operation => injectUserId(operation, apolloClient ?? _apolloClient))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    }),
);

function createApolloClient() {
  const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_LIVE_GQL_URL}`,
    credentials: 'include',
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(),
    link: from([injectUserIdLink, httpLink]),
    connectToDevTools: process.env.NODE_ENV === 'development',
  });
}

export function initializeApollo(initialState = null) {
  _apolloClient = apolloClient ?? createApolloClient();

  // Hydrate initial Next.js data fetching state.
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return _apolloClient;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
}

export function useApollo(initialState?: any) {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}