import React, { useMemo, useState } from 'react';
import { CssBaseline, Modal, ThemeProvider, Button, Paper } from '@material-ui/core';
import UiInteractionProvider from './providers/UiInteractionProvider';
import SplinterRouter from './providers/SplinterRouter';
import { useHotkeys } from 'react-hotkeys-hook';
import Debugger from './ui/debug/Debugger';
import { splinterTheme } from './theme';
import { retroWaveTheme } from './theme/retroWave';

function App() {
  const [showDebugMenu, setShowDebugMenu] = useState(false);
  const [darkState] = useState(true);

  const theme = useMemo(() => darkState ? splinterTheme : retroWaveTheme, [darkState]);

  useHotkeys('shift+d', () => setShowDebugMenu(currVal => !currVal));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <UiInteractionProvider>
        <SplinterRouter/>
      </UiInteractionProvider>
      <Modal open={showDebugMenu} onClose={() => setShowDebugMenu(false)} keepMounted={false} unselectable={'on'} style={{maxHeight: '100vh'}}>
        <Paper style={{overflowY: 'scroll', maxHeight: '100vh'}}>
          <Button onClick={() => setShowDebugMenu(false)}>Close</Button>
          <Debugger/>
        </Paper>
      </Modal>
    </ThemeProvider>
  );
}

export default App;
