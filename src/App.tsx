import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { deepOrange, deepPurple, lightBlue, orange } from '@material-ui/core/colors';
import UiInteractionProvider from './providers/UiInteractionProvider';
import SplinterRouter from './providers/SplinterRouter';

function App() {
  const [darkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });

  /*const handleThemeChange = () => {
    setDarkState(!darkState);
  };*/

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <UiInteractionProvider>
        <SplinterRouter/>
      </UiInteractionProvider>
    </ThemeProvider>
  );
}

export default App;
