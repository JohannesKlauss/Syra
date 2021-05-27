import React, { useState } from 'react';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';
import { Box, BoxProps } from '@chakra-ui/react';
import ResizableBox from './ResizableBox';

interface Props extends BoxProps {
  dragHandleWidth?: number;
  baseWidth: number;
  baseX: number;
  onPositionChanged: (x: number, width: number, offsetDelta: number) => void;
  onBoxCloned: (x: number, y: number) => void;
  onMotionDragStart?: (width: number, x: number, offset: number) => void;
  onMotionDragEnd?: (width: number, x: number, offset: number) => void;
  minWidth?: number;
  maxWidth?: number;
  snapToY?: number;
  offset?: number;
  lockDrag?: boolean;
  allowOverExtendingStart?: boolean;
  onYChanged?: (offset: number) => boolean;
}

const ClonableResizableBox: React.FC<Props> = ({
  children,
  onBoxCloned,
  onMotionDragStart,
  onMotionDragEnd,
  onPositionChanged,
  onYChanged,
  ...props
}) => {
  const isPressed = useIsHotkeyPressed();
  const [isCloning, setIsCloning] = useState(false);
  const [width, setWidth] = useState(props.baseWidth);
  const [x, setX] = useState(props.baseX);

  const onInternalMotionDragStart = (width: number, x: number, offset: number) => {
    onMotionDragStart && onMotionDragStart(width, x, offset);

    setIsCloning(isPressed('alt'));
    setWidth(width);
    setX(x);
  };

  const onInternalMotionDragEnd = (width: number, x: number, y: number) => {
    if (isCloning && isPressed('alt')) {
      onBoxCloned(x, y);
    } else {
      onMotionDragEnd && onMotionDragEnd(width, x, y);
    }

    setIsCloning(false);
  };

  const onInternalPositionChanged = (start: number, width: number, offsetDelta: number) => {
    if (!isCloning && !isPressed('alt')) {
      onPositionChanged(start, width, offsetDelta);
    }
  };

  return (
    <>
      <ResizableBox
        {...props}
        opacity={isCloning ? 0.6 : undefined}
        onMotionDragStart={onInternalMotionDragStart}
        onPositionChanged={onInternalPositionChanged}
        onMotionDragEnd={onInternalMotionDragEnd}
        onYChanged={y => (!isCloning && onYChanged) ? onYChanged(y) : false}
      >
        {children}
      </ResizableBox>

      {isCloning && (
        <Box pos={'absolute'} w={`${width}px`} left={`${x}px`} ml={`${props.offset}px`}>
          {children}
        </Box>
      )}
    </>
  );
};

export default ClonableResizableBox;
