import React from 'react';
import { Button, Container } from '@material-ui/core';
import * as Tone from 'tone';
import Devices from './ui/atoms/Devices';

function App() {
  const synth = new Tone.Synth().toDestination();

  return (
    <Container>
      <Button onClick={async () => {
        await Tone.start();
        console.log('audio is ready');
        synth.triggerAttackRelease("C4", "8n");
      }}>Play Tone</Button>

      <Devices/>
    </Container>
  );
}

export default App;
