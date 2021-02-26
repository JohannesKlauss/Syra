import React, { Suspense, useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilState } from 'recoil';
import SoulPlugin from '../SoulPlugin/SoulPlugin';
import { channelStore } from '../../../recoil/channelStore';
import { List as MovableList, arrayMove } from 'react-movable';
import { Box, Button } from '@chakra-ui/react';
import useAddPlugin from '../../../hooks/recoil/channel/useAddPlugin';

function ChannelPluginList() {
  const channelId = useContext(ChannelContext);
  const [soulPluginIds, setSoulPluginIds] = useRecoilState(channelStore.pluginIds(channelId));
  const addPlugin = useAddPlugin();

  return (
    <MovableList
      values={soulPluginIds}
      onChange={({ oldIndex, newIndex }) => setSoulPluginIds(arrayMove(soulPluginIds, oldIndex, newIndex))}
      renderList={({ children, props, isDragged }) => (
        <>
          <Box {...props} px={2} cursor={isDragged ? 'grabbing' : undefined}>
            {children}
          </Box>
          <Box px={2}>
            <Button onClick={addPlugin} isFullWidth colorScheme={'teal'} size={'xs'}>
              Add Plugin
            </Button>
          </Box>
        </>
      )}
      renderItem={({ value, props }) => (
        <Box {...props}>
          <Suspense fallback={<Button size={"xs"} disabled colorScheme={"gray"} isLoading/>}>
            <SoulPlugin key={props.key} id={value} />
          </Suspense>
        </Box>
      )}
    />
  );
}

export default ChannelPluginList;
