import React, { useCallback, useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useDropzone } from 'react-dropzone';
import RegionList from './Regions/RegionList';
import useIsDragOnDocument from '../../../hooks/ui/useIsDragOnDocument';
import useSnapCtrlPixelCalc from '../../../hooks/ui/useSnapCtrlPixelCalc';
import { useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import useCreateAudioRegion from '../../../hooks/recoil/region/useCreateAudioRegion';
import MarqueeContainer from './MarqueeContainer';
import usePixelToQuarter from '../../../hooks/ui/usePixelToQuarter';
import { Box, Flex, Text } from '@chakra-ui/react';

interface Props {
  bg: string;
}

const Track = React.memo(({ bg }: Props) => {
  const channelId = useContext(ChannelContext);
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const createRegion = useCreateAudioRegion();
  const isDragOnDocument = useIsDragOnDocument();
  const pixelToQuarter = usePixelToQuarter();
  const calcSnappedX = useSnapCtrlPixelCalc();

  // TODO: WE SHOULD ALSO BE ABLE TO SUPPORT MIDI FILES LATER ON.
  const onDrop = useCallback(async (files: File[], _, e) => {
    const x = e.clientX - e.target.getBoundingClientRect().left; // x position within the track.

    if (files.length > 0) {
      // On a existing track we only use the first file.
      // TODO: THE SUBSEQUENT files should be move to the tracks beneath this one or create complete new channels.
      await createRegion(channelId, files[0], pixelToQuarter(calcSnappedX(x)));
    }
  }, [createRegion, pixelToQuarter, calcSnappedX, channelId]);
  const { getInputProps, isDragActive } = useDropzone({ onDrop });

  // TODO: BECAUSE OF A WEIRD ERROR WE REMOVED THE {...getRootProps()} FOR NOW.
  return (
    <Box bg={bg} id={`track-${channelId}`} h={`${trackHeight}px`} opacity={0.8} w={'100%'} pos={'relative'}>
      {isDragOnDocument && <input {...getInputProps()} />}
      <Flex display={isDragOnDocument ? 'flex' : 'none'} opacity={0.5} pl={'150px'} top={0} left={0} h={'100%'} align={'center'} bg={'gray.800'}>
        <Text variant="overline" color={isDragActive ? 'primary' : 'initial'} display={'block'}>
          Drop Track to add to region.
        </Text>
      </Flex>
      <RegionList/>
      <MarqueeContainer/>
    </Box>
  );
});

export default Track;
