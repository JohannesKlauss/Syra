import { useMemo } from 'react';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';

let apolloClient;

function createApolloClient() {
  const httpLink = createHttpLink({ uri: process.env.NEXT_PUBLIC_API_URL });
  const authLink = setContext((_, { headers }) => {
    const token = Cookies.get('ssn-jwt');

    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`
      }
    }
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
    connectToDevTools: process.env.NODE_ENV === 'development',
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
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