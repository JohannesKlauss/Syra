import useToneJsTransport from '../tone/useToneJsTransport';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import { useEffect, useRef, useState } from 'react';

export default function usePlayheadAnimation() {
  const transport = useToneJsTransport();
  const pixelPerSeconds = useRecoilValue(arrangeWindowStore.pixelPerSecond);
  const [transportTranslate, setTransportTranslate] = useState(0);
  const animRef = useRef<number>(0);

  const animate = () => {
    setTransportTranslate(transport.seconds * pixelPerSeconds);

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