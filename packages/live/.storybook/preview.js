import React from "react";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/client';
import { appWithTranslation } from "../i18n";
import { addDecorator } from '@storybook/react';
import { withNextRouter } from 'storybook-addon-next-router';

addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {} // defaults to using addon actions integration, can override any method in the router
  })
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen"
};

export const decorators = [
  (Story) => {
    const apolloClient = useApollo(null);
    const StoryWithTranslation = appWithTranslation(Story);

    return (
      <ApolloProvider client={apolloClient}>
        <RecoilRoot>
          <ThemeProvider>
            <ColorModeProvider>
              <CSSReset/>
              <StoryWithTranslation/>
            </ColorModeProvider>
          </ThemeProvider>
        </RecoilRoot>
      </ApolloProvider>
    );
  }
];