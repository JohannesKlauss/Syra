import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { deepOrange, deepPurple, lightBlue, orange } from '@material-ui/core/colors';
import AudioContextProvider from './providers/AudioContextProvider';
import WebMidi from 'webmidi';

function App() {
  const [darkState] = useState(true);
  const [isMidiEnabled, setIsMidiEnabled] = useState(false);
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

  WebMidi.enable(function (err) {
    if (err) {
      console.log("WebMidi could not be enabled.", err);
    } else {
      console.log("WebMidi enabled!", WebMidi.inputs.length);
      setIsMidiEnabled(true);
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {isMidiEnabled && <AudioContextProvider/>}
    </ThemeProvider>
  );
}

export default App;
