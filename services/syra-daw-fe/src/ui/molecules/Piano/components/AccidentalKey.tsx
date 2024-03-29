import { Flex, FlexProps } from '@chakra-ui/react';
import React from "react";

interface Props extends FlexProps {
  isActive: boolean;
  renderVertical?: boolean;
}

const AccidentalKey: React.FC<Props> = ({isActive, height = 120, renderVertical, width, left, ...props}) => {
  return (
    <Flex
      {...props}
      zIndex={1}
      borderWidth={'1px'}
      borderColor={'#000'}
      borderBottomRightRadius={'0.125rem'}
      borderBottomLeftRadius={'0.125rem'}
      bg={'#2d3748'}
      cursor={'pointer'}
      userSelect={'none'}
      transition={'all 200ms'}
      height={renderVertical ? width : height}
      width={renderVertical ? height : width}
      pos={'absolute'}
      top={renderVertical ? left : 0}
      left={renderVertical ? 0 : left}
      backgroundImage={isActive ? 'linear-gradient(#42c9ff, #28e6ff)' : 'none'}
      boxShadow={
        '-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)'
      }
    />
  );
};

// @ts-ignore
AccidentalKey.whyDidYouRender = true;

export default AccidentalKey;
