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

  useEffect(() => {
    if (!isPlaying && !isRecording) {
      setTransportTranslate(playheadPosition);
    }
  }, [playheadPosition, setTransportTranslate, isPlaying, isRecording]);

  return transportTranslate;
}