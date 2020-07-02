import React, { useState } from 'react';
import { Button, Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import * as Tone from 'tone';
import Devices from './ui/atoms/Devices';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { deepOrange, deepPurple, lightBlue, orange } from '@material-ui/core/colors';

function App() {
  const [darkState, setDarkState] = useState(true);
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

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const context = new AudioContext();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Button onClick={async () => {
          // await Tone.start();

          console.log(context.state);

          const obj = await WebAssembly.instantiateStreaming(fetch('soul/test.wasm'));

          // Call an exported function:
          console.log(obj);
          // @ts-ignore
          console.log(obj.instance.exports.getDescription());
          // @ts-ignore
          console.log(obj.instance.exports.prepareToPlay());

          console.log(obj.instance.exports);

          console.log('works');

          await context.audioWorklet.addModule('worklets/SoulWasmAudioWorkletProcessor.js')

          console.log('works after');

          const soulPatch = new AudioWorkletNode(context,"soul-wasm-audio-worklet-processor-new",{
            processorOptions: {
              module: obj.module,
              sampleRate: Tone.context.rawContext.sampleRate,
              initialParamValues: '',
              bufferSize: 128,
              totalInputs: 1,
              totalOutputs: 1,
              endpoints: JSON.stringify([])
            },
            numberOfInputs: 1,
            numberOfOutputs: 1,
            outputChannelCount: [2]
          });

          soulPatch.connect(context.destination);
        }}>Play Tone</Button>
        <Devices/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
