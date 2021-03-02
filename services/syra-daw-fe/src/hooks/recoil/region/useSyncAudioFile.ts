import { RegionContext } from "../../../providers/RegionContext";
import { useContext, useEffect } from "react";
import { regionStore } from "../../../recoil/regionStore";
import { useRecoilState, useRecoilValue } from "recoil";
import { audioBufferStore } from "../../../recoil/audioBufferStore";
import { useAssetTranscodedSubscription } from "../../../gql/generated";
import { projectStore } from "../../../recoil/projectStore";

export default function useSyncAudioFile() {
  const regionId = useContext(RegionContext);
  const projectId = useRecoilValue(projectStore.id);
  const audioBufferPointer = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const [hasTranscodedFile, setHasTranscodedFile] = useRecoilState(audioBufferStore.hasTranscodedFile(audioBufferPointer));
  const isInSyncWithDb = useRecoilValue(audioBufferStore.isInSyncWithDb(audioBufferPointer));
  const [storedBufferId, setStoredBufferId] = useRecoilState(audioBufferStore.storedBufferId(audioBufferPointer));

  const {data} = useAssetTranscodedSubscription({
    variables: {
      assetId: storedBufferId,
      projectId,
    },
    skip: storedBufferId.length === 0 && hasTranscodedFile && isInSyncWithDb
  });

  useEffect(() => {
    if (data?.assetTranscoded.id) {
      setStoredBufferId(data.assetTranscoded.id);
      setHasTranscodedFile(true);
    }
  }, [data]);
}