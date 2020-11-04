import useDeltaTracker from './useDeltaTracker';
import { useCallback, useContext, useEffect, useState } from 'react';
import { RegionContext } from '../../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil';
import { regionStore } from '../../../../recoil/regionStore';
import usePixelToQuarter from '../../usePixelToQuarter';
import useQuarterToPixel from '../../useQuarterToPixel';

export default function useTrimStart() {
  const regionId = useContext(RegionContext);
  const [trimStart, setTrimStart] = useRecoilState(regionStore.trimStart(regionId));
  const trimEnd = useRecoilValue(regionStore.trimEnd(regionId));
  const pixelToQuarter = usePixelToQuarter();
  const quarterToPixel = useQuarterToPixel();
  const [deltaX, setDeltaX] = useState(trimStart);

  useEffect(() => {
    setDeltaX(quarterToPixel(trimStart));
  }, [trimStart, setDeltaX, quarterToPixel]);

  const onChange = useCallback(delta => {
    setDeltaX(Math.max(quarterToPixel(trimStart) + delta, 0));
  }, [setDeltaX, quarterToPixel, trimStart]);

  const onMouseUp = useCallback(delta => {
    setTrimStart(currVal => {
      let newVal = Math.min(currVal + pixelToQuarter(delta), trimEnd);

      newVal = Math.max(newVal, 0);

      setDeltaX(quarterToPixel(newVal));

      return newVal;
    });
  }, [setTrimStart, trimEnd, setDeltaX, pixelToQuarter, quarterToPixel]);

  const triggerTrimStart = useDeltaTracker(onChange, onMouseUp);

  return {triggerTrimStart, deltaXTrimStart: deltaX};
}