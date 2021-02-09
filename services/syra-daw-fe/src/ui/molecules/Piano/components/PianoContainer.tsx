import { Flex } from '@chakra-ui/react';
import React from 'react';

interface Props {
  renderVertical?: boolean;
}

const PianoContainer: React.FC<Props> = ({ renderVertical, children }) => {
  return (
    <Flex
      w={renderVertical ? 'auto' : '100%'}
      h={renderVertical ? '100%' : 'auto'}
      pos={'relative'}
      overflowX={renderVertical ? 'visible' : 'hidden'}
      justify={'center'}
      flexDir={renderVertical ? 'column' : 'row'}
    >
      {children}
    </Flex>
  );
};

export default PianoContainer;
