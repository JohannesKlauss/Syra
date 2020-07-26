import { useContext, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil/dist';
import { projectStore } from '../../../recoil/projectStore';
import { regionStore } from '../../../recoil/regionStore';
import { RegionContext } from '../../../providers/RegionContext';

export default function useRegionSplinterRecordingSync() {
  const regionId = useContext(RegionContext);
  const isSplinterRecording = useRecoilValue(projectStore.isRecording);
  const setIsRecording = useSetRecoilState(regionStore.isRecording(regionId));

  useEffect(() => {
    if (!isSplinterRecording) {
      setIsRecording(false);
    }
  }, [isSplinterRecording, setIsRecording]);
}