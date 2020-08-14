import { useCallback, useContext, useEffect, useState } from 'react';
import { RegionContext } from '../../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import useDeltaXTracker from './useDeltaXTracker';
import { regionStore } from '../../../../recoil/regionStore';
import usePixelToSeconds from '../../usePixelToSeconds';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';
import useDuplicateAudioRegion from '../../../recoil/region/useDuplicateAudioRegion';
import useSecondsToPixel from '../../useSecondsToPixel';

export default function useMove() {
  const regionId = useContext(RegionContext);
  const [start, setStart] = useRecoilState(regionStore.start(regionId));
  const trimStart = useRecoilValue(regionStore.trimStart(regionId));
  const pixelToSeconds = usePixelToSeconds();
  const secondsToPixel = useSecondsToPixel();
  const [deltaX, setDeltaX] = useState(secondsToPixel(start));
  const [isMoving, setIsMoving] = useState(false);
  const isPressed = useIsHotkeyPressed();
  const duplicateRegion = useDuplicateAudioRegion();

  useEffect(() => {
    setDeltaX(secondsToPixel(start));
  }, [start, setDeltaX, secondsToPixel]);

  const onChange = useCallback(delta => {
    setDeltaX(Math.max(delta + secondsToPixel(start), -trimStart));
  }, [setDeltaX, secondsToPixel, trimStart, start]);

  const onMouseUp = useCallback(delta => {
    setIsMoving(false);

    if (isPressed('alt')) {
      duplicateRegion(regionId);
    }

    setStart(currVal => {
      const newVal = Math.max(currVal + pixelToSeconds(delta), -trimStart);

      setDeltaX(secondsToPixel(newVal));

      return newVal;
    });
  }, [setStart, trimStart, setDeltaX, pixelToSeconds, isMoving, secondsToPixel, duplicateRegion, isPressed, regionId]);

  const deltaXTrigger = useDeltaXTracker(onChange, onMouseUp);

  const triggerMove = useCallback(e => {
    setIsMoving(true);
    deltaXTrigger(e);
  }, [setIsMoving, deltaXTrigger]);

  return {triggerMove, deltaXMove: deltaX, isMoving};
}