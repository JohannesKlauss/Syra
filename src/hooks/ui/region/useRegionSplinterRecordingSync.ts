import { useContext, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import { RegionContext } from '../../../providers/RegionContext';
import { transportStore } from '../../../recoil/transportStore';

export default function useRegionSplinterRecordingSync() {
  const regionId = useContext(RegionContext);
  const isSplinterRecording = useRecoilValue(transportStore.isRecording);
  const setIsRecording = useSetRecoilState(regionStore.isRecording(regionId));

  useEffect(() => {
    if (!isSplinterRecording) {
      setIsRecording(false);
    }
  }, [isSplinterRecording, setIsRecording]);
}