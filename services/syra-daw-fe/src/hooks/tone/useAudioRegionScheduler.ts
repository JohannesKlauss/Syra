import { useContext, useEffect } from 'react';
import { RegionContext } from '../../providers/RegionContext';
import { useRecoilValue } from 'recoil';
import { regionStore } from '../../recoil/regionStore';
import { ChannelContext } from '../../providers/ChannelContext';
import useSyraEngineChannel from "../engine/useSyraEngineChannel";
import { AudioChannel } from "../../engine/channels/AudioChannel";

export default function useAudioRegionScheduler() {
  const channelId = useContext(ChannelContext);
  const channel = useSyraEngineChannel(channelId) as AudioChannel;
  const regionId = useContext(RegionContext);
  const { start, audioBuffer, isRecording, isMuted, duration, offset } = useRecoilValue(regionStore.regionState(regionId));

  useEffect(() => {
    // When the region is being recorded or has an empty audio buffer we do not schedule anything.
    if (isRecording || audioBuffer === null) {
      return;
    }

    if (audioBuffer) {
      channel.regionManager.schedule(regionId, audioBuffer, {start, duration, offset});
    }
    return () => {
      channel.regionManager.cleanUp(regionId);
    }
  }, [start, audioBuffer, channel, isRecording, isMuted, regionId, duration, offset]);
}