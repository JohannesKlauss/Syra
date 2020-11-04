import { useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import { useCallback } from 'react';

export default function usePixelToQuarter() {
  const zoomedQuarterPixelWidth = useRecoilValue(arrangeWindowStore.zoomedQuarterPixelWidth);

  return useCallback((pixel: number) => pixel / zoomedQuarterPixelWidth, [zoomedQuarterPixelWidth]);
}