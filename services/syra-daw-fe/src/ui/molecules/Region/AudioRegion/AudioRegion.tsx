import React, { useContext } from "react";
import { RegionContext } from "../../../../providers/RegionContext";
import useSyncAudioFile from "../../../../hooks/recoil/region/useSyncAudioFile";
import AudioRegionVisualization from "./AudioRegionVisualization";
import { Box } from "@chakra-ui/react";

interface Props {

}

const AudioRegion: React.FC<Props> = ({}) => {
  useSyncAudioFile();

  return (
    <Box w={'100%'} h={'100%'} pos={'relative'}>
      <AudioRegionVisualization/>
    </Box>
  );
};

export default AudioRegion;
