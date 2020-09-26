import React, { useContext, useEffect, useLayoutEffect } from 'react';
import WindowedWaveform from '../../../Waveform/WindowedWaveform';
import { determineTextColor } from '../../../../../utils/color';
import TrimStartHandle from './TrimStartHandle';
import TrimEndHandle from './TrimEndHandle';
import { Manipulations, RegionFirstLoop } from '../AudioRegion.styled';
import { RegionContext } from '../../../../../providers/RegionContext';
import { useRecoilValue } from 'recoil';
import { regionStore } from '../../../../../recoil/regionStore';
import { arrangeWindowStore } from '../../../../../recoil/arrangeWindowStore';
import useRegionColor from '../../../../../hooks/ui/region/useRegionColor';
import useAsyncWaveformWorker from '../../../../../hooks/audio/useAsyncWaveformWorker';
import useMove from '../../../../../hooks/ui/region/manipulations/useMove';
import useTrimStart from '../../../../../hooks/ui/region/manipulations/useTrimStart';
import useTrimEnd from '../../../../../hooks/ui/region/manipulations/useTrimEnd';
import useDownsampleAudioBuffer from '../../../../../hooks/audio/useDownsampleAudioBuffer';

interface Props {
  onChangeIsMoving: (isMoving: boolean) => void;
  onUpdateLeftOffset: (pos: number) => void;
  onUpdateTopOffset: (pos: number) => void;
}

function ManipulationContainer({ onChangeIsMoving, onUpdateLeftOffset, onUpdateTopOffset }: Props) {
  const regionId = useContext(RegionContext);
  const bufferId = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const waveformSmoothing = useRecoilValue(arrangeWindowStore.waveformSmoothing);
  const color = useRegionColor(false);
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const {triggerMove, deltaXMove, isMoving, cssTop} = useMove();
  const {triggerTrimStart, deltaXTrimStart} = useTrimStart();
  const {triggerTrimEnd, deltaXTrimEnd} = useTrimEnd();

  useEffect(() => {
    onChangeIsMoving(isMoving);
  }, [isMoving, onChangeIsMoving]);

  useLayoutEffect(() => {
    onUpdateLeftOffset(deltaXMove + deltaXTrimStart);
  }, [deltaXMove, deltaXTrimStart, onUpdateLeftOffset]);

  useLayoutEffect(() => {
    onUpdateTopOffset(cssTop);
  }, [cssTop, onUpdateTopOffset]);

  useDownsampleAudioBuffer(bufferId ?? '');

  return (
    <>
      <RegionFirstLoop color={color} width={deltaXTrimEnd - deltaXTrimStart}>
        <Manipulations onMouseDown={triggerMove} isMoving={isMoving}>
          <TrimStartHandle trigger={triggerTrimStart}/>
          <TrimEndHandle trigger={triggerTrimEnd}/>
        </Manipulations>
      </RegionFirstLoop>
    </>
  );
}

export default ManipulationContainer;
