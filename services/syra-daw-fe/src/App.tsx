import React, { useState, StrictMode } from "react";
import AppRouter from './providers/AppRouter';
import { useHotkeys } from 'react-hotkeys-hook';
import Debugger from './ui/debug/Debugger';
import { FpsView } from 'react-fps';
import {
  Button,
  ChakraProvider,
  extendTheme,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import useListenForEngineStart from "./hooks/tone/useListenForEngineStart";

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({ config });

function App() {
  const [showDebugMenu, setShowDebugMenu] = useState(false);
  const [showFpsMeter, setShowFpsMeter] = useState(false);

  const onCloseDebugger = () => setShowDebugMenu(false);

  useHotkeys('shift+d', () => setShowDebugMenu((currVal) => !currVal));
  useHotkeys('shift+f', () => setShowFpsMeter((currVal) => !currVal));

  useListenForEngineStart();

  return (
    <StrictMode>
      <ChakraProvider theme={customTheme}>
        <AppRouter />
        {showFpsMeter && <FpsView />}

        <Modal isOpen={showDebugMenu} onClose={() => setShowDebugMenu(false)} size={'6xl'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Debugger</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Debugger />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onCloseDebugger}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </StrictMode>
  );
}

export default App;
