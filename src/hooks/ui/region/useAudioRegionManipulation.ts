import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import useTrimmedRegionWidth from './useTrimmedRegionWidth';
import useSecondsToPixel from '../useSecondsToPixel';
import { RegionContext } from '../../../providers/RegionContext';
import useRegionWidth from './useRegionWidth';

export default function useAudioRegionManipulation() {
  const regionId = useContext(RegionContext);
  const trimStart = useRecoilValue(regionStore.trimStart(regionId));
  const start = useRecoilValue(regionStore.start(regionId));
  const originalWidth = useRegionWidth();
  const trimmedRegionWidth = useTrimmedRegionWidth();
  const secondsToPixel = useSecondsToPixel();
  const [positionWidth, setPositionWidth] = useState(trimmedRegionWidth);
  const [positionLeft, setPositionLeft] = useState(secondsToPixel(trimStart + start));
  const [deltaXTrimStart, setDeltaXTrimStart] = useState(0);
  const [deltaXTrimEnd, setDeltaXTrimEnd] = useState(0);
  const [deltaXMove, setDeltaXMove] = useState(0);

  const trimStartLeftMin = useMemo(() => secondsToPixel(start), [secondsToPixel, start]);
  const left = useMemo(() => Math.max(positionLeft, 0), [positionLeft]);
  const width = useMemo(() => Math.min(positionWidth, originalWidth), [positionWidth, originalWidth]);
  const paddingLeft = useMemo(() => {
    let padding = deltaXTrimStart + secondsToPixel(trimStart);

    if (padding < 0) {
      padding = 0;
    }

    if (left === 0) {
      padding = secondsToPixel(trimStart);
    }

    return padding;
  }, [deltaXTrimStart, secondsToPixel, trimStart, left])

  useEffect(() => {
    let
      left = secondsToPixel(trimStart + start),
      width = trimmedRegionWidth;

    left = deltaXTrimStart < trimmedRegionWidth ? left + deltaXTrimStart + deltaXMove : trimmedRegionWidth - 5;

    if (deltaXTrimStart < 0 && deltaXMove === 0 && left <= trimStartLeftMin) {
      left = trimStartLeftMin;
    }

    if (deltaXTrimStart < trimmedRegionWidth) {
      width -= deltaXTrimStart;
    }

    if (deltaXTrimEnd !== 0 && -deltaXTrimEnd < trimmedRegionWidth) {
      width = width + deltaXTrimEnd;
    }

    if (width < 50) {
      left -= 50 - width;
      width = 50;
    }

    setPositionWidth(width);
    setPositionLeft(left);
  }, [deltaXTrimStart, deltaXTrimEnd, trimStartLeftMin, deltaXMove, trimmedRegionWidth, secondsToPixel, trimStart, start]);

  const onChangeTrimStart = useCallback((deltaX: number) => setDeltaXTrimStart(deltaX), [setDeltaXTrimStart]);
  const onChangeTrimEnd = useCallback((deltaX: number) => setDeltaXTrimEnd(deltaX), [setDeltaXTrimEnd]);
  const onChangeMove = useCallback((deltaX: number) => setDeltaXMove(deltaX), [setDeltaXMove]);

  const onMouseUp = useCallback(() => {
    setDeltaXTrimStart(0);
    setDeltaXTrimEnd(0);
    setDeltaXMove(0);
  }, [setDeltaXTrimStart, setDeltaXTrimEnd, setDeltaXMove]);

 return {
   left,
   width,
   onChangeTrimStart,
   onChangeTrimEnd,
   onChangeMove,
   onMouseUp,
   paddingLeft,
 };
}