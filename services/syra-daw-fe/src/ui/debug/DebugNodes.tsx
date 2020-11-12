import React from 'react';
import DebugPlayers from './toneJsNodes/DebugPlayers';
import { Heading } from '@chakra-ui/core';

function DebugNodes() {
  return (
    <>
      <Heading size={'sm'}>Tone JS Nodes</Heading>
      <DebugPlayers/>
    </>
  );
}

export default DebugNodes;
