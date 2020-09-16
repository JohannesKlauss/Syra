import { useContext } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilValue } from 'recoil';
import { regionStore } from '../../../recoil/regionStore';
import useSecondsToPixel from '../useSecondsToPixel';

// THIS IS THE ORIGINAL REGION WIDTH WITH UNALTERED START AND END. FOR THE CURRENT REPRESENTATION OF REGION, USE useTrimmedRegionWidth
export default function useRegionWidth() {
  const id = useContext(RegionContext);
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(id));
  const secondsToPixel = useSecondsToPixel();

  return secondsToPixel(audioBuffer?.duration ?? 0);
}