import { useRecoilCallback, useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { transportStore } from '../../../recoil/transportStore';
import { Bar } from '../../../types/Ui';

export default function useBarAtPixel() {
  const zoomedQuarterPixelWidth = useRecoilValue(arrangeWindowStore.zoomedQuarterPixelWidth);

  return useRecoilCallback(({snapshot}) => (x: number) => {
    const zoomedQuarterPixelWidth = snapshot.getLoadable(arrangeWindowStore.zoomedQuarterPixelWidth).contents as number;

    return snapshot.getLoadable(transportStore.barAtQuarter(x / zoomedQuarterPixelWidth)).contents as Bar | undefined;
  }, [zoomedQuarterPixelWidth]);
}