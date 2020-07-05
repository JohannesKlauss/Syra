import React from 'react';
import { SoulPatchParameter } from '../types/SoulPatchDescriptor';
import SliderParameter from './SliderParameter';

interface Props {
  parameters: SoulPatchParameter[];
  port: MessagePort;
}

function ParameterList({parameters, port}: Props) {
  return (
    <div>
      {parameters.map(param => <SliderParameter parameter={param} port={port} key={param.id}/>)}
    </div>
  );
}

export default ParameterList;
