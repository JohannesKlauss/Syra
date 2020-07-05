import React, { useCallback } from 'react';
import useSoulPatch from '../hooks/soul/useSoulPatch';
import { Typography } from '@material-ui/core';
import Piano from './Piano';
import useSendMidiToSoul from '../hooks/soul/useSendMidiToSoul';
import ParameterList from '../ui/molecules/Parameters/ParameterList';
import * as Tone from 'tone';

interface Props {
  instrument: string;
}

function SoulInstrumentTest({instrument}: Props) {
  const [soulPatchNode, soulPatch] = useSoulPatch(`soul/instruments/${instrument}.wasm`);

  const sendMidi = useSendMidiToSoul(soulPatchNode);

  const onPlay = useCallback((msg: number = 144, note: number, velocity: number = 120) => sendMidi(msg, note, velocity), [sendMidi]);
  const onStop = useCallback((msg: number = 128, note: number, velocity: number = 0) => sendMidi(msg, note, velocity), [sendMidi]);

  if (soulPatchNode) {
    Tone.connect(soulPatchNode, Tone.Destination);
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Instrument MIDI Test
      </Typography>
      {soulPatch && soulPatchNode && <ParameterList parameters={soulPatch.descriptor.parameters} port={soulPatchNode.port}/>}
      <Piano min={48} max={65} onPlay={onPlay} onStop={onStop}/>
    </>
  );
}

export default SoulInstrumentTest;
