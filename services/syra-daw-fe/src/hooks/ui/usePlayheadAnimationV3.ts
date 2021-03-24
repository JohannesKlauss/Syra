import useToneJsTransport from "../tone/useToneJsTransport";
import {useRecoilValue} from "recoil";
import {transportStore} from "../../recoil/transportStore";
import {useMotionValue} from "framer-motion";
import {useContext, useEffect, useRef} from "react";
import {ViewContext} from "../../providers/ViewContext";
import useTicksToPixel from "../tone/useTicksToPixel";
import {gridStore} from "../../recoil/gridStore";

export default function usePlayheadAnimationV3() {
  const { view, viewRef } = useContext(ViewContext);
  const transport = useToneJsTransport();
  const isRecording = useRecoilValue(transportStore.isRecording);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const viewportWidth = useRecoilValue(gridStore.viewWidth(view));
  const x = useMotionValue(0);
  const animRef = useRef<number>(0);
  const ticksToPixel = useTicksToPixel();
  const hasScrolled = useRef<boolean>(false);
  const seconds = useRecoilValue(transportStore.seconds);

  useEffect(() => {
    x.set(ticksToPixel(transport.ticks));
  }, [seconds, x, ticksToPixel]);

  const animate = () => {
    const pixelPosition = ticksToPixel(transport.ticks);

    x.set(pixelPosition);

    const boundary = viewportWidth - 280;
    const mod = pixelPosition % boundary;

    if (mod - boundary >= -10 && !hasScrolled.current) {
      viewRef?.current?.scrollTo({
        left: (viewRef?.current?.scrollLeft ?? 0) + boundary,
      });

      hasScrolled.current = true;
    }
    else if (mod - boundary < -10 && hasScrolled.current) {
      hasScrolled.current = false;
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
  }, [isRecording, isPlaying, ticksToPixel, animRef, transport]);

  return x;
}