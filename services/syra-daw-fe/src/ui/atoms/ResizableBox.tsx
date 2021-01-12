import {Box, BoxProps} from '@chakra-ui/react';
import React, {useRef} from 'react';
import {motion, PanInfo, useMotionValue} from 'framer-motion';
import {DragMode} from "../../types/Ui";

interface Props extends BoxProps {
  dragHandleWidth?: number;
  baseWidth: number;
  baseX: number;
  onPositionChanged: (x: number, width: number, offsetDelta: number) => void;
}

// TODO: CURRENTLY We HAVE NO MAX WIDTH (like a audio region has a max width) AND NO MECHANISM TO SNAP BACK TO AN EXACT OFFSET OF 0.
const ResizableBox: React.FC<Props> = ({baseWidth, baseX, dragHandleWidth = 8, children, onPositionChanged, ...props}) => {
  const width = useMotionValue(baseWidth);
  const oldWidth = useMotionValue(baseWidth);
  const x = useMotionValue(baseX);
  const oldX = useMotionValue(baseX);
  const boxOffset = useRef(0);
  const oldBoxOffset = useRef(0);
  const ref = useRef<HTMLDivElement>(null);
  const dragMode = useRef(DragMode.MOVE);

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

  const onDrag = (_: MouseEvent, {offset}: PanInfo) => {
    switch (dragMode.current) {
      case DragMode.END_HANDLE:
        width.set(oldWidth.get() + offset.x);
        x.set(oldX.get());
        break;
      case DragMode.START_HANDLE:
        if (oldBoxOffset.current + offset.x >= 0) {
          width.set(oldWidth.get() - offset.x);
          x.set(oldX.get() + offset.x);
          boxOffset.current = oldBoxOffset.current + offset.x;
        }
        break;
      case DragMode.MOVE:
        x.set(oldX.get() + offset.x);
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
  }

  return (
    <motion.div dragElastic={0} drag={'x'} dragMomentum={false} style={{width, x, position: 'absolute', zIndex: 1}}
                onDragEnd={onDragEnd} onDrag={onDrag} onMouseDown={onMouseDown} ref={ref}>
      <Box {...props} width={`100%`}>
        {children}
      </Box>
    </motion.div>
  );
};

export default ResizableBox;
