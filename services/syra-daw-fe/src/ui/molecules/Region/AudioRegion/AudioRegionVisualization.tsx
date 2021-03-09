import React, { useContext } from "react";
import { Stage } from "@inlet/react-pixi";
import { RegionContext } from "../../../../providers/RegionContext";
import { useRecoilValue } from "recoil";
import { arrangeWindowStore } from "../../../../recoil/arrangeWindowStore";
import { regionStore } from "../../../../recoil/regionStore";
import useRegionWidth from "../../../../hooks/ui/region/useRegionWidth";
import useRegionColor from "../../../../hooks/ui/region/useRegionColor";
import useTicksToPixel from "../../../../hooks/tone/useTicksToPixel";
import usePeakWaveformAnalyzer from "../../../../hooks/audio/usePeakWaveformAnalyzer";

interface Props {

}

const AudioRegionVisualization: React.FC<Props> = ({}) => {
  const regionId = useContext(RegionContext);
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight) - 18; // Subtract the topBar of the region
  const offset = useRecoilValue(regionStore.offset(regionId));
  const width = useRegionWidth();
  const color = useRegionColor(false);
  const ticksToPixel = useTicksToPixel();
  const peaks = usePeakWaveformAnalyzer(regionId);

  return (
    <Stage width={width} height={trackHeight} options={{transparent: true, resolution: 1}}>

    </Stage>
  );
};

export default AudioRegionVisualization;
