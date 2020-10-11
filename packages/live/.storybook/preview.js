import React from "react";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { RecoilRoot } from "recoil";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen'
}

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <ThemeProvider>
        <ColorModeProvider>
          <CSSReset/>
          <Story/>
        </ColorModeProvider>
      </ThemeProvider>
    </RecoilRoot>
  ),
];