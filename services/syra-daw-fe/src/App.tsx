import React, { useState, StrictMode, useEffect } from "react";
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
import { useProjectQuery } from "./gql/generated";
import useProjectSync from "./hooks/sync/useProjectSync";

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

  const {data, error} = useProjectQuery({variables: {id: "ckkbj5l5l0706lp14figy1mb1"}});
  // useProjectSync();

  if (data) {
    console.log(data.project);
  }

  return (
    <StrictMode>
      <ChakraProvider theme={customTheme}>
        <AppRouter />
        {showFpsMeter && <FpsView />}

        <Modal isOpen={showDebugMenu} onClose={() => setShowDebugMenu(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
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
