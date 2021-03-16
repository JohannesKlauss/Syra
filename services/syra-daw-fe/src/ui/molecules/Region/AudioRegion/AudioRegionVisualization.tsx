import React, { useContext } from "react";
import { RegionContext } from "../../../../providers/RegionContext";
import { useRecoilValue } from "recoil";
import { arrangeWindowStore } from "../../../../recoil/arrangeWindowStore";
import { regionStore } from "../../../../recoil/regionStore";
import useRegionColor from "../../../../hooks/ui/region/useRegionColor";
import WaveformV5 from '../../Waveform/WaveformV5';
import useRegionWidth from "../../../../hooks/ui/region/useRegionWidth";

const AudioRegionVisualization: React.FC = () => {
  const regionId = useContext(RegionContext);
  const audioBufferPointer = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight) - 18; // Subtract the topBar of the region
  const width = useRegionWidth();
  const color = useRegionColor(false);

  return (
    <React.Suspense fallback={'loading...'}>
      <WaveformV5 color={color} bufferId={audioBufferPointer} trackHeight={trackHeight} width={width}/>
    </React.Suspense>
  );
};

export default AudioRegionVisualization;
