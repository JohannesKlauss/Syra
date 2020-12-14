import useToneJsTransport from '../tone/useToneJsTransport';
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { transportStore } from '../../recoil/transportStore';
import { useRecoilValue } from 'recoil';
import { ViewContext } from "../../providers/ViewContext";
import { gridStore } from "../../recoil/gridStore";

export default function usePlayheadAnimation() {
  const view = useContext(ViewContext);
  const transport = useToneJsTransport();
  const isRecording = useRecoilValue(transportStore.isRecording);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const playheadPosition = useRecoilValue(gridStore.playheadPosition(view));
  const [transportTranslate, setTransportTranslate] = useState(playheadPosition);
  const animRef = useRef<number>(0);
  const scrolled = useRef<boolean>(false);
  const lastSeconds = useRef<number>(transport.seconds);
  const currentTranslate = useRef<number>(transportTranslate);
  const viewportWidth = useRecoilValue(gridStore.viewWidth(view));
  const arrangeWindowRef = useRecoilValue(gridStore.ref(view));
  const pixelPerSecond = useRecoilValue(gridStore.pixelPerSecond(view));
  const secondsToPixel = useCallback((seconds: number) => pixelPerSecond * seconds, [pixelPerSecond]);

  const animate = () => {
    // If we are in a loop, or reset the playhead to a different position, we need to reset the currentTranslate value.
    if (transport.seconds < lastSeconds.current) {
      currentTranslate.current = secondsToPixel(transport.seconds);
    }
    else {
      currentTranslate.current += secondsToPixel(transport.seconds - lastSeconds.current);
    }

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
      setTransportTranslate(playheadPosition);
      currentTranslate.current = playheadPosition;
      lastSeconds.current = transport.seconds;

      cancelAnimationFrame(animRef.current);
    }

    return () => {
      cancelAnimationFrame(animRef.current);
    }
  }, [isRecording, isPlaying, secondsToPixel, animRef, playheadPosition, setTransportTranslate, transport, currentTranslate]);

  return transportTranslate;
}