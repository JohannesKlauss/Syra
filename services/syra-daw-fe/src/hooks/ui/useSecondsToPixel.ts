import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';

export default function useSecondsToPixel() {
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);

  return useCallback((seconds: number) => pixelPerSecond * seconds, [pixelPerSecond]);
}