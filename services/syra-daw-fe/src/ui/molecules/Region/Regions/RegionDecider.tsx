import React, { Suspense, useContext } from 'react';
import { RegionContext } from "../../../../providers/RegionContext";
import { regionStore } from "../../../../recoil/regionStore";
import { useRecoilValue } from "recoil";
import MidiRegion from "../MidiRegion/MidiRegion";
import AudioRegion from "../AudioRegion/AudioRegion";
import MidiRegionSuspenseFallback from "../MidiRegion/MidiRegionSuspenseFallback";

const RegionDecider: React.FC = () => {
  const regionId = useContext(RegionContext);
  const isMidi = useRecoilValue(regionStore.isMidi(regionId));

  return (
    <Suspense fallback={<MidiRegionSuspenseFallback/>}>
      {isMidi ? <MidiRegion/> : <AudioRegion/>}
    </Suspense>
  );
};

export default RegionDecider;
