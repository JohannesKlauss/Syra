import {Box, BoxProps} from '@chakra-ui/react';
import React, {useRef} from 'react';
import {motion, PanInfo, useMotionValue} from 'framer-motion';
import {DragMode} from "../../types/Ui";

interface Props extends BoxProps {
  dragHandleWidth?: number;
  baseWidth: number;
  onPositionChanged: (x: number, width: number) => void;
}

const ResizableBox: React.FC<Props> = ({baseWidth, dragHandleWidth = 4, children, onPositionChanged, ...props}) => {
  const width = useMotionValue(baseWidth);
  const oldWidth = useMotionValue(baseWidth);
  const x = useMotionValue(0);
  const oldX = useMotionValue(0);
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
    }
  };

  const onDragEnd = () => {
    onPositionChanged(x.get(), width.get());
    oldWidth.set(width.get());
    oldX.set(x.get());
  }

  console.log('width', width.get());

  return (
    <motion.div dragElastic={0} drag={'x'} dragMomentum={false} style={{width, x, position: 'relative'}}
                onDragEnd={onDragEnd} onDrag={onDrag} onMouseDown={onMouseDown} ref={ref}>
        <Box {...props} width={`100%`}>
          {children}
        </Box>
    </motion.div>
  );
};

export default ResizableBox;
