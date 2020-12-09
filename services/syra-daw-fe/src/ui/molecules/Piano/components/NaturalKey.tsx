import { Flex, FlexProps } from "@chakra-ui/react";
import React from 'react';

interface Props extends FlexProps {
  isActive: boolean;
  baseHeight?: number;
  activeHeight?: number;
}

function NaturalKey({ isActive, activeHeight = 210, baseHeight = 205, ...props }: Props) {
  return (
    <Flex
      {...props}
      zIndex={0}
      borderWidth={'1px'}
      borderColor={'#4a5568'}
      borderTopWidth={0}
      borderBottomRightRadius={'0.125rem'}
      borderBottomLeftRadius={'0.125rem'}
      borderStyle={'solid'}
      bg={'#fff'}
      flex={'1 1 0%'}
      cursor={'pointer'}
      userSelect={'none'}
      transition={'all 200ms'}
      width={'auto !important'}
      height={isActive ? `${activeHeight}px` : `${baseHeight}px`}
      backgroundImage={isActive ? 'linear-gradient(#42c9ff, #28e6ff)' : 'none'}
      borderBottom={'4px solid #90caf9'}
    />
  );
}

export default NaturalKey;
