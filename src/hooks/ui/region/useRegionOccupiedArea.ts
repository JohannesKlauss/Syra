import useTrimmedRegionWidth from './useTrimmedRegionWidth';
import { regionStore } from '../../../recoil/regionStore';
import { useRecoilValue } from 'recoil/dist';
import { useContext } from 'react';
import { RegionContext } from '../../../providers/RegionContext';

export default function useRegionOccupiedArea() {
  const regionId = useContext(RegionContext);
  const trimmedWidth = useTrimmedRegionWidth();
  const start = useRecoilValue(regionStore.start(regionId));

  return [start, start + trimmedWidth];
}