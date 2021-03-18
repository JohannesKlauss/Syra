import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { projectStore } from '../../../recoil/projectStore';
import { useResetProjectMutation } from '../../../gql/generated';
import { Button, Box, AlertIcon, Alert, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react';
import { fileSystem } from '../../../utils/fileSystem';
import { useHotkeys } from "react-hotkeys-hook";

interface Props {}

const DebugShortcuts: React.FC<Props> = ({}) => {
  const [displayShortcuts, setDisplayShortcuts] = useState(true);
  const id = useRecoilValue(projectStore.id);
  const [executeReset] = useResetProjectMutation({
    variables: { id },
  });

  useHotkeys('d', () => setDisplayShortcuts(prevState => !prevState));

  return (
    <Box pos={'fixed'} bottom={4} left={4} zIndex={100000}>
      {displayShortcuts && (
        <Alert status="warning" variant={'left-accent'} justifyContent="center">
          <AlertIcon />
          <Box flex={1}>
            <AlertTitle mr={2}>Debug Shortcuts</AlertTitle>
            <AlertDescription display={'block'}>
              Shortcuts for fast project altering. Use at your own risk!
              <Box>
                <Button onClick={() => fileSystem.clearDirectory()} mr={4}>
                  cFS
                </Button>
                <Button
                  onClick={async () => {
                    await executeReset();
                    window.location.reload();
                  }}
                >
                  rP
                </Button>
              </Box>
            </AlertDescription>
          </Box>
          <CloseButton position="absolute" right="8px" top="8px" onClick={() => setDisplayShortcuts(false)} />
        </Alert>
      )}
      {!displayShortcuts && (
        <Button onClick={() => setDisplayShortcuts(true)} mr={4}>
          D
        </Button>
      )}
    </Box>
  );
};

export default DebugShortcuts;
