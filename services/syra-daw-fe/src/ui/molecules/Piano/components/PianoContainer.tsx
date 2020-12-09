import { Flex } from '@chakra-ui/react';
import React from 'react';

interface Props {
  renderVertical?: boolean;
}

const PianoContainer: React.FC<Props> = ({ renderVertical, children }) => {
  return (
    <Flex
      w={'100%'}
      pos={'relative'}
      overflowX={'hidden'}
      justify={'center'}
      transform={renderVertical ? 'rotate(-90deg)' : ''}
    >
      {children}
    </Flex>
  );
};

export default PianoContainer;
