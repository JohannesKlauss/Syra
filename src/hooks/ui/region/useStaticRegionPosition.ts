import { useContext, useMemo } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { regionStore } from '../../../recoil/regionStore';
import { useRecoilValue } from 'recoil/dist';
import useSecondsToPixel from '../useSecondsToPixel';
import useTrimmedRegionWidth from './useTrimmedRegionWidth';
import useRegionWidth from './useRegionWidth';

export default function useStaticRegionPosition() {
  const regionId = useContext(RegionContext);
  const secondsToPixel = useSecondsToPixel();
  const trimmedRegionWidth = useTrimmedRegionWidth();
  const originalWidth = useRegionWidth();
  const trimStart = useRecoilValue(regionStore.trimStart(regionId));
  const start = useRecoilValue(regionStore.start(regionId));

  const positionLeft = useMemo(() => secondsToPixel(trimStart + start), [secondsToPixel, trimStart, start]);
  const left = useMemo(() => Math.max(positionLeft, 0), [positionLeft]);
  const width = useMemo(() => Math.min(trimmedRegionWidth, originalWidth), [trimmedRegionWidth, originalWidth]);
  const paddingLeft = useMemo(() => {
    let padding = secondsToPixel(trimStart);

    if (padding < 0) {
      padding = 0;
    }

    if (left === 0) {
      padding = secondsToPixel(trimStart);
    }

    return padding;
  }, [secondsToPixel, trimStart, left]);

  return {left, width, paddingLeft};
}