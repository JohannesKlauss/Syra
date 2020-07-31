import { useCallback, useRef } from 'react';
import useMovable from '../useMovable';

export default function useDeltaXTracker(onChange: (delta: number) => void, onMouseUp: (delta: number) => void) {
  const initialX = useRef(0);
  const deltaX = useRef(0);

  const onMouseMove = useCallback((e) => {
    deltaX.current = e.clientX - initialX.current;

    onChange(deltaX.current);
  }, [initialX, onChange]);

  const persistDelta = useCallback(() => onMouseUp(deltaX.current), [onMouseUp, deltaX]);

  const movableTrigger = useMovable(onMouseMove, persistDelta);

  return useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();

    initialX.current = e.clientX;
    deltaX.current = 0;

    movableTrigger();
  }, [initialX, deltaX, movableTrigger]);
}