import { useContext, useMemo } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { regionStore } from '../../../recoil/regionStore';
import { useRecoilValue } from 'recoil';
import useTrimmedRegionWidth from './useTrimmedRegionWidth';
import useRegionWidth from './useRegionWidth';
import useQuarterToPixel from '../useQuarterToPixel';

export default function useStaticRegionPosition() {
  const regionId = useContext(RegionContext);
  const quarterToPixel = useQuarterToPixel();
  const trimmedRegionWidth = useTrimmedRegionWidth();
  const originalWidth = useRegionWidth();
  const trimStart = useRecoilValue(regionStore.trimStart(regionId));
  const start = useRecoilValue(regionStore.start(regionId));

  const positionLeft = useMemo(() => quarterToPixel(trimStart + start), [quarterToPixel, trimStart, start]);
  const left = useMemo(() => Math.max(positionLeft, 0), [positionLeft]);
  const width = useMemo(() => Math.min(trimmedRegionWidth, originalWidth), [trimmedRegionWidth, originalWidth]);
  const paddingLeft = useMemo(() => {
    let padding = quarterToPixel(trimStart);

    if (padding < 0) {
      padding = 0;
    }

    if (left === 0) {
      padding = quarterToPixel(trimStart);
    }

    return padding;
  }, [quarterToPixel, trimStart, left]);

  return {left, width, paddingLeft};
}