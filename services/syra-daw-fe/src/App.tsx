import React, { useState, StrictMode } from "react";
import AppRouter from './providers/AppRouter';
import { useHotkeys } from 'react-hotkeys-hook';
import Debugger from './ui/debug/Debugger';
import { FpsView } from 'react-fps';
import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import useListenForEngineStart from "./hooks/tone/useListenForEngineStart";

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark' as 'dark',
};

const customTheme = extendTheme({ config });

function App() {
  const [showDebugMenu, setShowDebugMenu] = useState(false);
  const [showFpsMeter, setShowFpsMeter] = useState(false);

  useHotkeys('shift+d', () => setShowDebugMenu((currVal) => !currVal));
  useHotkeys('shift+f', () => setShowFpsMeter((currVal) => !currVal));

  useListenForEngineStart();

  return (
    <StrictMode>
      <ChakraProvider theme={customTheme}>
        <AppRouter />
        {showFpsMeter && <FpsView />}
        {process.env.NODE_ENV === 'development' && <Debugger onClose={() => setShowDebugMenu(false)} showMenu={showDebugMenu}/>}
      </ChakraProvider>
    </StrictMode>
  );
}

export default App;
