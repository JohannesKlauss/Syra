import React, { useContext } from 'react';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { Box, styled } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { regionStore } from '../../../../recoil/regionStore';
import { RegionContext } from '../../../../providers/RegionContext';
import AudioRegion from '../AudioRegion/AudioRegion';

const BaseContainer = styled(Box)({
  top: 0,
  left: 0,
  position: 'absolute',
  width: '100%',
  height: '100%',
});

function RegionList() {
  const channelId = useContext(ChannelContext);
  const regions = useRecoilValue(regionStore.findIdsByChannelId(channelId));

  return (
    <BaseContainer>
      {regions.map(id => (
        <RegionContext.Provider key={id} value={id}>
          <AudioRegion/>
        </RegionContext.Provider>
      ))}
    </BaseContainer>
  );
}

export default RegionList;
