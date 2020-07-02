import React from 'react';
import useAudioContext from '../hooks/audio/useAudioContext';
import { Button, Container } from '@material-ui/core';
import * as Tone from 'tone';

interface Props {

}

function SoulAudioInputTest({}: Props) {
  const context = useAudioContext();

  return (
    <Container>
      <Button onClick={async () => {
        if (context.state !== 'running') {
          return;
        }

        const obj = await WebAssembly.instantiateStreaming(fetch('soul/gain.wasm'));

        // @ts-ignore
        const moduleBuffer = new Uint8Array(obj.instance.exports.memory.buffer, obj.instance.exports.getDescription(), obj.instance.exports.getDescriptionLength());
        let bufferContent = "";

        for (let i = 0; i < moduleBuffer.length; i++)
          bufferContent += String.fromCharCode(moduleBuffer[i]);
        const descriptor =  JSON.parse(bufferContent);

        console.log('buffer content', descriptor);

        await context.audioWorklet.addModule('worklets/SoulWasmAudioWorkletProcessor.js');

        // @ts-ignore
        console.log('wasm', obj.instance.exports.getInData());

        /*const soulPatch = new AudioWorkletNode(context,"soul-wasm-audio-worklet-processor-new",{
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

        soulPatch.connect(context.destination);*/
      }}>Play Audio Sample with Volume</Button>
    </Container>
  );
}

export default SoulAudioInputTest;
