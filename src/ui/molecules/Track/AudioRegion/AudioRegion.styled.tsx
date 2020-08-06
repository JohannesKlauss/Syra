import { Paper, PaperProps, styled } from '@material-ui/core';
import React, { HTMLAttributes } from 'react';

interface BaseContainerProps {
  isMuted: boolean;
  isMoving: boolean;
  left: number;
}

export const BaseContainer = styled(
  ({ isMuted, isMoving, left, ...other }: BaseContainerProps & Omit<PaperProps, keyof BaseContainerProps>) =>
    <Paper {...other} />,
)({
  margin: 0,
  marginTop: 1,
  height: '100%',
  willChange: 'left',
  position: 'absolute',
  opacity: ({ isMuted }: BaseContainerProps) => isMuted ? 0.5 : 1,
  left: ({ left }: BaseContainerProps) => left,
  border: `2px solid white`,
  zIndex: ({isMoving}: BaseContainerProps) => isMoving ? 10 : 1,
  '&:focus': {
    outline: 'none',
  },
});

interface RegionFirstLoopProps {
  width: number;
  color: string;
}

// The "first loop" is the main region. Every dragged out loop is regarded as second loop and on.
export const RegionFirstLoop = styled(
  ({ width, color, ...other }: RegionFirstLoopProps & Omit<HTMLAttributes<HTMLDivElement>, keyof RegionFirstLoopProps>) =>
    <div {...other} />,
)({
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  width: ({ width }: RegionFirstLoopProps) => width,
  backgroundColor: ({ color }: RegionFirstLoopProps) => color,
});

export const Manipulations = styled('div')({
  height: '50%',
  width: '100%',
  position: 'absolute',
  cursor: 'move',
  bottom: 0,
  left: 0,
});