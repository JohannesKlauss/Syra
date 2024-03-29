import React from 'react';
import { ChakraProvider, extendTheme, Skeleton } from "@chakra-ui/react";
import { RecoilRoot } from 'recoil';
import { addDecorator } from '@storybook/react';
import { withNextRouter } from 'storybook-addon-next-router';
import { MockedProvider } from '@apollo/client/testing';
import "focus-visible/dist/focus-visible";
import '../i18n';

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
  },
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
  },
};

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

const customTheme = extendTheme({ config });

export const decorators = [
  (Story) => {
    return (
      <RecoilRoot>
        <ChakraProvider theme={customTheme}>
          <React.Suspense fallback={<Skeleton h={24}/>}>
            <Story/>
          </React.Suspense>
        </ChakraProvider>
      </RecoilRoot>
    );
  },
];