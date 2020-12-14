import { Flex } from '@chakra-ui/react';
import React from 'react';

interface Props {
  renderVertical?: boolean;
}

const KeyLabel: React.FC<Props> = ({ children, renderVertical }) => {
  return (
    <Flex
      w={'100%'}
      userSelect={'none'}
      textTransform={'uppercase'}
      fontSize={'0.775rem'}
      color={'#4a5568'}
      pb={renderVertical ? 0 : '1rem'}
      justify={renderVertical ? 'flex-end' : 'center'}
      alignSelf={renderVertical ? 'center' : 'flex-end'}
    >
      {children}
    </Flex>
  );
};

export default KeyLabel;
