import React from 'react';
import { ChakraProvider, Skeleton, extendTheme, Box } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import 'focus-visible/dist/focus-visible';
import { audioSetup } from '../src/audioSetup';
import { MockedProvider } from "@apollo/client/testing";

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  apolloClient: {
    MockedProvider,
  },
};

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({ config });

export const decorators = [
  (Story) => {
    audioSetup();

    return (
      <RecoilRoot>
        <ChakraProvider theme={customTheme}>
          <React.Suspense fallback={<Skeleton h={24} />}>
            <Box minH={'100vh'} minW={'100vw'}>
              <Story />
            </Box>
          </React.Suspense>
        </ChakraProvider>
      </RecoilRoot>
    );
  },
];
