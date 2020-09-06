import { DependencyList, MutableRefObject, useLayoutEffect, useRef } from 'react';

type UseScrollPosition = (
  effect: (x: number) => void,
  deps?: DependencyList,
  element?: MutableRefObject<HTMLElement | null>,
  wait?: number
) => void;

function getScrollPosition(element?: MutableRefObject<HTMLElement | null>) {
  return element?.current ? element.current.scrollLeft : 0;
}

const useScrollPosition: UseScrollPosition = (
  effect,
  deps,
  element,
  wait
) => {
  const position = useRef(getScrollPosition(element));

  let throttleTimeout: any = null;

  const callBack = () => {
    const currPos = getScrollPosition(element);
    effect(currPos);
    position.current = currPos;
    throttleTimeout = null;
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    }

    element?.current && element.current.addEventListener('scroll', handleScroll);

    return () => {
      element?.current && element.current.removeEventListener('scroll', handleScroll);

      throttleTimeout && clearTimeout(throttleTimeout);
    }
  }, deps)
};

export default useScrollPosition;