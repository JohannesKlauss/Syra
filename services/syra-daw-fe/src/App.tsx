import React, { useState, StrictMode } from "react";
import AppRouter from './providers/AppRouter';
import { useHotkeys } from 'react-hotkeys-hook';
import { FpsView } from 'react-fps';
import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import useListenForEngineStart from "./hooks/tone/useListenForEngineStart";
import 'focus-visible/dist/focus-visible';
import useFaviconWatcher from "./hooks/ui/global/useFaviconWatcher";

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark' as 'dark',
};

const customTheme = extendTheme({ config });

function App() {
  const [showFpsMeter, setShowFpsMeter] = useState(false);
  useHotkeys('shift+f', () => setShowFpsMeter((currVal) => !currVal));
  useListenForEngineStart();
  useFaviconWatcher();

  return (
    <StrictMode>
      <ChakraProvider theme={customTheme}>
        <AppRouter />
        {showFpsMeter && <FpsView />}
      </ChakraProvider>
    </StrictMode>
  );
}

export default App;
