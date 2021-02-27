import React, { useContext } from "react";
import { RegionContext } from "../../../providers/RegionContext";
import { useRecoilValue } from "recoil";
import { regionStore } from "../../../recoil/regionStore";
import useRegionColor from "../../../hooks/ui/region/useRegionColor";
import useRegionWidth from "../../../hooks/ui/region/useRegionWidth";
import useTicksToPixel from "../../../hooks/tone/useTicksToPixel";
import ResizableBox from "../../atoms/ResizableBox";
import BaseRegion from "./BaseRegion";
import { RegionName, TopBar } from "./AudioRegion/AudioRegion.styled";
import { Flex } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import ManipulationContainer from "./Manipulations/ManipulationContainer";
import MidiRegionVisualization from "./MidiRegion/MidiRegionVisualization";

const RegionSuspenseFallback: React.FC = () => {
  const regionId = useContext(RegionContext);
  const name = useRecoilValue(regionStore.name(regionId));
  const start = useRecoilValue(regionStore.start(regionId));
  const color = useRegionColor(false);
  const regionWidth = useRegionWidth();
  const ticksToPixel = useTicksToPixel();

  return (
    <ResizableBox baseX={ticksToPixel(start)} baseWidth={regionWidth} onPositionChanged={() => null}>
      <BaseRegion>
        <TopBar color={color}>
          <Flex justify={'flex-start'} align={'center'} ml={2}>
            <BsThreeDots/>
            <RegionName color={color}>{name}</RegionName>
          </Flex>
        </TopBar>
        <ManipulationContainer>
          <MidiRegionVisualization/>
        </ManipulationContainer>
      </BaseRegion>
    </ResizableBox>
  );
};

export default RegionSuspenseFallback;
