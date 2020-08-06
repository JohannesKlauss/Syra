import React, { useMemo, useState, StrictMode } from 'react';
import { CssBaseline, Modal, ThemeProvider, Button, Paper } from '@material-ui/core';
import UiInteractionProvider from './providers/UiInteractionProvider';
import AppRouter from './providers/AppRouter';
import { useHotkeys } from 'react-hotkeys-hook';
import Debugger from './ui/debug/Debugger';
import { defaultTheme } from './theme';
import { retroWaveTheme } from './theme/retroWave';

function App() {
  const [showDebugMenu, setShowDebugMenu] = useState(false);
  const [darkState] = useState(true);

  const theme = useMemo(() => darkState ? defaultTheme : retroWaveTheme, [darkState]);

  useHotkeys('shift+d', () => setShowDebugMenu(currVal => !currVal));

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <UiInteractionProvider>
          <AppRouter/>
        </UiInteractionProvider>
        <Modal open={showDebugMenu} onClose={() => setShowDebugMenu(false)} keepMounted={false} unselectable={'on'} style={{maxHeight: '100vh'}}>
          <Paper style={{overflowY: 'scroll', maxHeight: '100vh'}}>
            <Button onClick={() => setShowDebugMenu(false)}>Close</Button>
            <Debugger/>
          </Paper>
        </Modal>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
