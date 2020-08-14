import { RefObject, useCallback, useRef } from 'react';
import useMovable from './useMovable';

type Pos = {x: number, y: number};

export default function useMovementTracker(onChange: (pos: Pos) => void, onMouseUp: (pos: Pos) => void, divRef: RefObject<HTMLDivElement>) {
  const pos = useRef<Pos>({x: 0, y: 0});

  const onMouseMove = useCallback((e) => {
    pos.current = {
      x: e.clientX - (divRef.current?.getBoundingClientRect().left ?? 0),
      y: e.clientY - (divRef.current?.getBoundingClientRect().top ?? 0),
    };

    onChange(pos.current);
  }, [onChange, divRef]);

  const persistDelta = useCallback(() => onMouseUp(pos.current), [onMouseUp, pos]);

  const movableTrigger = useMovable(onMouseMove, persistDelta);

  return useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();

    pos.current = {
      x: e.clientX - (divRef.current?.getBoundingClientRect().left ?? 0),
      y: e.clientY - (divRef.current?.getBoundingClientRect().top ?? 0),
    };

    movableTrigger();
  }, [pos, movableTrigger, divRef]);
}