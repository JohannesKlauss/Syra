import { ChannelContext } from '../../../providers/ChannelContext';
import { useContext } from 'react';
import { useRecoilCallback } from 'recoil';
import { regionStore } from '../../../recoil/regionStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { isBetween } from '../../../utils/numbers';
import useCutAudioRegion from '../region/useCutAudioRegion';
import usePixelToSeconds from '../../ui/usePixelToSeconds';
import usePixelToQuarter from '../../ui/usePixelToQuarter';

export default function useCutRegionAtMarqueeIndicator() {
  const channelId = useContext(ChannelContext);
  const cutRegion = useCutAudioRegion();
  const pixelToQuarter = usePixelToQuarter();

  return useRecoilCallback(({snapshot}) => () => {
    const marqueeChannelPosition = snapshot.getLoadable(arrangeWindowStore.marqueeChannelPosition);

    if (marqueeChannelPosition.state === 'hasValue' && marqueeChannelPosition.contents !== channelId) {
      return;
    }

    const regionIds = snapshot.getLoadable(regionStore.ids(channelId));
    const marqueePosition = snapshot.getLoadable(arrangeWindowStore.marqueePosition);

    if (regionIds.state === 'hasValue' && marqueePosition.state === 'hasValue' && marqueePosition.contents !== null) {
      regionIds.contents.forEach(id => {
        const area = snapshot.getLoadable(regionStore.occupiedArea(id)).contents as [number, number];

        // TODO: THERE SEEMS TO BE A BUG IN RECOIL. The pixelPerSecond callback doesn't get updated, so we have to reimplement it here.
        const pixPerSec = snapshot.getLoadable(arrangeWindowStore.pixelPerSecond).contents as number;

        if (isBetween(marqueePosition.contents!, area)) {
          cutRegion(id, pixelToQuarter(marqueePosition.contents! - area[0]));
        }
      });
    }
  }, [channelId, cutRegion, pixelToQuarter]);
}