import React from "react";
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { defaultTheme } from '../theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen'
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline/>
        <Story/>
    </ThemeProvider>
  ),
];