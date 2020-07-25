import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import { useMemo } from 'react';

export default function usePixelToSeconds(pixelPosition: number) {
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);

  return useMemo(() => pixelPosition / pixelPerSecond, [pixelPerSecond, pixelPosition]);
}