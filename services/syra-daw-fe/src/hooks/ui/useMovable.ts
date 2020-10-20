import { useCallback, useEffect, useState } from 'react';

export default function useMovable(onMouseMove: (e: Event) => void, onMouseUp?: (e: Event) => void) {
  const [isDragging, setIsDragging] = useState(false);

  const mouseUp = useCallback(e => {
    setIsDragging(false);

    onMouseUp && onMouseUp(e);
  }, [onMouseUp]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', mouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', mouseUp);
    }
  }, [isDragging, onMouseMove, mouseUp])

  return () => setIsDragging(true);
}