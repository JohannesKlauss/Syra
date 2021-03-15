import { RegionContext } from "../../../providers/RegionContext";
import { useContext, useEffect } from "react";
import { regionStore } from "../../../recoil/regionStore";
import { useRecoilState, useRecoilValue } from "recoil";
import { audioBufferStore } from "../../../recoil/audioBufferStore";
import { useAssetTranscodedSubscription } from "../../../gql/generated";
import { projectStore } from "../../../recoil/projectStore";
import axios from "axios";
import { fileSystem } from "../../../utils/fileSystem";

export default function useSyncAudioFile() {
  const regionId = useContext(RegionContext);
  const projectId = useRecoilValue(projectStore.id);
  const audioBufferPointer = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const [hasTranscodedFile, setHasTranscodedFile] = useRecoilState(audioBufferStore.hasTranscodedFile(audioBufferPointer));
  const isInSyncWithDb = useRecoilValue(audioBufferStore.isInSyncWithDb(audioBufferPointer));
  const [storedBufferId, setStoredBufferId] = useRecoilState(audioBufferStore.storedBufferId(audioBufferPointer));

  console.log('bufferId', storedBufferId);

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

      (async () => {
        const res = await axios.get(`${process.env.REACT_APP_LIVE_GQL_URL}/audio/${data.assetTranscoded.id}`, {
          withCredentials: true,
          responseType: 'blob',
        });

        if (res.status === 200) {
          try {
            await fileSystem.writeAudioFile(data.assetTranscoded.id, res.data);
          } catch (e) {
            // TODO: Show error to user.
            console.log('could not write transcoded file', e);
          }
        }
      })();
    }
  }, [data]);
}