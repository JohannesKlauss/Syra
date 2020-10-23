import React from "react";
import App from 'next/app';
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { RecoilRoot } from "recoil";
import { appWithTranslation } from "../i18n";
import { useApollo } from '../apollo/client';
import { ApolloProvider } from '@apollo/client';
import axios from 'axios';
import mixpanel from 'mixpanel-browser';

axios.interceptors.response.use(response => response, error => error.response);

mixpanel.init("6497f5e8ce1803840e22d2c93af089d9", { "api_host": "https://api-eu.mixpanel.com" }, "Syra Live");

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(null); // TODO: THIS SHOULD BE POPULATED WITH THE SSR STATE

  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <ThemeProvider>
          <ColorModeProvider value={'dark'}>
            <CSSReset/>
            <Component {...pageProps} />
          </ColorModeProvider>
        </ThemeProvider>
      </RecoilRoot>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);
