import { useMemo } from 'react';
import { ApolloClient, ApolloLink, from, InMemoryCache, Observable } from '@apollo/client';
import { injectUserId } from './injectUserId';
import { setContext } from '@apollo/client/link/context';
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import publicRuntimeConfig from '../const/config';

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

function createApolloClient(cookie?: string) {
  const ssrMode = typeof window === 'undefined';

  const httpLink = new BatchHttpLink({
    uri: `${publicRuntimeConfig.NEXT_PUBLIC_LIVE_GQL_URL}`,
    credentials: 'include',
  });

  const authLink = setContext((_, { headers }) => {
    if (cookie == null) {
      return headers;
    }

    return {
      headers: {
        ...headers,
        "Cookie": cookie,
      },
    };
  });

  return new ApolloClient({
    ssrMode,
    cache: new InMemoryCache(),
    link: from([authLink, injectUserIdLink, httpLink]),
    connectToDevTools: false,
  });
}

export function initializeApollo(initialState = null, cookie?: string) {
  _apolloClient = createApolloClient(cookie);

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