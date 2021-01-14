import React, { useContext } from "react";
import useRegionDawRecordingSync from "../../../../hooks/ui/region/useRegionDawRecordingSync";
import { RegionContext } from "../../../../providers/RegionContext";
import { useRecoilValue } from "recoil";
import { regionStore } from "../../../../recoil/regionStore";
import useRegionColor from "../../../../hooks/ui/region/useRegionColor";
import BaseRegion from "../BaseRegion";
import ManipulationContainer from "../Manipulations/ManipulationContainer";
import { RegionName, TopBar } from "../AudioRegion/AudioRegion.styled";
import { Flex } from '@chakra-ui/react';
import { SiMidi } from 'react-icons/si';
import useMidiRegionScheduler from "../../../../hooks/tone/useMidiRegionScheduler";
import ResizableBox from "../../../atoms/ResizableBox";
import useMidiRegionWidth from "../../../../hooks/ui/region/useMidiRegionWidth";
import useUpdateRegionPosition from "../../../../hooks/recoil/region/useUpdateRegionPosition";
import usePixelToTicks from "../../../../hooks/tone/usePixelToTicks";

const MidiRegion: React.FC = () => {
  const regionId = useContext(RegionContext);
  const name = useRecoilValue(regionStore.name(regionId));
  const start = useRecoilValue(regionStore.start(regionId));
  const color = useRegionColor(false);
  const regionWidth = useMidiRegionWidth();
  const pixelToTicks = usePixelToTicks();
  const updatePosition = useUpdateRegionPosition();

  useRegionDawRecordingSync();
  useMidiRegionScheduler();

  const onPositionChanged = (start: number, duration: number, offsetDelta: number) => {
    updatePosition(pixelToTicks(start), pixelToTicks(duration), pixelToTicks(offsetDelta));
  };

  return (
    <ResizableBox baseX={start} baseWidth={regionWidth} onPositionChanged={onPositionChanged}>
      <BaseRegion>
        <TopBar color={color}>
          <Flex justify={'flex-start'} align={'center'} ml={2}>
            <SiMidi/>
            <RegionName color={color}>{name}</RegionName>
          </Flex>
        </TopBar>
        <ManipulationContainer>
          Midi!
        </ManipulationContainer>
      </BaseRegion>
    </ResizableBox>

  );
};

export default MidiRegion;
