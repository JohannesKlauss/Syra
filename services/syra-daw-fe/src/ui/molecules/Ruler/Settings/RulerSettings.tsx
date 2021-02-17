import React from 'react';
import RulerZoomInOut from './RulerZoomInOut';
import RulerSnapSettings from './RulerSnapSettings';
import RulerCycleSettings from './RulerCycleSettings';
import { Flex, Image } from "@chakra-ui/react";

const RulerSettings: React.FC = ({children}) => {
  return (
    <Flex w={'100%'} justify={'space-between'} pos={'relative'} py={2} px={2} zIndex={20} borderBottom={'1px solid #1D4044'} bg={'gray.900'}>
      <Image boxSize={'2rem'} src="/assets/gfx/syra-logo.png" alt="S Y R A | DAW" />
      <RulerSnapSettings/>
      <RulerZoomInOut/>
      <RulerCycleSettings/>
      {children}
    </Flex>
  );
};

export default RulerSettings;
