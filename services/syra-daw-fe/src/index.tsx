import ReactDOM from 'react-dom';
import React, { StrictMode } from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';
import { initializeApollo } from './apollo/client';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

/*if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');

  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'aqua',
    trackAllPureComponents: false,
  });
}*/

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark' as 'dark',
};

const customTheme = extendTheme({ config });

const root = document.getElementById('app');

const apolloClient = initializeApollo();

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
          <ChakraProvider theme={customTheme}>
            <App />
          </ChakraProvider>
      </RecoilRoot>
    </ApolloProvider>
  </StrictMode>,
  root,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
