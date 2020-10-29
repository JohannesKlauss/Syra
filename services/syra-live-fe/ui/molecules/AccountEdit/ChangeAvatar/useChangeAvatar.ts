import { getCroppedImg } from '../../../../helpers/canvas/imageCreation';
import axios from 'axios';
import { useCallback, useState } from 'react';
import readFile from '../../../../helpers/fs/readFile';

export default function useChangeAvatar(avatar: string, onClose: () => void) {
  const [croppedPixels, setCroppedPixels] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState(avatar);

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedPixels(croppedAreaPixels);
  }, []);

  const onApply = useCallback(async (cb: (src: string) => void) => {
    setIsLoading(true);

    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedPixels,
        0,
      );

      const data = new FormData();
      data.append('file', croppedImage, 'newAvatar.jpeg');

      const res = await axios.post(`${process.env.NEXT_PUBLIC_LIVE_GQL_URL}/files/upload-avatar`, data, {
        headers: {
          'Content-Type': `multipart/form-data`,
        },
        withCredentials: true,
      });

      if (res.status === 201) {
        onClose();
        cb(res.data);
      }
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  }, [imageSrc, croppedPixels]);

  const onFileChange = useCallback(async e => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      setImageSrc(imageDataUrl);
    }
  }, []);

  return {
    isLoading,
    imageSrc,
    onFileChange,
    onApply,
    onCropComplete,
  }
}