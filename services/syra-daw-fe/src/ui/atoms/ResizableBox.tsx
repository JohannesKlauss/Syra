import {Box, BoxProps} from '@chakra-ui/react';
import React, {useRef} from 'react';
import {motion, PanInfo, useMotionValue} from 'framer-motion';
import {DragMode} from "../../types/Ui";

interface Props extends BoxProps {
  dragHandleWidth?: number;
  baseWidth: number;
  baseX: number;
  onPositionChanged: (x: number, width: number) => void;
}

const ResizableBox: React.FC<Props> = ({baseWidth, baseX, dragHandleWidth = 8, children, onPositionChanged, ...props}) => {
  const width = useMotionValue(baseWidth);
  const oldWidth = useMotionValue(baseWidth);
  const x = useMotionValue(baseX);
  const oldX = useMotionValue(baseX);
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
        width.set(oldWidth.get() - offset.x);
        x.set(oldX.get() + offset.x);
        break;
      case DragMode.MOVE:
        x.set(oldX.get() + offset.x);
        break;
    }
  };

  const onDragEnd = (e: MouseEvent | TouchEvent | PointerEvent) => {
    onPositionChanged(x.get(), width.get());
    oldWidth.set(width.get());
    oldX.set(x.get());
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
