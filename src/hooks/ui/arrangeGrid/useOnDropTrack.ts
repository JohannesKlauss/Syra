import { useCallback } from 'react';
import { ChannelType } from '../../../types/Channel';
import useCreateChannel from '../../recoil/channel/useCreateChannel';
import useCreateRegion from '../../recoil/region/useCreateRegion';

export default function useOnDropTrack() {
  const createChannel = useCreateChannel();
  const createRegion = useCreateRegion();

  return useCallback(async (files: File[]) => {
    files.forEach((file, i) => {
      (async () => {
        const channelId = await createChannel(ChannelType.AUDIO, i, file.name.split('.')[0]);
        await createRegion(channelId, file, 0);
      })();
    });
  }, [createChannel, createRegion]);
}