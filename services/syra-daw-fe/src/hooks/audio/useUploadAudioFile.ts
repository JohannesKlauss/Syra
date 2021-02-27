import axios from "axios";
import { useRecoilCallback } from "recoil";
import { audioBufferStore } from "../../recoil/audioBufferStore";

export default function useUploadAudioFile() {
  return useRecoilCallback(({set}) => async (bufferId: string, file: File) => {
    const images = new FormData();
    images.append('file', file);

    const res = await axios.post(`${process.env.REACT_APP_LIVE_GQL_URL}/files/convert`, images, {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
      withCredentials: true,
    });

    if (res.status === 201) {
      set(audioBufferStore.storedBufferId(bufferId), res.data.id);
      set(audioBufferStore.isInSyncWithDb(bufferId), true);
    }
  }, []);
}