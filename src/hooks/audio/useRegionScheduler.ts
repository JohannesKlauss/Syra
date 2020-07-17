import { useContext, useEffect, useState } from 'react';
import { RegionContext } from '../../providers/RegionContext';
import useToneAudioNodes from '../tone/useToneAudioNodes';
import useToneJsTransport from '../tone/useToneJsTransport';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../recoil/regionStore';
import { transportStore } from '../../recoil/transportStore';

export default function useRegionScheduler() {
  const transport = useToneJsTransport();
  const { players } = useToneAudioNodes();
  const regionId = useContext(RegionContext);
  const transportSeconds = useRecoilValue(transportStore.seconds);
  const { start, audioBuffer, isMuted } = useRecoilValue(regionStore.regionState(regionId));
  const [scheduleId, setScheduleId] = useState<number | null>(null);

  useEffect(() => {
    if (audioBuffer && !players.has(regionId)) {
      players.add(regionId, audioBuffer);
    }

    if (scheduleId !== null) {
      transport.clear(scheduleId);
    }

    let scheduleAt = start - (start === 0 ? 0 : 0.005);
    let offset = 0;

    if (transportSeconds > scheduleAt) {
      offset = transportSeconds - scheduleAt;
      scheduleAt = transportSeconds;
    }

    const newScheduleId = transport.schedule(time => {
      players.player(regionId).set({ mute: isMuted }).start(time + 0.005, offset);
    }, scheduleAt);

    setScheduleId(newScheduleId);
  }, [start, audioBuffer, players, isMuted, transport, transportSeconds]);
}