import React, { useContext, useRef } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { Box, RootRef, styled } from '@material-ui/core';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import { RegionContext } from '../../../providers/RegionContext';
import Region from './Region';
import { TrackRefContext } from '../../../providers/TrackContext';

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
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <RootRef rootRef={trackRef}>
      <BaseContainer>
        <TrackRefContext.Provider value={trackRef}>
          {regions.map(id => (
            <RegionContext.Provider key={id} value={id}>
              <Region/>
            </RegionContext.Provider>
          ))}
        </TrackRefContext.Provider>
      </BaseContainer>
    </RootRef>
  );
}

export default RegionList;
