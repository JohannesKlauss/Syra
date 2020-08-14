import useDeltaXTracker from './useDeltaXTracker';
import { useCallback, useContext, useEffect, useState } from 'react';
import { RegionContext } from '../../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../../recoil/regionStore';
import usePixelToSeconds from '../../usePixelToSeconds';
import useSecondsToPixel from '../../useSecondsToPixel';

export default function useTrimStart() {
  const regionId = useContext(RegionContext);
  const [trimStart, setTrimStart] = useRecoilState(regionStore.trimStart(regionId));
  const trimEnd = useRecoilValue(regionStore.trimEnd(regionId));
  const pixelToSeconds = usePixelToSeconds();
  const secondsToPixel = useSecondsToPixel();
  const [deltaX, setDeltaX] = useState(trimStart);

  useEffect(() => {
    setDeltaX(secondsToPixel(trimStart));
  }, [trimStart, setDeltaX, secondsToPixel]);

  const onChange = useCallback(delta => {
    setDeltaX(Math.max(secondsToPixel(trimStart) + delta, 0));
  }, [setDeltaX, secondsToPixel, trimStart]);

  const onMouseUp = useCallback(delta => {
    setTrimStart(currVal => {
      let newVal = Math.min(currVal + pixelToSeconds(delta), trimEnd);

      newVal = Math.max(newVal, 0);

      setDeltaX(secondsToPixel(newVal));

      return newVal;
    });
  }, [setTrimStart, trimEnd, setDeltaX, pixelToSeconds, secondsToPixel]);

  const triggerTrimStart = useDeltaXTracker(onChange, onMouseUp);

  return {triggerTrimStart, deltaXTrimStart: deltaX};
}