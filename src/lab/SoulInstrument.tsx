import React from 'react';
import Piano from '../ui/molecules/Piano/Piano';
import ParameterList from '../ui/molecules/Parameters/ParameterList';
import { SoulPatch } from '../types/SoulPatch';
import { MidiCallable } from '../hooks/ui/usePiano';

interface Props {
  patch: SoulPatch;
  port: MessagePort;
  onNote: MidiCallable;
}

function SoulInstrument({ patch, port, onNote }: Props) {
  return (
    <>
      <ParameterList parameters={patch.descriptor.parameters} port={port}/>
      <Piano min={48} max={65} onNote={onNote}/>
    </>
  );
}

export default SoulInstrument;
