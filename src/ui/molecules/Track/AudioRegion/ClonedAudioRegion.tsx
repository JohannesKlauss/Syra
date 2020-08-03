import React, { useContext } from 'react';
import { RegionContext } from '../../../../providers/RegionContext';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../../recoil/regionStore';
import { arrangeWindowStore } from '../../../../recoil/arrangeWindowStore';
import { BaseContainer, RegionFirstLoop } from './AudioRegion.styled';
import WindowedWaveform from '../../Waveform/WindowedWaveform';
import { useTheme } from '@material-ui/core';
import useStaticRegionPosition from '../../../../hooks/ui/region/useStaticRegionPosition';

function ClonedAudioRegion() {
  const theme = useTheme();
  const regionId = useContext(RegionContext);
  const isMuted = useRecoilValue(regionStore.isMuted(regionId));
  const bufferId = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);

  const {left, width, paddingLeft} = useStaticRegionPosition();

  return (
    <BaseContainer isMuted={isMuted} left={left} isMoving={false}>
      <RegionFirstLoop width={width} color={theme.palette.background.paper}>
        <WindowedWaveform paddingLeft={paddingLeft} color={theme.palette.background.default}
                          smoothing={3} height={trackHeight} offset={left} bufferId={bufferId}/>
      </RegionFirstLoop>
    </BaseContainer>
  );
}

export default ClonedAudioRegion;
