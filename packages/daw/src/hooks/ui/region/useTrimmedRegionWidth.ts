import { useContext } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilValue } from 'recoil';
import { regionStore } from '../../../recoil/regionStore';
import useQuarterToPixel from '../useQuarterToPixel';

export default function useTrimmedRegionWidth() {
  const id = useContext(RegionContext);
  const trimEnd = useRecoilValue(regionStore.trimEnd(id));
  const trimStart = useRecoilValue(regionStore.trimStart(id));
  const quarterToPixel = useQuarterToPixel();

  return quarterToPixel(trimEnd) - quarterToPixel(trimStart);
}