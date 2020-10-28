import React from 'react';
import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import { RecoilRoot } from 'recoil';
import { appWithTranslation } from '../i18n';
import { addDecorator } from '@storybook/react';
import { withNextRouter } from 'storybook-addon-next-router';
import "focus-visible/dist/focus-visible";

addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {
    }, // defaults to using addon actions integration, can override any method in the router
  }),
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  darkMode: {
    current: 'dark'
  }
};

export const decorators = [
  (Story) => {
    const StoryWithTranslation = appWithTranslation(Story);

    return (
      <RecoilRoot>
        <ThemeProvider>
          <ColorModeProvider>
            <CSSReset/>
            <StoryWithTranslation/>
          </ColorModeProvider>
        </ThemeProvider>
      </RecoilRoot>
    );
  },
];