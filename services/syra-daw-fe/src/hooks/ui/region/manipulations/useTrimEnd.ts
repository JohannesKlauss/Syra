import { useCallback, useContext, useEffect, useState } from 'react';
import { RegionContext } from '../../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil';
import { regionStore } from '../../../../recoil/regionStore';
import useDeltaTracker from './useDeltaTracker';
import usePixelToQuarter from '../../usePixelToQuarter';
import useQuarterToPixel from '../../useQuarterToPixel';

export default function useTrimEnd() {
  const regionId = useContext(RegionContext);
  const [trimEnd, setTrimEnd] = useRecoilState(regionStore.trimEnd(regionId));
  const trimStart = useRecoilValue(regionStore.trimStart(regionId));
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(regionId));
  const pixelToQuarter = usePixelToQuarter();
  const quarterToPixel = useQuarterToPixel();

  const [deltaX, setDeltaX] = useState(quarterToPixel(trimEnd));


  useEffect(() => {
    setDeltaX(quarterToPixel(trimEnd));
  }, [trimEnd, setDeltaX, quarterToPixel]);

  const onChange = useCallback(delta => {
    let newVal = quarterToPixel(trimEnd) + delta;

    setDeltaX(Math.min(newVal, quarterToPixel(audioBuffer?.duration ?? 0)));
  }, [setDeltaX, quarterToPixel, trimEnd, audioBuffer]);

  const onMouseUp = useCallback(delta => {

    setTrimEnd(currVal => {
      let newVal = Math.min(currVal + pixelToQuarter(delta), audioBuffer?.duration ?? 0);

      newVal = Math.max(newVal, trimStart);

      setDeltaX(quarterToPixel(newVal));

      return newVal;
    });
  }, [setTrimEnd, audioBuffer, setDeltaX, pixelToQuarter, quarterToPixel, trimStart]);

  const triggerTrimEnd = useDeltaTracker(onChange, onMouseUp);

  return {triggerTrimEnd, deltaXTrimEnd: deltaX};
}