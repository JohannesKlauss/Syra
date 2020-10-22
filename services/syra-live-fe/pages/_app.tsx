import React from "react";
import App from 'next/app';
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { RecoilRoot } from "recoil";
import { appWithTranslation } from "../i18n";
import { useApollo } from '../apollo/client';
import { ApolloProvider } from '@apollo/client';
import axios from 'axios';

axios.interceptors.response.use(response => response, error => error.response);

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
