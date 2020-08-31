import useToneJsTransport from '../tone/useToneJsTransport';
import { useEffect, useRef, useState } from 'react';
import useSecondsToPixel from './useSecondsToPixel';
import { transportStore } from '../../recoil/transportStore';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';

export default function usePlayheadAnimation() {
  const transport = useToneJsTransport();
  const secondsToPixel = useSecondsToPixel();
  const isRecording = useRecoilValue(transportStore.isRecording);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const playheadPosition = useRecoilValue(arrangeWindowStore.playheadPosition);
  const [transportTranslate, setTransportTranslate] = useState(secondsToPixel(transport.seconds));
  const animRef = useRef<number>(0);
  const scrolled = useRef<boolean>(false);
  const viewportWidth = useRecoilValue(arrangeWindowStore.viewportWidth);
  const arrangeWindowRef = useRecoilValue(arrangeWindowStore.ref);

  const animate = () => {
    setTransportTranslate(secondsToPixel(transport.seconds));

    const mod = secondsToPixel(transport.seconds) % viewportWidth;

    if (mod > viewportWidth - 30 && !scrolled.current) {
      arrangeWindowRef?.current?.scrollTo({
        left: (arrangeWindowRef?.current?.scrollLeft ?? 0) + viewportWidth,
      });

      scrolled.current = true;
    }
    else if (mod < 30 && scrolled.current) {
      scrolled.current = false;
    }

    animRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isPlaying || isRecording) {
      animRef.current = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animRef.current);
    }
  }, [isRecording, isPlaying, secondsToPixel, viewportWidth]);

  useEffect(() => {
    if (!isPlaying && !isRecording) {
      setTransportTranslate(playheadPosition);
    }
  }, [playheadPosition, setTransportTranslate, isPlaying, isRecording]);

  return transportTranslate;
}