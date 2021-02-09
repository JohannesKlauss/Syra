import { ChannelContext } from '../../src/providers/ChannelContext';
import * as React from 'react';
import useCreateChannel from '../../src/hooks/recoil/channel/useCreateChannel';
import { ChannelType } from '../../src/types/Channel';
import { RegionContext } from '../../src/providers/RegionContext';
import useCreateAudioRegion from '../../src/hooks/recoil/region/useCreateAudioRegion';
import { useEffect } from 'react';
import useAudioContext from '../../src/hooks/audio/useAudioContext';

const channelId = 'sb-channel-1';
const regionId = 'sb-region-1';

export default function sbWithRegion(Story, context) {
  const createChannel = useCreateChannel();
  const createRegion = useCreateAudioRegion();
  const ctx = useAudioContext();

  useEffect(() => {
    if (ctx.state === 'running') {
      (async () => {
        await createChannel(ChannelType.AUDIO, 0, 'Audio 1', channelId);
        await createRegion(channelId, context.loaded.audioFile, 0, false, regionId);
      })();
    }
  }, [ctx.state, regionId, channelId]);

  return (
    <ChannelContext.Provider value={channelId}>
      <RegionContext.Provider value={regionId}>
        <Story />
      </RegionContext.Provider>
    </ChannelContext.Provider>
  );
}
