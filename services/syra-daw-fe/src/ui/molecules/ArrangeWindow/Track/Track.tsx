import React, { useContext } from 'react';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { useDropzone } from 'react-dropzone';
import RegionList from '../../Region/RegionList';
import useIsDragOnDocument from '../../../../hooks/ui/useIsDragOnDocument';
import { useRecoilValue } from 'recoil';
import { Box, Flex, Text } from '@chakra-ui/react';
import useOnDropCreateRegion from "../../../../hooks/recoil/region/useOnDropCreateRegion";
import { gridStore } from "../../../../recoil/gridStore";
import { ViewContext } from "../../../../providers/ViewContext";
import ChannelTrackContextMenu from "./ChannelTrackContextMenu";
import ContextMenu from "../../ContextMenu/ContextMenu";
import ContextMenuTrigger from "../../ContextMenu/ContextMenuTrigger";

interface Props {
  bg: string;
}

const Track = React.memo(({ bg }: Props) => {
  const { view } = useContext(ViewContext);
  const channelId = useContext(ChannelContext);
  const trackHeight = useRecoilValue(gridStore.trackHeight(view));
  const isDragOnDocument = useIsDragOnDocument();
  const onDrop = useOnDropCreateRegion();

  const { getInputProps, getRootProps } = useDropzone({ onDrop });

  // TODO: BECAUSE OF A WEIRD ERROR WE REMOVED THE {...getRootProps()} FOR NOW.
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Box bg={bg} id={`track-${channelId}`} h={`${trackHeight}px`} w={'100%'} pos={'relative'} {...getRootProps()}>
          {isDragOnDocument && <input {...getInputProps()} />}
          <Flex display={isDragOnDocument ? 'flex' : 'none'} align={'center'} justify={'start'} opacity={0.5} pl={'150px'} top={0} left={0} h={'100%'}>
            <Text variant="overline" color={isDragOnDocument ? 'teal.500' : 'gray.50'} display={'block'}>
              Drop Track to add to region.
            </Text>
          </Flex>
          <RegionList/>
        </Box>
      </ContextMenuTrigger>
      <ChannelTrackContextMenu/>
    </ContextMenu>
  );
});

export default Track;
