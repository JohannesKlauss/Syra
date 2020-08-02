import useToneJsTransport from '../tone/useToneJsTransport';
import { useEffect, useRef, useState } from 'react';
import useSecondsToPixel from './useSecondsToPixel';
import { transportStore } from '../../recoil/transportStore';
import { useRecoilValue } from 'recoil/dist';

export default function usePlayheadAnimation() {
  const transport = useToneJsTransport();
  const secondsToPixel = useSecondsToPixel();
  const isRecording = useRecoilValue(transportStore.isRecording);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const [transportTranslate, setTransportTranslate] = useState(0);
  const animRef = useRef<number>(0);

  const animate = () => {
    setTransportTranslate(secondsToPixel(transport.seconds));

    animRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isPlaying || isRecording) {
      animRef.current = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animRef.current);
    }
  }, [isRecording, isPlaying]);

  return transportTranslate;
}