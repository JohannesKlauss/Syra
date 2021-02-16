import { PanInfo, useMotionValue } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { DragMode } from '../../types/Ui';
import useSnapPixelValue from './useSnapPixelValue';

export default function useResizableBox(
  baseWidth: number,
  baseX: number,
  dragHandleWidth: number,
  onPositionChanged: (x: number, width: number, offsetDelta: number) => void,
  onYChanged?: (y: number) => void,
  lockDrag?: boolean,
  allowOverExtendingStart?: boolean,
) {
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
    onYChanged && onYChanged(offset.y);

    if (lockDrag) {
      x.set(oldX.get());

      return;
    }

    const snappedOffset = snapPixelValue(offset.x);

    switch (dragMode.current) {
      case DragMode.END_HANDLE:
        width.set(oldWidth.get() + snappedOffset);
        x.set(oldX.get());
        break;
      case DragMode.START_HANDLE:
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

  return {onMouseDown, onDrag, onDragEnd, x, width, ref};
}
