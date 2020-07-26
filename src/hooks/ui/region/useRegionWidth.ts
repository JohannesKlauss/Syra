import { useContext } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import useSecondsToPixel from '../useSecondsToPixel';

export default function useRegionWidth() {
  const id = useContext(RegionContext);
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(id));
  const secondsToPixel = useSecondsToPixel();

  return secondsToPixel(audioBuffer?.duration ?? 0);
}