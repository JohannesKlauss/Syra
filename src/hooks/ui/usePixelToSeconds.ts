import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import { useCallback } from 'react';

export default function usePixelToSeconds() {
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);

  return useCallback((pixelPosition: number) => pixelPosition / pixelPerSecond, [pixelPerSecond]);
}