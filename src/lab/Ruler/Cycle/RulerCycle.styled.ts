import { Box, styled } from '@material-ui/core';
import { ARRANGE_GRID_OFFSET } from '../../../const/ui';
import { amber } from '@material-ui/core/colors';

interface BaseContainerProps {
  windowWidth: number;
}

export const BaseContainer = styled(Box)({
  backgroundColor: 'transparent',
  width: ({ windowWidth }: BaseContainerProps) => windowWidth,
  position: 'absolute',
  top: 0,
  height: 20,
  marginLeft: ARRANGE_GRID_OFFSET,
  zIndex: 1,
});

interface CycleBarProps {
  isCycleActive: boolean;
  cycleStartTranslateX: number;
  cycleWidth: number;
}

export const CycleBar = styled('div')({
  zIndex: 1,
  position: 'absolute',
  height: 20,
  marginLeft: 6,
  cursor: 'move',
  opacity: ({ isCycleActive }: CycleBarProps) => isCycleActive ? 0.7 : 0.3,
  willChange: 'transform',
  transform: ({ cycleStartTranslateX }: CycleBarProps) => `translateX(${cycleStartTranslateX}px)`,
  width: ({ cycleWidth }: CycleBarProps) => cycleWidth,
  backgroundColor: amber[500],
});

interface CycleHandleProps {
  isCycleActive: boolean;
}

export const CycleStartHandle = styled('div')({
  width: 20,
  cursor: 'ew-resize',
  height: 20,
  opacity: ({ isCycleActive }: CycleHandleProps) => isCycleActive ? 0.7 : 0.0,
  backgroundColor: amber[500],
  position: 'absolute',
  left: 0,
});

export const CycleEndHandle = styled('div')({
  width: 20,
  cursor: 'ew-resize',
  height: 20,
  opacity: ({ isCycleActive }: CycleHandleProps) => isCycleActive ? 0.7 : 0.0,
  backgroundColor: amber[500],
  position: 'absolute',
  right: 0,
  zIndex: 2,
});