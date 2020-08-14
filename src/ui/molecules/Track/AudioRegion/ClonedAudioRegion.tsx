import React, { useContext } from 'react';
import { RegionContext } from '../../../../providers/RegionContext';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../../recoil/regionStore';
import { BaseContainer, RegionFirstLoop } from './AudioRegion.styled';
import { useTheme } from '@material-ui/core';
import useStaticRegionPosition from '../../../../hooks/ui/region/useStaticRegionPosition';

function ClonedAudioRegion() {
  const theme = useTheme();
  const regionId = useContext(RegionContext);
  const isMuted = useRecoilValue(regionStore.isMuted(regionId));

  const {left, width} = useStaticRegionPosition();

  return (
    <BaseContainer isMuted={isMuted} left={left} isMoving={false}>
      <RegionFirstLoop color={theme.palette.background.paper} width={width}>
      </RegionFirstLoop>
    </BaseContainer>
  );
}

export default ClonedAudioRegion;
