import { useCallback, useContext, useEffect, useState } from 'react';
import { RegionContext } from '../../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil';
import useDeltaTracker from './useDeltaTracker';
import { regionStore } from '../../../../recoil/regionStore';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';
import useDuplicateAudioRegion from '../../../recoil/region/useDuplicateAudioRegion';
import useTrackSwitch from './useTrackSwitch';
import usePixelToQuarter from '../../usePixelToQuarter';
import useQuarterToPixel from '../../useQuarterToPixel';

export default function useMove() {
  const regionId = useContext(RegionContext);
  const [start, setStart] = useRecoilState(regionStore.start(regionId));
  const trimStart = useRecoilValue(regionStore.trimStart(regionId));
  const pixelToQuarter = usePixelToQuarter();
  const quarterToPixel = useQuarterToPixel();
  const [deltaX, setDeltaX] = useState(quarterToPixel(start));
  const [isMoving, setIsMoving] = useState(false);
  const isPressed = useIsHotkeyPressed();
  const duplicateRegion = useDuplicateAudioRegion();
  const { switchTrigger, cssTop } = useTrackSwitch();

  useEffect(() => {
    setDeltaX(quarterToPixel(start));
  }, [start, setDeltaX, quarterToPixel]);

  const onChange = useCallback(delta => {
    setDeltaX(Math.max(delta + quarterToPixel(start), -trimStart));
  }, [setDeltaX, quarterToPixel, trimStart, start]);

  const onMouseUp = useCallback(delta => {
    setIsMoving(false);

    if (isPressed('alt')) {
      duplicateRegion(regionId);
    }

    setStart(currVal => {
      const newVal = Math.max(currVal + pixelToQuarter(delta), -trimStart);

      setDeltaX(quarterToPixel(newVal));

      return newVal;
    });
  }, [setStart, trimStart, setDeltaX, pixelToQuarter, quarterToPixel, duplicateRegion, isPressed, regionId]);

  const deltaXTrigger = useDeltaTracker(onChange, onMouseUp, false);

  const triggerMove = useCallback(e => {
    setIsMoving(true);
    deltaXTrigger(e);
    switchTrigger(e);
  }, [setIsMoving, deltaXTrigger, switchTrigger]);

  return {triggerMove, deltaXMove: deltaX, isMoving, cssTop};
}