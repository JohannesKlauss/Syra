import React from 'react';
import { determineTextColor } from '../../../../utils/color';
import tinycolor from 'tinycolor2';
import { Box, BoxProps, Text } from '@chakra-ui/react';

interface BaseContainerProps {
  isMuted: boolean;
  isMoving: boolean;
  isSelected: boolean;
  color: string;
  left: number;
  top: number;
}

export const BaseContainer: React.FC<BaseContainerProps> = ({
  isMuted,
  isMoving,
  isSelected,
  color,
  left,
  top,
  children,
}) => (
  <Box
    h={'100%'}
    willChange={'transform'}
    pos={'absolute'}
    top={top}
    opacity={isMuted ? 0.5 : 1}
    transform={`translateX(${left}px`}
    border={isSelected ? '2px solid white' : `2px solid ${tinycolor(color).lighten(5).toRgbString()}`}
    zIndex={isMoving || isSelected ? 10 : 1}
    rounded={4}
  >
    {children}
  </Box>
);

interface ManipulationsProps extends BoxProps {
}

export const Manipulations: React.FC<ManipulationsProps> = ({ children, ...props }) => (
  <Box {...props} h={'50%'} w={'100%'} pos={'absolute'} cursor={'grab'} bottom={0} left={0}>
    {children}
  </Box>
);

interface TopBarProps extends BoxProps {
  color: string;
}

export const TopBar: React.FC<TopBarProps> = ({ color, children, ...props }) => (
  <Box
    {...props}
    w={'100%'}
    pos={'absolute'}
    bg={tinycolor(color).darken(5).toRgbString()}
    overflow={'hidden'}
    top={0}
    left={0}
    zIndex={1}
    height={'18px'}
  >
    {children}
  </Box>
);

interface RegionNameProps {
  color: string;
}

export const RegionName: React.FC<RegionNameProps> = ({ color, children }) => (
  <Text
    color={determineTextColor(color)}
    pos={'relative'}
    zIndex={1}
    userSelect={'none'}
    cursor={'text'}
    fontSize={'xs'}
    ml={2}
  >
    {children}
  </Text>
);
