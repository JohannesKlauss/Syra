import React from 'react';
import useAudioContext from '../hooks/audio/useAudioContext';
import { Button, Container } from '@material-ui/core';
import * as Tone from 'tone';
import loadSoulPatch from '../soul/loadSoulPatch';

interface Props {

}

function SoulAudioInputTest({}: Props) {
  const context = useAudioContext();

  let soulPatch: AudioWorkletNode;

  return (
    <Container>
      <Button onClick={async () => {
        if (context.state !== 'running') {
          context.resume();
        }

        const patch = await loadSoulPatch('soul/gain.wasm');

        await context.audioWorklet.addModule('worklets/SoulWasmAudioWorkletProcessor.js');

        console.log(patch);
        soulPatch = new AudioWorkletNode(context,"soul-wasm-audio-worklet-processor-new",{
          processorOptions: {
            module: patch.module,
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

        const res = await fetch('audio/default.wav');
        const arrayBuffer = await res.arrayBuffer();
        const audioBuffer = await context.decodeAudioData(arrayBuffer);

        const source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(soulPatch).connect(context.destination);
        source.start();
      }}>Load Gain Plugin with Volume Slider</Button>
      <br/>
      <input type="range" min={-40} max={0} defaultValue={-6} step={0.01} onChange={(e) => {
        soulPatch.port.postMessage({
          type: "PARAMETER_UPDATE",
          value: {
            parameterId: 1,
            normalisedValue: parseInt(e.target.value)
          }
        });
      }}/>
    </Container>
  );
}

export default SoulAudioInputTest;
