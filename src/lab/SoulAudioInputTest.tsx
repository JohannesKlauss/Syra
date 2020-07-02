import React from 'react';
import useAudioContext from '../hooks/audio/useAudioContext';
import { Button, Container } from '@material-ui/core';
import useSoulPatch from '../hooks/soul/useSoulPatch';
import * as Tone from 'tone';

interface Props {

}

function SoulAudioInputTest({}: Props) {
  const context = useAudioContext();
  const soulPatch = useSoulPatch('soul/gain.wasm');

  return (
    <Container>
      <Button onClick={async () => {
        if (context.state !== 'running') {
          await context.resume();
        }

        if (soulPatch == null) {
          return;
        }

        const player = new Tone.Player('audio/default.wav');

        player.chain(soulPatch, Tone.Destination);
        player.loop = true;
        player.autostart = true;
      }}>Load Gain Plugin with Volume Slider</Button>
      <br/>
      <input type="range" min={-40} max={0} defaultValue={-6} step={0.01} onChange={(e) => {
        if (soulPatch == null) {
          return;
        }

        soulPatch.port.postMessage({
          type: 'PARAMETER_UPDATE',
          value: {
            parameterId: 1,
            normalisedValue: parseInt(e.target.value),
          },
        });
      }}/>
    </Container>
  );
}

export default SoulAudioInputTest;
