import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import useResizableBox from '../../hooks/ui/useResizableBox';
import { PIANO_ROLL_MIDI_TRACK_HEIGHT } from "../../const/ui";

interface Props extends BoxProps {
  dragHandleWidth?: number;
  baseWidth: number;
  baseX: number;
  minWidth?: number;
  snapToY?: number;
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
  minWidth = 16,
  dragHandleWidth = 8,
  children,
  onPositionChanged,
  offset = 0,
  snapToY = PIANO_ROLL_MIDI_TRACK_HEIGHT,
  lockDrag,
  allowOverExtendingStart,
  onYChanged,
  ...props
}) => {
  const { onDragEnd, onMouseDown, onDrag, width, x, y, ref } = useResizableBox(
    baseWidth,
    baseX,
    dragHandleWidth,
    minWidth,
    onPositionChanged,
    snapToY,
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
      style={{ width, x, y, position: 'absolute', zIndex: 10, marginLeft: offset }}
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
