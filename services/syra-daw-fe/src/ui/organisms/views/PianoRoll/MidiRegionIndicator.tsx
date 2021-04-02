import {Box, Flex} from "@chakra-ui/react";
import React, {useContext} from "react";
import {regionStore} from "../../../../recoil/regionStore";
import {useRecoilValue} from "recoil";
import {RegionName, TopBar} from "../../../molecules/Region/AudioRegion/AudioRegion.styled";
import {SiMidi} from 'react-icons/si';
import useRegionColor from "../../../../hooks/ui/region/useRegionColor";
import {RegionContext} from "../../../../providers/RegionContext";
import useRegionWidth from "../../../../hooks/ui/region/useRegionWidth";
import useTicksToPixel from "../../../../hooks/ui/useTicksToPixel";

interface Props {
}

const MidiRegionIndicator: React.FC<Props> = () => {
  const regionId = useContext(RegionContext);
  const name = useRecoilValue(regionStore.name(regionId));
  const start = useRecoilValue(regionStore.start(regionId));
  const ticksToPixel = useTicksToPixel();
  const color = useRegionColor(false);
  const regionWidth = useRegionWidth();

  return (
    <Box
      h={'20px'}
      w={`${regionWidth}px`}
      pos={'absolute'}
      left={`${ticksToPixel(start)}px`}
      _before={{
        backgroundColor: color,
        content: '""',
        display: 'inline-block',
        height: '3000px',
        top: '10px',
        width: '1px',
        position: 'absolute',
      }}
      _after={{
        backgroundColor: color,
        content: '""',
        display: 'inline-block',
        height: '3000px',
        top: '10px',
        width: '1px',
        right: 0,
        position: 'absolute',
      }}>
      <TopBar color={color} rounded={4} roundedBottom={0}>
        <Flex justify={'flex-start'} align={'center'} ml={2}>
          <SiMidi/>
          <RegionName color={color}>{name}</RegionName>
        </Flex>
      </TopBar>
    </Box>
  );
};

export default MidiRegionIndicator;
