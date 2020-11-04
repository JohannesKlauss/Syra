import { useEffect, useRef } from 'react';

const clear = id => clearInterval(id);

export default function useInterval(callback, delay) {
  const savedCallback = useRef<CallableFunction>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);

      return () => clear(id);
    }
  }, [delay]);

  return clear;
}