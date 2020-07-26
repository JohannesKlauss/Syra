import useToneJsTransport from '../tone/useToneJsTransport';
import { useEffect, useRef, useState } from 'react';
import useSecondsToPixel from './useSecondsToPixel';

export default function usePlayheadAnimation() {
  const transport = useToneJsTransport();
  const secondsToPixel = useSecondsToPixel();
  const [transportTranslate, setTransportTranslate] = useState(0);
  const animRef = useRef<number>(0);

  const animate = () => {
    setTransportTranslate(secondsToPixel(transport.seconds));

    animRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
    }
  });

  return transportTranslate;
}