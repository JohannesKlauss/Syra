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
      justify={'center'}
      alignSelf={'flex-end'}
      transform={renderVertical ? 'rotate(90deg)' : ''}
    >
      {children}
    </Flex>
  );
};

export default KeyLabel;
