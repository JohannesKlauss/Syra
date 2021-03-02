import React, { useContext } from "react";
import { RegionContext } from "../../../../providers/RegionContext";
import useSyncAudioFile from "../../../../hooks/recoil/region/useSyncAudioFile";

interface Props {

}

const AudioRegion: React.FC<Props> = ({}) => {
  useSyncAudioFile();

  return (
    <>

    </>
  );
};

export default AudioRegion;
