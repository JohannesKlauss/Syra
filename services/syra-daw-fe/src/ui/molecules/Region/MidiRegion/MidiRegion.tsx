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

const MidiRegion: React.FC = () => {
  const regionId = useContext(RegionContext);
  const name = useRecoilValue(regionStore.name(regionId));
  const offset = useRecoilValue(regionStore.offset(regionId));
  const color = useRegionColor(false);
  const regionWidth = useMidiRegionWidth();

  useRegionDawRecordingSync();
  useMidiRegionScheduler();

  return (
    <ResizableBox baseX={offset} baseWidth={regionWidth} onPositionChanged={(w, x) => console.log('changed', w, x)}>
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
