import { Box, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { regionStore } from "../../../../recoil/regionStore";
import { useRecoilValue } from "recoil";
import { RegionName, TopBar } from "../../../molecules/Region/AudioRegion/AudioRegion.styled";
import { SiMidi } from 'react-icons/si';
import useRegionColor from "../../../../hooks/ui/region/useRegionColor";
import { RegionContext } from "../../../../providers/RegionContext";

interface Props {
}

const MidiRegionIndicator: React.FC<Props> = () => {
  const regionId = useContext(RegionContext);
  const name = useRecoilValue(regionStore.name(regionId));
  const color = useRegionColor(false);

  return (
    <Box h={'20px'} w={'400px'} pos={'relative'}>
      <TopBar color={color} rounded={4}>
        <Flex justify={'flex-start'} align={'center'} ml={2}>
          <SiMidi/>
          <RegionName color={color}>{name}</RegionName>
        </Flex>
      </TopBar>
    </Box>
  );
};

export default MidiRegionIndicator;
