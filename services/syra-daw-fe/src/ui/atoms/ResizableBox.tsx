import { Box, BoxProps } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { motion, PanInfo, useMotionValue } from 'framer-motion';
import { DragMode } from '../../types/Ui';
import useSnapPixelValue from '../../hooks/ui/useSnapPixelValue';

interface Props extends BoxProps {
  dragHandleWidth?: number;
  baseWidth: number;
  baseX: number;
  offset?: number;
  allowOverExtendingStart?: boolean;
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
  allowOverExtendingStart,
  ...props
}) => {
  const width = useMotionValue(baseWidth);
  const oldWidth = useMotionValue(baseWidth);
  const x = useMotionValue(baseX);
  const oldX = useMotionValue(baseX);
  const boxOffset = useRef(0);
  const oldBoxOffset = useRef(0);
  const ref = useRef<HTMLDivElement>(null);
  const dragMode = useRef(DragMode.MOVE);
  const snapPixelValue = useSnapPixelValue(0.25);

  useEffect(() => {
    x.set(baseX);
    oldX.set(baseX);
  }, [baseX, x, oldX]);

  useEffect(() => {
    width.set(baseWidth);
    oldWidth.set(baseWidth);
  }, [baseWidth, width, oldWidth]);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const distance = e.clientX - (ref.current?.getBoundingClientRect().x ?? 0);

    if (distance < dragHandleWidth) {
      dragMode.current = DragMode.START_HANDLE;
    } else if (distance > oldWidth.get() - dragHandleWidth) {
      dragMode.current = DragMode.END_HANDLE;
    } else {
      dragMode.current = DragMode.MOVE;
    }
  };

  const onDrag = (_: MouseEvent, { offset }: PanInfo) => {
    const snappedOffset = snapPixelValue(offset.x);

    switch (dragMode.current) {
      case DragMode.END_HANDLE:
        width.set(oldWidth.get() + snappedOffset);
        x.set(oldX.get());
        break;
      case DragMode.START_HANDLE:
        console.log('oldBoxOffset', oldBoxOffset.current);
        console.log('snappedOffset', snappedOffset);

        if (oldBoxOffset.current + snappedOffset >= 0 || allowOverExtendingStart) {
          width.set(oldWidth.get() - snappedOffset);
          x.set(oldX.get() + snappedOffset);
          boxOffset.current = oldBoxOffset.current + snappedOffset;
        }
        break;
      case DragMode.MOVE:
        x.set(oldX.get() + snappedOffset);
        break;
    }
  };

  const onDragEnd = () => {
    if (x.get() < 0) {
      x.set(0);
    }

    onPositionChanged(x.get(), width.get(), boxOffset.current);
    oldWidth.set(width.get());
    oldX.set(x.get());
    oldBoxOffset.current = boxOffset.current;
  };

  return (
    <motion.div
      dragElastic={0}
      drag={'x'}
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
          cursor: 'ew-resize',
          width: `${dragHandleWidth}px`,
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 1,
        }}
        _after={{
          content: '""',
          cursor: 'ew-resize',
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
