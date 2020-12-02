import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

interface BaseContainerProps extends BoxProps {
  windowWidth: number;
}

export const BaseContainer: React.FC<BaseContainerProps> = ({ windowWidth, children, ...props }) => (
  <Box {...props} bg={'transparent'} w={windowWidth} pos={'absolute'} top={0} h={'20px'} zIndex={1}>
    {children}
  </Box>
);

interface CycleBarProps extends BoxProps {
  isCycleActive: boolean;
  cycleStartTranslateX: number;
  cycleWidth: number;
}

export const CycleBar: React.FC<CycleBarProps> = ({
  isCycleActive,
  cycleStartTranslateX,
  cycleWidth,
  children,
  ...props
}) => (
  <Box
    zIndex={1}
    pos={'absolute'}
    h={'20px'}
    cursor={'move'}
    opacity={isCycleActive ? 0.7 : 0.3}
    willChange={'transform'}
    transform={`translateX(${cycleStartTranslateX}px)`}
    w={`${cycleWidth}px`}
    bg={'yellow.500'}
    {...props}
  >
    {children}
  </Box>
);

interface CycleHandleProps extends BoxProps {
  isCycleActive: boolean;
}

export const CycleStartHandle: React.FC<CycleHandleProps> = ({ isCycleActive, children, ...props }) => (
  <Box
    w={'20px'}
    cursor={'ew-resize'}
    h={'20px'}
    opacity={isCycleActive ? 0.7 : 0}
    bg={'yellow.500'}
    pos={'absolute'}
    left={0}
    {...props}
  >
    {children}
  </Box>
);

export const CycleEndHandle: React.FC<CycleHandleProps> = ({ isCycleActive, children, ...props }) => (
  <Box
    w={'20px'}
    cursor={'ew-resize'}
    h={'20px'}
    opacity={isCycleActive ? 0.7 : 0}
    bg={'yellow.500'}
    pos={'absolute'}
    right={0}
    {...props}
  >
    {children}
  </Box>
);
