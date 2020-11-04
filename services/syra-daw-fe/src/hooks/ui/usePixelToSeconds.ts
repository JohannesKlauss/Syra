import { useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import { useCallback } from 'react';

export default function usePixelToSeconds() {
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);

  return useCallback((pixelPosition: number) => pixelPosition / pixelPerSecond, [pixelPerSecond]);
}