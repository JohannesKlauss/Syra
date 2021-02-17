import { onError } from '@apollo/client/link/error';

export default onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) => {
      if (message.startsWith('Access denied!')) {
        window.location.replace(process.env.REACT_APP_LIVE_URL!);
      }

      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });

  if (networkError) console.log(`[Network error]: ${networkError}`);
});
