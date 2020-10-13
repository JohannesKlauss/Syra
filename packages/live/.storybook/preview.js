import React from "react";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/client';
import { appWithTranslation } from "../i18n";

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