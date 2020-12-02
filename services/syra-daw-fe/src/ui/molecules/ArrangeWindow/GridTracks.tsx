import React from 'react';
import { useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { channelStore } from '../../../recoil/channelStore';
import { ChannelContext } from '../../../providers/ChannelContext';
import Track from '../Track/Track';
import BackgroundGrid from './BackgroundGrid';
import { useHotkeys } from 'react-hotkeys-hook';
import SelectionTool from '../../atoms/SelectionTool';
import useSelectRegions from '../../../hooks/ui/arrangeGrid/useSelectRegions';
import useMuteSelectedRegions from '../../../hooks/recoil/region/useMuteSelectedRegions';
import useAnalyzeTempoForSelectedRegion from '../../../hooks/recoil/region/useAnalyzeTempoForSelectedRegion';
import { Box } from '@chakra-ui/react';

function GridTracks() {
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const channelIds = useRecoilValue(channelStore.ids);
  const onSelect = useSelectRegions();
  const analyzeTempo = useAnalyzeTempoForSelectedRegion();

  useHotkeys('ctrl+m', useMuteSelectedRegions());
  useHotkeys('a', () => {
    (async () => await analyzeTempo())();
  });

  return (
    <Box bg={'gray.800'} pos={'relative'} w={windowWidth} zIndex={0}>
      <BackgroundGrid ticksFullHeight={true}/>
      <SelectionTool onSelect={onSelect}>
        {channelIds.map((id, i) => (
          <ChannelContext.Provider key={id} value={id}>
            <Track bg={i % 2 === 0 ? 'gray.800' : 'gray.900'}/>
          </ChannelContext.Provider>
        ))}
      </SelectionTool>
    </Box>
  );
}

export default GridTracks;
