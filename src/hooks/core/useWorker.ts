import { useEffect, useRef } from 'react';
import { createIsoWorker } from '../../dfinity/createIsoWorker';

export default function useWorker(path: string) {
  const w = useRef<Worker>();

  useEffect(() => {
    (async () => {
      w.current = await createIsoWorker(path);
    })();
  }, [path]);

  return w;
}