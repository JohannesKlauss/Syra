import React, { useContext } from 'react';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { useRecoilValue } from 'recoil';
import { regionStore } from '../../../../recoil/regionStore';
import { RegionContext } from '../../../../providers/RegionContext';
import AudioRegion from '../AudioRegion/AudioRegion';
import { Box } from '@chakra-ui/react';

function RegionList() {
  const channelId = useContext(ChannelContext);
  const regions = useRecoilValue(regionStore.findIdsByChannelId(channelId));

  return (
    <Box top={0} left={0} pos={'absolute'} w={'100%'} h={'100%'}>
      {regions.map(id => (
        <RegionContext.Provider key={id} value={id}>
          <AudioRegion/>
        </RegionContext.Provider>
      ))}
    </Box>
  );
}

export default RegionList;
