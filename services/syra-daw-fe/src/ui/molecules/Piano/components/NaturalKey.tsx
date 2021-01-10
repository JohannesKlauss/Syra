import { Flex, FlexProps } from "@chakra-ui/react";
import React from 'react';

interface Props extends FlexProps {
  isActive: boolean;
  baseHeight?: number;
  renderVertical?: boolean;
}

function NaturalKey({ isActive, baseHeight = 205, renderVertical, width, ...props }: Props) {
  const height = isActive ? `${baseHeight * 1.024}px` : `${baseHeight}px`;

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
      width={renderVertical ? height : width}
      height={renderVertical ? width : height}
      backgroundImage={isActive ? 'linear-gradient(#42c9ff, #28e6ff)' : 'none'}
      borderBottom={renderVertical ? '1px solid #4a5568' : '4px solid #90caf9'}
    />
  );
}

NaturalKey.whyDidYouRender = true;

export default NaturalKey;
