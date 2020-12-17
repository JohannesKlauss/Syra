import { useRecoilCallback } from 'recoil';
import { BoxArea } from '../../../types/Ui';
import { channelStore } from '../../../recoil/channelStore';
import { regionStore } from '../../../recoil/regionStore';
import { isIntersecting } from '../../../utils/numbers';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';
import { gridStore } from "../../../recoil/gridStore";
import { ViewContext } from "../../../providers/ViewContext";
import { useContext } from "react";

export default function useSelectRegions() {
  const isPressed = useIsHotkeyPressed();
  const { view } = useContext(ViewContext);

  return useRecoilCallback(({set, snapshot}) => (selectedArea: BoxArea) => {
    let selectedRegionIds: string[] = [];
    const isShiftPressed = isPressed('shift');

    // If shift is pressed, we add to the selection region list.
    if (isShiftPressed) {
      selectedRegionIds = [...(snapshot.getLoadable(regionStore.selectedIds).contents as string[])];
    }

    const trackHeight = snapshot.getLoadable(gridStore.trackHeight(view)).contents as number;
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

    channelIds.slice(firstChannelIndex, lastChannelIndex).forEach(channelId => {
      const regionIds = snapshot.getLoadable(regionStore.ids(channelId)).contents as string [];

      regionIds.forEach(regionId => {
        const area = snapshot.getLoadable(regionStore.occupiedArea(regionId)).contents as [number, number];

        if (isIntersecting(area, [selectedArea.x0, selectedArea.x1])) {
          if (isShiftPressed && selectedRegionIds.find(id => id === regionId) !== undefined) {
            const i = selectedRegionIds.findIndex(id => id === regionId);

            selectedRegionIds.splice(i, 1);
          }
          else {
            selectedRegionIds.push(regionId);
          }
        }
      });
    });

    set(regionStore.selectedIds, selectedRegionIds);
  }, [isPressed, view]);
}