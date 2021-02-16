import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import useResizableBox from '../../hooks/ui/useResizableBox';

interface Props extends BoxProps {
  dragHandleWidth?: number;
  baseWidth: number;
  baseX: number;
  offset?: number;
  lockDrag?: boolean;
  allowOverExtendingStart?: boolean;
  onYChanged?: (offset: number) => void;
  onPositionChanged: (x: number, width: number, offsetDelta: number) => void;
}

// TODO: CURRENTLY We HAVE NO MAX WIDTH (like a audio region has a max width) AND NO MECHANISM TO SNAP BACK TO AN EXACT OFFSET OF 0.
const ResizableBox: React.FC<Props> = ({
  baseWidth,
  baseX,
  dragHandleWidth = 8,
  children,
  onPositionChanged,
  offset = 0,
  lockDrag,
  allowOverExtendingStart,
  onYChanged,
  ...props
}) => {
  const { onDragEnd, onMouseDown, onDrag, width, x, ref } = useResizableBox(
    baseWidth,
    baseX,
    dragHandleWidth,
    onPositionChanged,
    onYChanged,
    lockDrag,
    allowOverExtendingStart,
  );

  return (
    <motion.div
      dragElastic={0}
      drag={'x'}
      draggable={!lockDrag}
      dragMomentum={false}
      style={{ width, x, position: 'absolute', zIndex: 1, marginLeft: offset }}
      onDragEnd={onDragEnd}
      onDrag={onDrag}
      onMouseDown={onMouseDown}
      ref={ref}
    >
      <Box
        {...props}
        width={`100%`}
        _before={{
          content: '""',
          cursor: `${lockDrag ? 'vertical-text' : 'ew-resize'}`,
          width: `${dragHandleWidth}px`,
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 1,
        }}
        _after={{
          content: '""',
          cursor: `${lockDrag ? 'vertical-text' : 'ew-resize'}`,
          width: `${dragHandleWidth}px`,
          height: '100%',
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </motion.div>
  );
};

export default ResizableBox;
