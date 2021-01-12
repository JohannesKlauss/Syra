import React, { useContext } from "react";
import tinycolor from "tinycolor2";
import { Box } from "@chakra-ui/react";
import { RegionContext } from "../../../providers/RegionContext";
import { useRecoilValue } from "recoil";
import { regionStore } from "../../../recoil/regionStore";
import useRegionColor from "../../../hooks/ui/region/useRegionColor";
import useOpenPianoRoll from "../../../hooks/ui/views/useOpenPianoRoll";
import {ChannelContext} from "../../../providers/ChannelContext";
import {arrangeWindowStore} from "../../../recoil/arrangeWindowStore";

interface Props {
}

const BaseRegion: React.FC<Props> = ({ children }) => {
  const regionId = useContext(RegionContext);
  const channelId = useContext(ChannelContext);
  const isMuted = useRecoilValue(regionStore.isMuted(regionId));
  const isSelected = useRecoilValue(regionStore.isSelected(regionId));
  const color = useRegionColor(false);
  const isMidi = useRecoilValue(regionStore.isMidi(regionId));
  const openPianoRoll = useOpenPianoRoll();
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);

  return (
    <Box
      h={`${trackHeight}px`}
      opacity={isMuted ? 0.5 : 1}
      rounded={4}
      onDoubleClick={() => isMidi && openPianoRoll(channelId, regionId)}
      border={isSelected ? '2px solid white' : `2px solid ${tinycolor(color).lighten(5).toRgbString()}`}
    >
      {children}
    </Box>
  );
};

export default BaseRegion;
