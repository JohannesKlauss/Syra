import React from "react";
import { defaultTheme } from "../theme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
