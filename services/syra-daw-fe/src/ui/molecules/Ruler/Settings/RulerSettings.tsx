import React from 'react';
import { Flex } from "@chakra-ui/react";

interface Props {
}

const RulerSettings: React.FC<Props> = ({children}) => {
  return (
    <Flex w={'100%'} justify={'space-between'} pos={'relative'} py={2} px={2} zIndex={20} borderBottom={'1px solid #1D4044'} bg={'gray.900'}>
      {children}
    </Flex>
  );
};

export default RulerSettings;
