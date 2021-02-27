import React, { Suspense, useContext } from "react";
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilValue } from 'recoil';
import { regionStore } from '../../../recoil/regionStore';
import { RegionContext } from '../../../providers/RegionContext';
import { Box } from '@chakra-ui/react';
import RegionSuspenseFallback from "./RegionSuspenseFallback";
import Region from "./Region";

function RegionList() {
  const channelId = useContext(ChannelContext);
  const regions = useRecoilValue(regionStore.findIdsByChannelId(channelId));

  return (
    <Box top={0} left={0} pos={'absolute'} w={'100%'} h={'100%'}>
      {regions.map(id => (
        <RegionContext.Provider key={id} value={id}>
          <Suspense fallback={<RegionSuspenseFallback/>}>
            {<Region/>}
          </Suspense>
        </RegionContext.Provider>
      ))}
    </Box>
  );
}

export default RegionList;
