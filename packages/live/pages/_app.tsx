import React from "react";
import App from 'next/app';
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { RecoilRoot } from "recoil";
import { appWithTranslation } from "../i18n";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <ColorModeProvider value={'dark'}>
          <CSSReset/>
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);
