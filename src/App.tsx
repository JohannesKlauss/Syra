import React, { useState } from 'react';
import { CssBaseline, Modal, ThemeProvider, Button, Paper } from '@material-ui/core';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { deepOrange, deepPurple, lightBlue, orange } from '@material-ui/core/colors';
import UiInteractionProvider from './providers/UiInteractionProvider';
import SplinterRouter from './providers/SplinterRouter';
import { useHotkeys } from 'react-hotkeys-hook';
import Debugger from './ui/debug/Debugger';

function App() {
  const [showDebugMenu, setShowDebugMenu] = useState(false);
  const [darkState] = useState(true);
  const palletType = darkState ? 'dark' : 'light';
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  useHotkeys('shift+d', () => setShowDebugMenu(currVal => !currVal));

  /*const handleThemeChange = () => {
    setDarkState(!darkState);
  };*/

  return (
    <ThemeProvider theme={darkTheme}>
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
