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
  const offset = useRecoilValue(regionStore.offset(regionId));
  const start = useRecoilValue(regionStore.start(regionId));

  const positionLeft = useMemo(() => quarterToPixel(offset + start), [quarterToPixel, offset, start]);
  const left = useMemo(() => Math.max(positionLeft, 0), [positionLeft]);
  const width = useMemo(() => Math.min(trimmedRegionWidth, originalWidth), [trimmedRegionWidth, originalWidth]);
  const paddingLeft = useMemo(() => {
    let padding = quarterToPixel(offset);

    if (padding < 0) {
      padding = 0;
    }

    if (left === 0) {
      padding = quarterToPixel(offset);
    }

    return padding;
  }, [quarterToPixel, offset, left]);

  return {left, width, paddingLeft};
}