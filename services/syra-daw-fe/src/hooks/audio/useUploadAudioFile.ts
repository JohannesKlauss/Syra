import axios from "axios";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { audioBufferStore } from "../../recoil/audioBufferStore";
import { projectStore } from "../../recoil/projectStore";
import { fileSystem } from "../../utils/fileSystem";

export default function useUploadAudioFile() {
  const projectId = useRecoilValue(projectStore.id);

  return useRecoilCallback(({set}) => async (bufferId: string, file: File) => {
    const files = new FormData();
    files.append('file', file);

    console.log('FILE TO UPLOAD', file);

    const res = await axios.post(`${process.env.REACT_APP_LIVE_GQL_URL}/audio/transcode/${projectId}`, files, {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
      withCredentials: true,
    });

    if (res.status === 201) {
      set(audioBufferStore.storedBufferId(bufferId), res.data.id);
      set(audioBufferStore.isInSyncWithDb(bufferId), true);

      await fileSystem.writeAudioFile(res.data.id, file);
    }
  }, [projectId]);
}