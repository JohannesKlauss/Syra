import React, { useContext, useEffect, useState } from 'react';
import { RegionContext } from '../../../../providers/RegionContext';
import { useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../../../recoil/arrangeWindowStore';
import { regionStore } from '../../../../recoil/regionStore';
import useRegionColor from '../../../../hooks/ui/region/useRegionColor';
import { motion, useTransform } from 'framer-motion';
import { ResizableBoxContext } from '../../../../providers/ResizableBoxContext';
import useSnapPixelValue from '../../../../hooks/ui/useSnapPixelValue';
import usePeakWaveformImageGenerator from '../../../../hooks/audio/usePeakWaveformImageGenerator';

const AudioRegionVisualization: React.FC = () => {
  const regionId = useContext(RegionContext);
  const audioBufferPointer = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight) - 18; // Subtract the topBar of the region
  const color = useRegionColor(false);
  const snapPixel = useSnapPixelValue();
  const { boxOffset } = useContext(ResizableBoxContext);
  const negativeX = useTransform(boxOffset, (boxOffset) => -snapPixel(boxOffset));

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const generateWaveformImage = usePeakWaveformImageGenerator(audioBufferPointer);

  useEffect(() => {
    (async () => {
      setImageUrl(await generateWaveformImage(trackHeight, color));
    })();
  }, [trackHeight, color, setImageUrl, generateWaveformImage]);

  if (imageUrl === null) {
    return null;
  }

  return (
    <React.Suspense fallback={'loading...'}>
      <motion.div
        style={{
          width: '100%',
          backgroundPositionX: negativeX,
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: 'none',
          height: trackHeight,
        }}
      />
    </React.Suspense>
  );
};

export default AudioRegionVisualization;
