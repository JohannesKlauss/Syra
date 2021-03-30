import React, { useContext } from 'react';
import { useRecoilValue } from 'recoil';
import { channelStore } from '../../../recoil/channelStore';
import { ChannelContext } from '../../../providers/ChannelContext';
import Track from './Track/Track';
import { useHotkeys } from 'react-hotkeys-hook';
import useMuteSelectedRegions from '../../../hooks/recoil/region/useMuteSelectedRegions';
import { Box } from '@chakra-ui/react';
import { ViewContext } from '../../../providers/ViewContext';
import { gridStore } from '../../../recoil/gridStore';

function GridTracks() {
  const { view } = useContext(ViewContext);
  const totalWidth = useRecoilValue(gridStore.totalWidth(view));
  const channelIds = useRecoilValue(channelStore.idsWithoutMaster);

  useHotkeys('ctrl+m', useMuteSelectedRegions());

  return (
    <Box bg={'gray.800'} pos={'relative'} w={totalWidth} zIndex={0}>
      {channelIds.map((id, i) => (
        <ChannelContext.Provider key={id} value={id}>
          <Track bg={i % 2 === 0 ? 'gray.800' : 'gray.900'} />
        </ChannelContext.Provider>
      ))}
      <Box h={'68px'} w={'2px'}/>
    </Box>
  );
}

export default GridTracks;
