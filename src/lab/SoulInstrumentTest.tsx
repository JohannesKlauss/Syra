import React, { useCallback } from 'react';
import useSoulPatch from '../hooks/soul/useSoulPatch';
import { Typography } from '@material-ui/core';
import Piano from '../ui/molecules/Piano/Piano';
import useSendMidiToSoul from '../hooks/soul/useSendMidiToSoul';
import ParameterList from '../ui/molecules/Parameters/ParameterList';
import * as Tone from 'tone';

interface Props {
  instrument: string;
}

function SoulInstrumentTest({ instrument }: Props) {
  const [soulPatchNode, soulPatch] = useSoulPatch(`soul/instruments/${instrument}.wasm`);

  const sendMidi = useSendMidiToSoul(soulPatchNode);

  const onNote = useCallback((msg: number, note: number, velocity: number = 120) => sendMidi(msg, note, velocity), [sendMidi]);

  if (soulPatchNode) {
    Tone.connect(soulPatchNode, Tone.Destination);
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Instrument MIDI Test
      </Typography>
      {soulPatch && soulPatchNode && <ParameterList parameters={soulPatch.descriptor.parameters} port={soulPatchNode.port}/>}
      {soulPatch && soulPatchNode && <Piano min={48} max={65} onNote={onNote}/>}
    </>
  );
}

export default SoulInstrumentTest;
