import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import useAudioContext from '../hooks/audio/useAudioContext';
import SoulAudioInputTest from './SoulAudioInputTest';
import * as Tone from 'tone';

interface Props {

}

function AudioContextProvider({}: Props) {
  const [contextIsRunning, setContextIsRunning] = useState(false);
  const context = useAudioContext();

  return (
    <>
      {!contextIsRunning && <Button onClick={async () => {
        await Tone.start();
        await context.resume();

        setContextIsRunning(true);
      }}>
        Start AudioEngine
      </Button>}
      {contextIsRunning && <SoulAudioInputTest/>}
    </>
  );
}

export default AudioContextProvider;
