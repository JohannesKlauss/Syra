import { Divider, DividerProps, Paper, styled } from '@material-ui/core';
import React from 'react';

interface ColoredDividerProps {
  channelColor: string;
}

export const ColoredDivider = styled(
  ({ channelColor, ...other }: ColoredDividerProps & Omit<DividerProps, keyof ColoredDividerProps>) => <Divider {...other} />,
)({
  backgroundColor: ({channelColor}: ColoredDividerProps) => channelColor,
});

export const SmrContainer = styled(Paper)({
  padding: 10,
  background: 'transparent',
});