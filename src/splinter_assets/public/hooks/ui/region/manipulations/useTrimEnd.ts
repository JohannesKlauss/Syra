import { useCallback, useContext, useEffect, useState } from 'react';
import { RegionContext } from '../../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../../recoil/regionStore';
import useDeltaTracker from './useDeltaTracker';
import usePixelToSeconds from '../../usePixelToSeconds';
import useSecondsToPixel from '../../useSecondsToPixel';

export default function useTrimEnd() {
  const regionId = useContext(RegionContext);
  const [trimEnd, setTrimEnd] = useRecoilState(regionStore.trimEnd(regionId));
  const trimStart = useRecoilValue(regionStore.trimStart(regionId));
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(regionId));
  const secondsToPixel = useSecondsToPixel();
  const [deltaX, setDeltaX] = useState(secondsToPixel(trimEnd));
  const pixelToSeconds = usePixelToSeconds();

  useEffect(() => {
    setDeltaX(secondsToPixel(trimEnd));
  }, [trimEnd, setDeltaX, secondsToPixel]);

  const onChange = useCallback(delta => {
    let newVal = secondsToPixel(trimEnd) + delta;

    setDeltaX(Math.min(newVal, secondsToPixel(audioBuffer?.duration ?? 0)));
  }, [setDeltaX, secondsToPixel, trimEnd, audioBuffer]);

  const onMouseUp = useCallback(delta => {

    setTrimEnd(currVal => {
      let newVal = Math.min(currVal + pixelToSeconds(delta), audioBuffer?.duration ?? 0);

      newVal = Math.max(newVal, trimStart);

      setDeltaX(secondsToPixel(newVal));

      return newVal;
    });
  }, [setTrimEnd, audioBuffer, setDeltaX, pixelToSeconds, secondsToPixel, trimStart]);

  const triggerTrimEnd = useDeltaTracker(onChange, onMouseUp);

  return {triggerTrimEnd, deltaXTrimEnd: deltaX};
}