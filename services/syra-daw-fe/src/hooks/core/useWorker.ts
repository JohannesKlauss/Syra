import { useCallback, useRef } from "react";

export default function useWorker(path: string) {
  const instance = useRef<Worker | null>(null);

  const dispose = useCallback(() => {
    instance.current?.terminate();
    instance.current = null;
  }, [instance]);

  const startUp = useCallback(() => {
    if (instance.current === null) {
      instance.current = new Worker(path);
    }

    return instance.current;
  }, [instance]);

  return { dispose, startUp };
}
