import { RegionContext } from "../../../providers/RegionContext";
import { useContext, useEffect } from "react";
import { regionStore } from "../../../recoil/regionStore";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { audioBufferStore } from "../../../recoil/audioBufferStore";
import { projectStore } from "../../../recoil/projectStore";
import { useAssetAvailableSubscription } from "../../../gql/generated";

export default function useSyncAudioFile() {
  const regionId = useContext(RegionContext);
  const projectId = useRecoilValue(projectStore.id);
  const audioBufferPointer = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const isInSyncWithDb = useRecoilValue(audioBufferStore.isInSyncWithDb(audioBufferPointer));
  const transcodeJobId = useRecoilValue(audioBufferStore.transcodeJobId(audioBufferPointer));
  const setStoredBufferId = useSetRecoilState(audioBufferStore.storedBufferId(audioBufferPointer));
  const setStoredPeakWaveformId = useSetRecoilState(audioBufferStore.storedPeakWaveformId(audioBufferPointer));

  const {data} = useAssetAvailableSubscription({
    variables: {
      jobId: transcodeJobId,
      projectId,
    },
    skip: transcodeJobId.length === 0 && isInSyncWithDb
  });

  useEffect(() => {
    if (data?.assetAvailable.id) {
      switch (data?.assetAvailable.mimeType) {
        case 'audio/flac':
          setStoredBufferId(data.assetAvailable.id);

          break;
        case 'application/dat':
          setStoredPeakWaveformId(data.assetAvailable.id);

          break;
      }
    }
  }, [data]);
}