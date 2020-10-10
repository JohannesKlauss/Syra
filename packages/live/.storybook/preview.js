import React from "react";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen'
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset/>
        <Story/>
      </ColorModeProvider>
    </ThemeProvider>
  ),
];