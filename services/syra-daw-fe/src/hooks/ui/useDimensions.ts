import { useRef, useState, useEffect, RefObject } from 'react';

export default function useDimensions(ref: RefObject<HTMLElement>) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const resizeObserverRef = useRef<ResizeObserver>();

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect;

        setDimensions({ width, height });
      });
    });

    if (ref.current) {
      ref.current && resizeObserverRef.current.observe(ref.current);
    }

    return () => {
      resizeObserverRef.current?.disconnect();
    };
  }, [ref]);
  return dimensions;
}
