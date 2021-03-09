import React, { useContext } from "react";
import { RegionContext } from "../../../../providers/RegionContext";
import useSyncAudioFile from "../../../../hooks/recoil/region/useSyncAudioFile";
import AudioRegionVisualization from "./AudioRegionVisualization";

interface Props {

}

const AudioRegion: React.FC<Props> = ({}) => {
  useSyncAudioFile();

  return (
    <AudioRegionVisualization>

    </AudioRegionVisualization>
  );
};

export default AudioRegion;
