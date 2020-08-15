import { Paper, PaperProps, styled, Theme, Typography, TypographyProps } from '@material-ui/core';
import React, { HTMLAttributes } from 'react';
import { determineTextColor } from '../../../../utils/color';
import tinycolor from 'tinycolor2';

interface BaseContainerProps {
  isMuted: boolean;
  isMoving: boolean;
  isSelected: boolean;
  color: string;
  left: number;
}

export const BaseContainer = styled(
  ({ isMuted, isMoving, isSelected, color, left, ...other }: BaseContainerProps & Omit<PaperProps, keyof BaseContainerProps>) =>
    <Paper {...other} />,
)({
  margin: 0,
  height: '100%',
  willChange: 'transform',
  position: 'absolute',
  opacity: ({ isMuted }: BaseContainerProps) => isMuted ? 0.5 : 1,
  transform: ({ left }: BaseContainerProps) => `translateX(${left}px)`,
  border: ({isSelected, color}: BaseContainerProps) => isSelected ? '2px solid white' : `2px solid ${tinycolor(color).lighten(10).toRgbString()}`,
  zIndex: ({isMoving, isSelected}: BaseContainerProps) => isMoving || isSelected ? 10 : 1,
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
  '&:focus': {
    outline: 'none',
  },
});

interface ManipulationsProps {
  isMoving: boolean;
}

export const Manipulations = styled(
  ({ isMoving, ...other }: ManipulationsProps & Omit<HTMLAttributes<HTMLDivElement>, keyof ManipulationsProps>) =>
    <div {...other} />,
)({
  height: '50%',
  width: '100%',
  position: 'absolute',
  cursor: ({isMoving}: ManipulationsProps) => isMoving ? 'grabbing' : 'grab',
  bottom: 0,
  left: 0,
});

interface TopBarProps {
  color: string;
}

export const TopBar = styled(
  ({ color, ...other }: TopBarProps & Omit<HTMLAttributes<HTMLDivElement>, keyof TopBarProps>) =>
    <div {...other} />,
)<Theme, TopBarProps>(({color}) => ({
  width: '100%',
  position: 'absolute',
  backgroundColor: 'transparent',
  top: 0,
  left: 0,
}));

interface RegionNameProps {
  color: string;
}

export const RegionName = styled(
  ({ color, ...other }: RegionNameProps & Omit<TypographyProps, keyof RegionNameProps>) =>
    <Typography {...other} />,
)<Theme, RegionNameProps>(({color}) => ({
  color: determineTextColor(color),
  position: 'relative',
  display: 'inline-block',
  zIndex: 1,
  cursor: 'text',
  userSelect: 'none',
  fontSize: '11px',
  lineHeight: '11px',
  marginLeft: 15,
}));