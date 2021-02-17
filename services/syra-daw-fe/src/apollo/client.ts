import { ApolloClient, ApolloLink, from, InMemoryCache, Observable, split } from '@apollo/client';
import { injectUserId } from './injectUserId';
import { setContext } from '@apollo/client/link/context';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import * as https from "https";
import onErrorLink from "./onErrorLink";

let apolloClient: ApolloClient<any>;
let _apolloClient: ApolloClient<any>;

export const injectUserIdLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: any;
      Promise.resolve(operation)
        .then((operation) => injectUserId(operation, apolloClient ?? _apolloClient))
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
  const httpLink = new BatchHttpLink({
    uri: process.env.REACT_APP_LIVE_GQL_URL,
    credentials: 'include',
    fetchOptions: {
      agent: new https.Agent({
        rejectUnauthorized: process.env.NODE_ENV === 'production',
        ecdhCurve: 'auto',
      }),
    }
  });

  const wsLink = new WebSocketLink({
    uri: `${process.env.REACT_APP_LIVE_GQL_URL_WS}/subscriptions`,
    options: {
      reconnect: true,
    }
  });

  const authLink = setContext((_, { headers }) => headers);

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink,
  );

  return new ApolloClient({
    ssrMode: false,
    cache: new InMemoryCache(),
    link: from([authLink, injectUserIdLink, onErrorLink, splitLink]),
    connectToDevTools: false,
  });
}

export function initializeApollo() {
  // Create the Apollo Client once in the client
  if (!apolloClient) {
    _apolloClient = createApolloClient();

    apolloClient = _apolloClient;
  }

  return apolloClient;
}

export function getApolloClient() {
  return initializeApollo();
}
