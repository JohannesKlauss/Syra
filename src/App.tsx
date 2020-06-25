import React from 'react';
import { Button, Container } from '@material-ui/core';
import * as Tone from 'tone';

function App() {
  var synth = new Tone.Synth().toMaster();

  return (
    <Container>
      <Button onClick={async () => {
        await Tone.start();
        console.log('audio is ready');
        synth.triggerAttackRelease("C4", "8n");
      }}>Test</Button>
    </Container>
  );
}

export default App;
