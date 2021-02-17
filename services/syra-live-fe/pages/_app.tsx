import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import { useApollo } from "../apollo/client";
import { ApolloProvider } from '@apollo/client';
import axios from 'axios';
import mixpanel from 'mixpanel-browser';
import Footer from '../ui/atoms/Footer/Footer';
import Stopper from '../ui/atoms/Stopper/Stopper';
import '../styles/global.css';
import { Router } from "next/router";
import * as NProgress from 'nprogress';
import Head from 'next/head';
import AuthProvider from "../providers/auth/AuthProvider";
import "../i18n";
import useListenForLocaleChange from "../hooks/useListenForLocaleChange";
import useFaviconWatcher from "../hooks/ui/global/useFaviconWatcher";

axios.interceptors.response.use(
  (response) => response,
  (error) => error.response,
);

mixpanel.init('6497f5e8ce1803840e22d2c93af089d9', { api_host: 'https://api-eu.mixpanel.com' }, 'Syra Live');

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function SyraLive({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const favicon = useFaviconWatcher();

  useListenForLocaleChange();

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
        <title>{`S Y R A  |  Live ${pageProps.pageTitle ?? ''}`}</title>
        <link rel="shortcut icon" href={favicon} />
      </Head>
      <ApolloProvider client={apolloClient}>
        <RecoilRoot>
          <ChakraProvider>
            <AuthProvider>
              <Component {...pageProps} />
              <Footer />
              <Stopper />
            </AuthProvider>
          </ChakraProvider>
        </RecoilRoot>
      </ApolloProvider>
    </>
  );
}

export default SyraLive
