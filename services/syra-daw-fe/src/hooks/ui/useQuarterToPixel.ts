import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import { useRecoilValue } from 'recoil';
import { useCallback } from 'react';

export default function useQuarterToPixel() {
  const zoomedQuarterPixelWidth = useRecoilValue(arrangeWindowStore.zoomedQuarterPixelWidth);

  return useCallback((quarter: number) => quarter * zoomedQuarterPixelWidth, [zoomedQuarterPixelWidth]);
}