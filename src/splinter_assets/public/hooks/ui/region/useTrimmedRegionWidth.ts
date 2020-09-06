import { useContext } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import useSecondsToPixel from '../useSecondsToPixel';

export default function useTrimmedRegionWidth() {
  const id = useContext(RegionContext);
  const trimEnd = useRecoilValue(regionStore.trimEnd(id));
  const trimStart = useRecoilValue(regionStore.trimStart(id));
  const secondsToPixel = useSecondsToPixel();

  return secondsToPixel(trimEnd) - secondsToPixel(trimStart);
}