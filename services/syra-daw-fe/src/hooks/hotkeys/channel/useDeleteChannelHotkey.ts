import { useHotkeys } from 'react-hotkeys-hook';
import useDeleteSelectedChannel from '../../recoil/channel/useDeleteSelectedChannel';
import { regionStore } from "../../../recoil/regionStore";
import { useRecoilValue } from "recoil";
import useDeleteSelectedRegions from "../../recoil/region/useDeleteSelectedRegion";

export default function useDeleteChannelHotkey() {
  const deleteChannel = useDeleteSelectedChannel();
  const deleteRegions = useDeleteSelectedRegions();
  const selectedIds = useRecoilValue(regionStore.selectedIds);

  return useHotkeys('backspace', () => {
    // We don't delete a channel if there are one or more regions selected. We then delete the regions instead.
    if (selectedIds.length > 0) {
      deleteRegions();
    } else {
      deleteChannel();
    }
  }, [deleteChannel, deleteRegions, selectedIds]);
}