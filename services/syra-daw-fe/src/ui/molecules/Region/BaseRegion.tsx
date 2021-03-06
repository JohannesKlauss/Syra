import React, { useContext } from "react";
import tinycolor from "tinycolor2";
import { Box } from "@chakra-ui/react";
import { RegionContext } from "../../../providers/RegionContext";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { regionStore } from "../../../recoil/regionStore";
import useRegionColor from "../../../hooks/ui/region/useRegionColor";
import useOpenPianoRoll from "../../../hooks/ui/views/pianoRoll/useOpenPianoRoll";
import {ChannelContext} from "../../../providers/ChannelContext";
import {arrangeWindowStore} from "../../../recoil/arrangeWindowStore";
import useUpdateSelectedRegions from "../../../hooks/recoil/region/useUpdateSelectedRegions";
import { useIsHotkeyPressed } from "react-hotkeys-hook";

interface Props {
  isSuspending?: boolean;
}

const BaseRegion: React.FC<Props> = ({ isSuspending = false, children }) => {
  const regionId = useContext(RegionContext);
  const channelId = useContext(ChannelContext);
  const isMuted = useRecoilValue(regionStore.isMuted(regionId));
  const isSelected = useRecoilValue(regionStore.isSelected(regionId));
  const color = useRegionColor(false);
  const isMidi = useRecoilValue(regionStore.isMidi(regionId));
  const openPianoRoll = useOpenPianoRoll();
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const updateSelectedRegions = useUpdateSelectedRegions();
  const isPressed = useIsHotkeyPressed();

  return (
      <Box
        filter={isSuspending ? 'opacity(60%) grayscale(80%)' : 'none'}
        h={`${trackHeight}px`}
        opacity={isMuted ? 0.35 : 1}
        rounded={4}
        onClick={() => updateSelectedRegions([regionId], !isPressed('shift'))}
        onDoubleClick={() => isMidi && openPianoRoll(channelId, regionId)}
        border={isSelected ? '2px solid white' : `2px solid ${tinycolor(color).lighten(5).toRgbString()}`}
      >
        {children}
      </Box>
  );
};

export default BaseRegion;
