import React from 'react';
import { Button, Container } from '@material-ui/core';
import * as Tone from 'tone';
import useAudioContext from '../hooks/audio/useAudioContext';

interface Props {

}

function SoulTest({}: Props) {
  const context = useAudioContext();

  return (
    <Container>
      <Button onClick={async () => {
        if (context.state !== 'running') {
          return;
        }

        const obj = await WebAssembly.instantiateStreaming(fetch('soul/test.wasm'));

        await context.audioWorklet.addModule('worklets/SoulWasmAudioWorkletProcessor.js')

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
      }}>Play Ringtone</Button>
    </Container>
  );
}

export default SoulTest;
