import { ChannelContext } from "../../src/providers/ChannelContext";
import * as React from "react";
import { useEffect } from "react";
import useCreateChannel from "../../src/hooks/recoil/channel/useCreateChannel";
import { ChannelMode, ChannelType } from "../../src/types/Channel";
import { RegionContext } from "../../src/providers/RegionContext";
import useCreateAudioRegionFromFile from "../../src/hooks/recoil/region/useCreateAudioRegionFromFile";
import useAudioContext from "../../src/hooks/audio/useAudioContext";
import * as Tone from 'tone';

const channelId = 'sb-channel-1';
const regionId = 'sb-region-1';

export default function sbWithRegion(Story, context) {
  const createChannel = useCreateChannel();
  const createRegion = useCreateAudioRegionFromFile();
  const ctx = useAudioContext();

  useEffect(() => {
    if (ctx.state === 'running') {
      (async () => {
        await createChannel(ChannelType.AUDIO, ChannelMode.MONO, 0, 'Audio 1', channelId);
        await createRegion(channelId, context.loaded.audioFile, Tone.Ticks(0), false, regionId);
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
