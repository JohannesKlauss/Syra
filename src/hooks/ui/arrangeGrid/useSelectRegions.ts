import { useRecoilCallback } from 'recoil/dist';
import { BoxArea } from '../../../types/Ui';
import { channelStore } from '../../../recoil/channelStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { regionStore } from '../../../recoil/regionStore';
import { isIntersecting } from '../../../utils/numbers';

export default function useSelectRegions() {
  return useRecoilCallback(({set, snapshot}) => (selectedArea: BoxArea) => {
    const trackHeight = snapshot.getLoadable(arrangeWindowStore.trackHeight).contents as number;
    const channelIds = snapshot.getLoadable(channelStore.ids).contents as string[];

    // When the selectedArea is 0 it was likely a click.
    if (selectedArea.x0 - selectedArea.x1 === 0 && selectedArea.y0 - selectedArea.y1 === 0) {
      // This checks if the user clicked on the upper part of a track (This is the marquee tool)
      if (Math.round((selectedArea.y0 % trackHeight) / trackHeight) === 0) {
        // If so, we don't want any selection, just the marquee tool, so we return.
        return;
      }
    }

    const firstChannelIndex = Math.floor(selectedArea.y0 / trackHeight);
    const lastChannelIndex = Math.ceil(selectedArea.y1 / trackHeight);

    const selectedRegionIds: string[] = [];

    channelIds.slice(firstChannelIndex, lastChannelIndex).forEach(channelId => {
      const regionIds = snapshot.getLoadable(regionStore.ids(channelId)).contents as string [];

      regionIds.forEach(regionId => {
        const area = snapshot.getLoadable(regionStore.occupiedArea(regionId)).contents as [number, number];

        if (isIntersecting(area, [selectedArea.x0, selectedArea.x1])) {
          selectedRegionIds.push(regionId);
        }
      });
    });

    set(regionStore.selectedIds, selectedRegionIds);
  }, []);
}