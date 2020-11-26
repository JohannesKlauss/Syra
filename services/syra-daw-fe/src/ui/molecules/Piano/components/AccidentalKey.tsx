import { Flex, FlexProps } from '@chakra-ui/react';
import React from "react";

interface Props extends FlexProps {
  isActive: boolean
}

const AccidentalKey: React.FC<Props> = ({isActive, ...props}) => {
  return (
    <Flex
      {...props}
      zIndex={10}
      borderWidth={'1px'}
      borderColor={'#000'}
      borderBottomRightRadius={'0.125rem'}
      borderBottomLeftRadius={'0.125rem'}
      bg={'#2d3748'}
      cursor={'pointer'}
      userSelect={'none'}
      transition={'all 200ms'}
      height={isActive ? '6rem' : '5.8rem'}
      pos={'absolute'}
      top={0}
      backgroundImage={isActive ? 'linear-gradient(#42c9ff, #28e6ff)' : 'none'}
      boxShadow={
        '-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)'
      }
    />
  );
};

export default AccidentalKey;
