import React, { useContext } from "react";
import { RegionContext } from "../../../../providers/RegionContext";
import { regionStore } from "../../../../recoil/regionStore";
import { useRecoilValue } from "recoil";
import MidiRegion from "../MidiRegion/MidiRegion";
import AudioRegion from "../AudioRegion/AudioRegion";

const RegionDecider: React.FC = () => {
  const regionId = useContext(RegionContext);
  const isMidi = useRecoilValue(regionStore.isMidi(regionId));

  return isMidi ? <MidiRegion/> : <AudioRegion/>;
};

export default RegionDecider;
