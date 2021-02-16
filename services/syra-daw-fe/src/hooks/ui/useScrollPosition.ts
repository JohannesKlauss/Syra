import { DependencyList, MutableRefObject, useLayoutEffect, useRef } from 'react';

type UseScrollPosition = (
  effect: (x: number, y: number) => void,
  deps?: DependencyList,
  element?: MutableRefObject<HTMLElement | null>,
  wait?: number
) => void;

function getScrollPosition(element?: MutableRefObject<HTMLElement | null>) {
  return {
    x: element?.current?.scrollLeft ?? 0,
    y: element?.current?.scrollTop ?? 0,
  };
}

// TODO: THIS IS A HORRIBLE IMPLEMENTATION. WE HAVE TO IMPROVE THIS.

const useScrollPosition: UseScrollPosition = (
  effect,
  deps,
  element,
  wait
) => {
  const position = useRef(getScrollPosition(element));

  const callBack = () => {
    const currPos = getScrollPosition(element);
    effect(currPos.x, currPos.y);
    position.current = currPos;
  }

  useLayoutEffect(() => {
    const copiedRef = element?.current;
    let throttleTimeout: any = null;

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    }

    copiedRef?.addEventListener('scroll', handleScroll);

    return () => {
      copiedRef?.removeEventListener('scroll', handleScroll);

      throttleTimeout && clearTimeout(throttleTimeout);
      throttleTimeout = null;
    }
  }, deps)
};

export default useScrollPosition;