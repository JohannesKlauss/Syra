import { Flex } from '@chakra-ui/react';
import React from 'react';

interface Props {}

const KeyLabel: React.FC<Props> = ({ children }) => {
  return (
    <Flex
      w={'100%'}
      userSelect={'none'}
      textTransform={'uppercase'}
      fontSize={'0.875rem'}
      color={'#4a5568'}
      pb={'1rem'}
      justify={'center'}
      alignSelf={'flex-end'}
    >
      {children}
    </Flex>
  );
};

export default KeyLabel;
