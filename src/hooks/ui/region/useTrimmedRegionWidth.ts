import { useContext, useMemo } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import useRegionWidth from './useRegionWidth';

export default function useTrimmedRegionWidth() {
  const id = useContext(RegionContext);
  const trimEnd = useRecoilValue(regionStore.trimEnd(id));
  const initialWidth = useRegionWidth();
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);

  return useMemo(() => initialWidth - trimEnd * pixelPerSecond, [initialWidth, trimEnd, pixelPerSecond]);
}