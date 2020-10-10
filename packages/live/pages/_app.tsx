import React from "react";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset/>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
