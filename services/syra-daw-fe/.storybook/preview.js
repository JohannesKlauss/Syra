import React from 'react';
import { ChakraProvider, Skeleton, extendTheme, Box } from "@chakra-ui/react";
import { RecoilRoot } from 'recoil';
import "focus-visible/dist/focus-visible";

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  darkMode: {
    current: 'dark'
  }
};

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

const customTheme = extendTheme({ config });

export const decorators = [
  (Story) => {
    return (
      <Box minH={'100vw'} minW={'100vw'}>
        <RecoilRoot>
          <ChakraProvider theme={customTheme}>
            <React.Suspense fallback={<Skeleton h={24}/>}>
              <Story/>
            </React.Suspense>
          </ChakraProvider>
        </RecoilRoot>
      </Box>
    );
  },
];