import { onError } from '@apollo/client/link/error';

export default onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path, name }) => {
      if (message.startsWith('Access denied!')) {
        window.location.replace(process.env.REACT_APP_LIVE_URL!);
      }

      if (process.env.NODE_ENV === 'development') {
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Name: ${operation.operationName}`);
      }
    });

  if (networkError) console.log(`[Network error]: ${networkError}`);
});
