import React from 'react';
import RulerZoomInOut from './RulerZoomInOut';
import RulerSnapSettings from './RulerSnapSettings';
import RulerCycleSettings from './RulerCycleSettings';
import { Flex } from '@chakra-ui/react';

function RulerSettings() {
  return (
    <Flex w={'100%'} justify={'space-around'} pos={'relative'} py={2} zIndex={20} borderBottom={'1px solid #1D4044'} bg={'gray.900'}>
      <RulerSnapSettings/>
      <RulerZoomInOut/>
      <RulerCycleSettings/>
    </Flex>
  );
}

export default RulerSettings;
