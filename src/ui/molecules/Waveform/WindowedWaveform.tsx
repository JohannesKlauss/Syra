import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { createWindowedWaveformV2 } from '../../../utils/waveform';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import useScrollPosition from '../../../hooks/ui/useScrollPosition';
import { audioBufferStore } from '../../../recoil/audioBufferStore';
import { Graphics } from 'pixi.js';
import { PixiComponent, Stage, Container } from '@inlet/react-pixi';
import { colorStringToHexNumber, determineTextColor } from '../../../utils/color';
import useRegionWidth from '../../../hooks/ui/region/useRegionWidth';
import useTrimmedRegionWidth from '../../../hooks/ui/region/useTrimmedRegionWidth';
import { regionStore } from '../../../recoil/regionStore';
import { RegionContext } from '../../../providers/RegionContext';
import { styled, Theme } from '@material-ui/core';

interface PixiWindowProps {
  color: string;
  offsetX: number;
  pointCloud: number[];
}

const Waveform = PixiComponent<PixiWindowProps, Graphics>('Polygon', {
  create: () => new Graphics(),
  applyProps: (instance, _, props) => {
    const { offsetX, pointCloud, color } = props;

    instance.beginFill(colorStringToHexNumber(color));
    instance.drawPolygon(pointCloud.slice(0, pointCloud.length / 2));
    instance.drawPolygon(pointCloud.slice(pointCloud.length / 2));
    instance.endFill();
    instance.x = -offsetX;
    instance.y = 0;
  },
});

interface Props {
  bufferId: string | null;
  height: number;
  paddingLeft: number; // This is the padding created by the trimStart.
  offset: number; // This is the left prop.
  smoothing?: number;
  color?: string;
}

function WindowedWaveform({ height, color = '#ffffff', offset, paddingLeft, smoothing, bufferId }: Props) {
  const regionId = useContext(RegionContext);
  const completeWidth = useRegionWidth();
  const trimmedWidth = useTrimmedRegionWidth();
  const viewportWidth = useRecoilValue(arrangeWindowStore.viewportWidth);
  const arrangeWindowRef = useRecoilValue(arrangeWindowStore.ref);
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(regionId));

  const pointCloudId = `${bufferId}.${completeWidth}.${height}.${smoothing}`;

  const [waveformPointCloud, setWaveformPointCloud] = useRecoilState(audioBufferStore.waveform(pointCloudId));
  const [currentScrollPos, setCurrentScrollPos] = useState(0);

  useEffect(() => {
    if (audioBuffer && waveformPointCloud.length === 0 && completeWidth > 0) {
      setWaveformPointCloud(createWindowedWaveformV2(audioBuffer, completeWidth, height, smoothing));
    }
  }, [waveformPointCloud, audioBuffer, pointCloudId]);

  useScrollPosition(pos => setCurrentScrollPos(pos), [], arrangeWindowRef);

  const translateX = Math.max(0, currentScrollPos - offset);

  const options = useMemo(() => ({
    transparent: true,
    width: Math.min(viewportWidth, trimmedWidth),
    height: height,
    antialias: true,
    resolution: 2,
    autoDensity: true,
  }), [viewportWidth]);

  console.log('offset', translateX + paddingLeft);

  return (
    <Stage raf height={height} width={Math.min(viewportWidth, trimmedWidth)} options={options}>
      <Container>
        <Waveform color={determineTextColor(color)} pointCloud={waveformPointCloud} offsetX={translateX + paddingLeft}/>
      </Container>
    </Stage>
  );
}

WindowedWaveform.whyDidYouRender = true;

export default React.memo(WindowedWaveform);
