import { useContext, useEffect, useState } from 'react';
import { RegionContext } from '../../providers/RegionContext';
import useToneAudioNodes from '../tone/useToneAudioNodes';
import useToneJsTransport from '../tone/useToneJsTransport';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../recoil/regionStore';
import { transportStore } from '../../recoil/transportStore';

export default function useRegionScheduler() {
  const { players } = useToneAudioNodes();
  const regionId = useContext(RegionContext);
  const { start, audioBuffer, isRecording } = useRecoilValue(regionStore.regionState(regionId));

  useEffect(() => {
    // When the region is being recorded or has an empty audio buffer we do not schedule anything.
    if (isRecording || audioBuffer === null) {
      return;
    }

    if (audioBuffer && !players.has(regionId)) {
      players.add(regionId, audioBuffer);
    }

    players.player(regionId).unsync().sync().start(start + 0.001);
  }, [start, audioBuffer, players, isRecording, regionId]);
}