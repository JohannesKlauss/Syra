import React, { useContext } from 'react';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { useRecoilValue } from 'recoil';
import { regionStore } from '../../../../recoil/regionStore';
import { RegionContext } from '../../../../providers/RegionContext';
import { Box } from '@chakra-ui/react';
import RegionDecider from "./RegionDecider";

function RegionList() {
  const channelId = useContext(ChannelContext);
  const regions = useRecoilValue(regionStore.findIdsByChannelId(channelId));

  console.log('regions', regions);

  return (
    <Box top={0} left={0} pos={'absolute'} w={'100%'} h={'100%'}>
      {regions.map(id => (
        <RegionContext.Provider key={id} value={id}>
          <RegionDecider/>
        </RegionContext.Provider>
      ))}
    </Box>
  );
}

export default RegionList;
