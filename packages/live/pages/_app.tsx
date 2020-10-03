import "../styles/globals.css";
import React from "react";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";

function MyApp({ Component, pageProps }) {


  return (
    <ThemeProvider>
      <CSSReset/>
      <ColorModeProvider value={'dark'}>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
