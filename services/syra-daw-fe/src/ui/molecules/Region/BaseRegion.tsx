import React, { useContext } from "react";
import tinycolor from "tinycolor2";
import { Box } from "@chakra-ui/react";
import { RegionContext } from "../../../providers/RegionContext";
import { useRecoilValue } from "recoil";
import { regionStore } from "../../../recoil/regionStore";
import useRegionColor from "../../../hooks/ui/region/useRegionColor";

interface Props {
  left: number;
  top: number;
  isMoving: boolean;
}

const BaseRegion: React.FC<Props> = ({ left, top, isMoving, children }) => {
  const regionId = useContext(RegionContext);
  const isMuted = useRecoilValue(regionStore.isMuted(regionId));
  const isSelected = useRecoilValue(regionStore.isSelected(regionId));
  const color = useRegionColor(false);

  return (
    <Box
      h={'100%'}
      willChange={'transform'}
      pos={'absolute'}
      top={top}
      opacity={isMuted ? 0.5 : 1}
      transform={`translateX(${left})px`}
      zIndex={(isMoving || isSelected ? 10 : 1)}
      border={isSelected ? '2px solid white' : `2px solid ${tinycolor(color).lighten(5).toRgbString()}`}
    >
      {children}
    </Box>
  );
};

export default BaseRegion;
