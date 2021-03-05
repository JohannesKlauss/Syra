import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';
import { BackboneMixerContext, instantiateMixer } from './providers/BackboneMixerContext';
import { initializeApollo } from "./apollo/client";
import { ApolloProvider } from "@apollo/client";

/*if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');

  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'aqua',
    trackAllPureComponents: false,
  });
}*/

const root = document.getElementById('app');

const apolloClient = initializeApollo();

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <RecoilRoot>
      <BackboneMixerContext.Provider value={instantiateMixer()}>
        <App/>
      </BackboneMixerContext.Provider>
    </RecoilRoot>
  </ApolloProvider>,
  root,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();