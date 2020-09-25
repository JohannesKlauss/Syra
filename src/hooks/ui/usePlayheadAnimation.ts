import useToneJsTransport from '../tone/useToneJsTransport';
import { useEffect, useRef, useState } from 'react';
import useSecondsToPixel from './useSecondsToPixel';
import { transportStore } from '../../recoil/transportStore';
import { useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';

export default function usePlayheadAnimation() {
  const transport = useToneJsTransport();
  const secondsToPixel = useSecondsToPixel();
  const isRecording = useRecoilValue(transportStore.isRecording);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const playheadPosition = useRecoilValue(arrangeWindowStore.playheadPosition);
  const [transportTranslate, setTransportTranslate] = useState(playheadPosition);
  const animRef = useRef<number>(0);
  const scrolled = useRef<boolean>(false);
  const lastSeconds = useRef<number>(transport.seconds);
  const currentTranslate = useRef<number>(transportTranslate);
  const viewportWidth = useRecoilValue(arrangeWindowStore.viewportWidth);
  const arrangeWindowRef = useRecoilValue(arrangeWindowStore.ref);

  const animate = () => {
    currentTranslate.current += secondsToPixel(transport.seconds - lastSeconds.current);
    lastSeconds.current = transport.seconds;

    setTransportTranslate(currentTranslate.current);

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
    } else {
      cancelAnimationFrame(animRef.current);
    }

    return () => {
      cancelAnimationFrame(animRef.current);
    }
  }, [isRecording, isPlaying, secondsToPixel, animRef]);

  useEffect(() => {
    if (!isPlaying && !isRecording) {
      setTransportTranslate(playheadPosition);
      currentTranslate.current = playheadPosition;
      lastSeconds.current = transport.seconds;
    }
  }, [playheadPosition, setTransportTranslate, isPlaying, isRecording, lastSeconds, currentTranslate, transport]);

  return transportTranslate;
}