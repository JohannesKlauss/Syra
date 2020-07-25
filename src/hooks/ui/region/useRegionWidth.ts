import { useContext, useMemo } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';

export default function useRegionWidth() {
  const id = useContext(RegionContext);
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(id));
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);

  return useMemo(() => pixelPerSecond * (audioBuffer?.duration ?? 0), [audioBuffer, pixelPerSecond]);
}