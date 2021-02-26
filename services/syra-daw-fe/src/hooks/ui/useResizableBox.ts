import { PanInfo, useMotionValue } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { DragMode } from '../../types/Ui';
import useSnapPixelValue from './useSnapPixelValue';
import { snap } from "../../utils/numbers";

export default function useResizableBox(
  baseWidth: number,
  baseX: number,
  dragHandleWidth: number,
  minWidth: number,
  onPositionChanged: (x: number, width: number, offsetDelta: number) => void,
  snapToY: number,
  onYChanged?: (y: number) => void,
  lockDrag?: boolean,
  allowOverExtendingStart?: boolean,
) {
  const width = useMotionValue(baseWidth);
  const oldWidth = useMotionValue(baseWidth);
  const x = useMotionValue(baseX);
  const oldX = useMotionValue(baseX);
  const y = useMotionValue(0);
  const boxOffset = useRef(0);
  const oldBoxOffset = useRef(0);
  const ref = useRef<HTMLDivElement>(null);
  const dragMode = useRef(DragMode.MOVE);
  const snapPixelValue = useSnapPixelValue();

  useEffect(() => {
    console.log('set x to', baseX);

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
    if (lockDrag) {
      onYChanged && onYChanged(offset.y);

      x.set(oldX.get());

      return;
    }

    //if (Math.abs(offset.x) < 4 && Math.abs(offset.y) > 0) {
      y.set(snap(snapToY, offset.y));
    //}

    switch (dragMode.current) {
      case DragMode.END_HANDLE:
        width.set(Math.max(minWidth, snapPixelValue(oldWidth.get() + offset.x)));
        x.set(oldX.get());
        break;
      case DragMode.START_HANDLE:
        if (snapPixelValue(oldBoxOffset.current + offset.x) >= 0 || allowOverExtendingStart) {
          const newX = snapPixelValue(oldX.get() + offset.x)

          x.set(newX);
          width.set(Math.max(minWidth, oldWidth.get() + (oldX.get() - newX)));

          boxOffset.current = oldBoxOffset.current + offset.x;
        }
        break;
      case DragMode.MOVE:
        x.set(snapPixelValue(oldX.get() + offset.x));
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

    if (y.get() !== 0 && onYChanged && !lockDrag) {
      onYChanged(y.get());
    }
  };

  return {onMouseDown, onDrag, onDragEnd, x, y, width, ref};
}
