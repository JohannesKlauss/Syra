import React, { useContext } from 'react';
import { RegionContext } from '../../../../providers/RegionContext';
import { useRecoilValue } from 'recoil';
import { regionStore } from '../../../../recoil/regionStore';
import { BaseContainer } from './AudioRegion.styled';
import useStaticRegionPosition from '../../../../hooks/ui/region/useStaticRegionPosition';
import RegionFirstLoop from "../RegionFirstLoop";

function ClonedAudioRegion() {
  const regionId = useContext(RegionContext);
  const isMuted = useRecoilValue(regionStore.isMuted(regionId));

  const {left, width} = useStaticRegionPosition();

  return (
    <BaseContainer isMuted={isMuted} left={left} isMoving={false} isSelected={false} color={'gray.900'} top={0}>
      <RegionFirstLoop color={'gray.900'}>
      </RegionFirstLoop>
    </BaseContainer>
  );
}

export default ClonedAudioRegion;
