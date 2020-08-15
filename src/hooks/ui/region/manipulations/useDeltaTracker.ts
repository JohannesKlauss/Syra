import { useCallback, useRef } from 'react';
import useMovable from '../../useMovable';

export default function useDeltaTracker(onChange: (delta: number) => void, onMouseUp: (delta: number) => void, stopPropagation: boolean = true, trackY: boolean = false) {
  const initial = useRef(0);
  const delta = useRef(0);

  const onMouseMove = useCallback((e) => {
    delta.current = (trackY ? e.clientY : e.clientX) - initial.current;

    onChange(delta.current);
  }, [initial, onChange]);

  const persistDelta = useCallback(() => onMouseUp(delta.current), [onMouseUp, delta]);

  const movableTrigger = useMovable(onMouseMove, persistDelta);

  return useCallback((e) => {
    if (stopPropagation) {
      e.stopPropagation();
      e.preventDefault();
    }

    initial.current = (trackY ? e.clientY : e.clientX);
    delta.current = 0;

    movableTrigger();
  }, [initial, delta, movableTrigger, stopPropagation]);
}