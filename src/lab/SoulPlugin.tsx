import React from 'react';
import { SoulPatch } from '../types/SoulPatch';
import ParameterList from '../ui/molecules/Parameters/ParameterList';

interface Props {
  plugin: SoulPatch;
  port: MessagePort;
}

function SoulPlugin({ plugin, port }: Props) {
  return (
    <ParameterList port={port} parameters={plugin.descriptor.parameters}/>
  );
}

export default SoulPlugin;
