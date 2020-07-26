import { Paper, PaperProps, styled } from '@material-ui/core';
import React from 'react';

interface BaseContainerProps {
  color: string;
  isSelected: boolean;
  isMuted: boolean;
  translateX: number;
  width: number;
  isUnderManipulation: boolean;
}

export const Wrapper = styled('div')({
  width: '100%',
  height: '100%',
  position: 'relative',
});

export const BaseContainer = styled(
  ({ color, width, isUnderManipulation, isSelected, isMuted, translateX, ...other }: BaseContainerProps & Omit<PaperProps, keyof BaseContainerProps>) =>
    <Paper {...other} />,
)({
  margin: 0,
  marginTop: 1,
  height: 68,
  willChange: 'transform',
  position: 'absolute',
  overflow: ({ isUnderManipulation }: BaseContainerProps) => isUnderManipulation ? 'initial' : 'hidden',
  width: ({ width }: BaseContainerProps) => width,
  opacity: ({ isMuted }: BaseContainerProps) => isMuted ? 0.5 : 1,
  transform: ({ translateX }: BaseContainerProps) => `translateX(${translateX}px)`,
  backgroundColor: ({ color }: BaseContainerProps) => color,
  border: ({ isSelected, color }: BaseContainerProps) => `2px solid ${isSelected ? 'white' : color}`,
  '&:focus': {
    outline: 'none',
  },
});
