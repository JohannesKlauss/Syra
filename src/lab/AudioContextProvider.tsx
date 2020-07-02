import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import useAudioContext from '../hooks/audio/useAudioContext';
import SoulAudioInputTest from './SoulAudioInputTest';

interface Props {

}

function AudioContextProvider({}: Props) {
  const [contextIsRunning, setContextIsRunning] = useState(false);
  const context = useAudioContext();

  return (
    <>
      {!contextIsRunning && <Button onClick={() => {
        context.resume();
        setContextIsRunning(true);
      }}>
        Start AudioEngine
      </Button>}
      {contextIsRunning && <SoulAudioInputTest/>}
    </>
  );
}

export default AudioContextProvider;
