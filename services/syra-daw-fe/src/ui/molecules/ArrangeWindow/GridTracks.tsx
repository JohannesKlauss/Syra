import React, { useContext } from 'react';
import { useRecoilValue } from 'recoil';
import { channelStore } from '../../../recoil/channelStore';
import { ChannelContext } from '../../../providers/ChannelContext';
import Track from './Track/Track';
import { useHotkeys } from 'react-hotkeys-hook';
import SelectionTool from '../../atoms/SelectionTool';
import useSelectRegions from '../../../hooks/ui/arrangeGrid/useSelectRegions';
import useMuteSelectedRegions from '../../../hooks/recoil/region/useMuteSelectedRegions';
import useAnalyzeTempoForSelectedRegion from '../../../hooks/recoil/region/useAnalyzeTempoForSelectedRegion';
import { Box } from '@chakra-ui/react';
import { ViewContext } from '../../../providers/ViewContext';
import { gridStore } from '../../../recoil/gridStore';

function GridTracks() {
  const { view } = useContext(ViewContext);
  const totalWidth = useRecoilValue(gridStore.totalWidth(view));
  const channelIds = useRecoilValue(channelStore.idsWithoutMaster);
  const onSelect = useSelectRegions();
  const analyzeTempo = useAnalyzeTempoForSelectedRegion();

  useHotkeys('ctrl+m', useMuteSelectedRegions());
  useHotkeys('a', () => {
    (async () => await analyzeTempo())();
  });

  return (
    <Box bg={'gray.800'} pos={'relative'} w={totalWidth} zIndex={0}>
      {channelIds.map((id, i) => (
        <ChannelContext.Provider key={id} value={id}>
          <Track bg={i % 2 === 0 ? 'gray.800' : 'gray.900'} />
        </ChannelContext.Provider>
      ))}
    </Box>
  );
}

export default GridTracks;
