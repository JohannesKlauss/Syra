import { useContext, useEffect } from 'react';
import { RegionContext } from '../../providers/RegionContext';
import { useRecoilValue } from 'recoil';
import { regionStore } from '../../recoil/regionStore';
import useBackboneChannel from './BackboneMixer/useBackboneChannel';
import { ChannelContext } from '../../providers/ChannelContext';
import * as Tone from 'tone';

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
      .start(Tone.Ticks(start).toSeconds(), Tone.Ticks(offset).toSeconds(), Tone.Ticks(duration).toSeconds());

    return () => {
      players.player(regionId).unsync();
    }
  }, [start, audioBuffer, players, isRecording, isMuted, regionId, duration, offset]);
}