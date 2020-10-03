import { useCallback } from 'react';
import { ChannelType } from '../../../types/Channel';
import useCreateChannel from '../../recoil/channel/useCreateChannel';
import useCreateAudioRegion from '../../recoil/region/useCreateAudioRegion';

export default function useOnDropTrack() {
  const createChannel = useCreateChannel();
  const createRegion = useCreateAudioRegion();

  return useCallback(async (files: File[]) => {
    files.forEach((file, i) => {
      (async () => {
        const channelId = await createChannel(ChannelType.AUDIO, i, file.name.split('.')[0]);
        await createRegion(channelId, file, 0, i === 0);
      })();
    });
  }, [createChannel, createRegion]);
}