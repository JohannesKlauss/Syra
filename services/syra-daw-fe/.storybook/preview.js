import React from 'react';
import { ColorModeProvider, CSSReset, Skeleton, ThemeProvider } from "@chakra-ui/core";
import { RecoilRoot } from 'recoil';
import "focus-visible/dist/focus-visible";

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  darkMode: {
    current: 'dark'
  }
};

export const decorators = [
  (Story) => {
    return (
      <RecoilRoot>
        <ThemeProvider>
          <ColorModeProvider>
            <CSSReset/>
            <React.Suspense fallback={<Skeleton h={24}/>}>
              <Story/>
            </React.Suspense>
          </ColorModeProvider>
        </ThemeProvider>
      </RecoilRoot>
    );
  },
];