import { useContext, useEffect } from 'react';
import { RegionContext } from '../../providers/RegionContext';
import { useRecoilValue } from 'recoil';
import { regionStore } from '../../recoil/regionStore';
import useBackboneChannel from './BackboneMixer/useBackboneChannel';
import { ChannelContext } from '../../providers/ChannelContext';

export default function useAudioRegionScheduler() {
  const channelId = useContext(ChannelContext);
  const { players } = useBackboneChannel(channelId);
  const regionId = useContext(RegionContext);
  const { start, audioBuffer, isRecording, isMuted, duration, offset } = useRecoilValue(regionStore.regionState(regionId));

  useEffect(() => {
    // When the region is being recorded or has an empty audio buffer we do not schedule anything.
    if (isRecording || audioBuffer === null) {
      return;
    }

    if (audioBuffer && !players.has(regionId)) {
      players.add(regionId, audioBuffer);
    }

    players.player(regionId)
      .set({mute: isMuted})
      .unsync().sync()
      // TODO: THIS IS RIGHT NOW COMPLETELY WRONG, BUT WE HAVE TO REFACTOR THE AUDIO REGION STUFF ANYWAY.
      //.start(start.toSeconds() + trimStart, `${trimStart}:0:0`, `${trimEnd - trimStart}:0:0`);

    return () => {
      players.player(regionId).unsync();
    }
  }, [start, audioBuffer, players, isRecording, isMuted, regionId, duration, offset]);
}