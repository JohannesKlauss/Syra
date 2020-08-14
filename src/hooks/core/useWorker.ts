import { useEffect, useRef } from 'react';

export default function useWorker(path: string) {
  const w = useRef<Worker>();

  useEffect(() => {
    w.current = new Worker(path);
  }, []);

  return w;
}