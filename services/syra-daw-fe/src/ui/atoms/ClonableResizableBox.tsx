import React, { useState } from "react";
import { useIsHotkeyPressed } from "react-hotkeys-hook";
import { Box, BoxProps } from '@chakra-ui/react';
import ResizableBox from "./ResizableBox";

interface Props extends BoxProps {
  dragHandleWidth?: number;
  baseWidth: number;
  baseX: number;
  onPositionChanged: (x: number, width: number, offsetDelta: number) => void;
  onClonedBox: (x: number) => void;
  minWidth?: number;
  snapToY?: number;
  offset?: number;
  lockDrag?: boolean;
  allowOverExtendingStart?: boolean;
  onYChanged?: (offset: number) => void;
}

const ClonableResizableBox: React.FC<Props> = ({ children, onClonedBox, ...props }) => {
  const isPressed = useIsHotkeyPressed();
  const [isMoving, setIsMoving] = useState(false);
  const [isCloning, setIsCloning] = useState(false);
  const [width, setWidth] = useState(props.baseWidth);
  const [x, setX] = useState(props.baseX);

  const onMotionDragStart = (width: number, x: number) => {
    setIsCloning(isPressed('alt'));
    setIsMoving(true);
    setWidth(width);
    setX(x);
  }

  const onDragEnd = (_: number, x: number) => {
    isCloning && onClonedBox(x);

    setIsCloning(false);
    setIsMoving(false);
  };

  return (
    <>
      <ResizableBox {...props} opacity={isCloning ? 0.6 : undefined} onMotionDragStart={onMotionDragStart} onMotionDragEnd={onDragEnd}>
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
