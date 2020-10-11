import React from "react";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <ColorModeProvider>
          <CSSReset/>
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
