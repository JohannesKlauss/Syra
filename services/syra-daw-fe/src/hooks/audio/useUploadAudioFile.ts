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

    const res = await axios.post(`${process.env.REACT_APP_LIVE_GQL_URL}/audio/transcode/${projectId}`, files, {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
      withCredentials: true,
    });

    if (res.status === 201) {
      set(audioBufferStore.transcodeJobId(bufferId), res.data.jobId);

      await fileSystem.writeFile(res.data.id, file);
    }
  }, [projectId]);
}