import React, { useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { Box, styled } from '@material-ui/core';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import { RegionContext } from '../../../providers/RegionContext';
import Region from './Region';

const BaseContainer = styled(Box)({
  top: 0,
  left: 0,
  position: 'absolute',
  width: '100%',
  height: '100%',
});

interface Props {

}

function RegionList({}: Props) {
  const channelId = useContext(ChannelContext);
  const regions = useRecoilValue(regionStore.findIdsByChannelId(channelId));

  return (
    <BaseContainer>
      {regions.map(id => (
        <RegionContext.Provider key={id} value={id}>
          <Region/>
        </RegionContext.Provider>
      ))}
    </BaseContainer>
  );
}

export default RegionList;
