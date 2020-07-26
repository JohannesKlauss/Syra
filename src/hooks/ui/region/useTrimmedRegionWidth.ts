import { useContext } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import useRegionWidth from './useRegionWidth';
import useSecondsToPixel from '../useSecondsToPixel';

export default function useTrimmedRegionWidth() {
  const id = useContext(RegionContext);
  const trimEnd = useRecoilValue(regionStore.trimEnd(id));
  const trimStart = useRecoilValue(regionStore.trimStart(id));
  const initialWidth = useRegionWidth();
  const secondsToPixel = useSecondsToPixel();

  return initialWidth - secondsToPixel(trimEnd) - secondsToPixel(trimStart);
}