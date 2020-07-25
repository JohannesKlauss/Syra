import { useMemo } from 'react';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';

export default function useSecondsToPixel(seconds: number) {
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);

  return useMemo(() => pixelPerSecond * seconds, [pixelPerSecond, seconds]);
}