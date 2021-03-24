import React, { useContext } from 'react';
import { RegionContext } from '../../../../providers/RegionContext';
import { useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../../../recoil/arrangeWindowStore';
import { regionStore } from '../../../../recoil/regionStore';
import useRegionColor from '../../../../hooks/ui/region/useRegionColor';
import WaveformV5 from '../../Waveform/WaveformV5';
import useRegionWidth from '../../../../hooks/ui/region/useRegionWidth';
import { motion, useTransform } from "framer-motion";
import { ResizableBoxContext } from '../../../../providers/ResizableBoxContext';
import useSnapPixelValue from "../../../../hooks/ui/useSnapPixelValue";

const AudioRegionVisualization: React.FC = () => {
  const regionId = useContext(RegionContext);
  const audioBufferPointer = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight) - 18; // Subtract the topBar of the region
  const width = useRegionWidth();
  const color = useRegionColor(false);
  const snapPixel = useSnapPixelValue();
  const { boxOffset } = useContext(ResizableBoxContext);
  const negativeX = useTransform(boxOffset, boxOffset => -snapPixel(boxOffset));

  return (
    <React.Suspense fallback={'loading...'}>
      <motion.div style={{ x: negativeX }}>
        <WaveformV5 color={color} bufferId={audioBufferPointer} trackHeight={trackHeight} width={width} />
      </motion.div>
    </React.Suspense>
  );
};

export default AudioRegionVisualization;
