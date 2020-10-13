import React from "react";
import App from 'next/app';
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { RecoilRoot } from "recoil";
import { appWithTranslation } from "../i18n";
import { useApollo } from '../apollo/client';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

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
