import React, { Suspense, useContext, useEffect } from "react";
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilState, useRecoilValue } from "recoil";
import SoulPlugin from '../SoulPlugin/SoulPlugin';
import { channelStore } from '../../../recoil/channelStore';
import { List as MovableList, arrayMove } from 'react-movable';
import { Box, Button } from '@chakra-ui/react';
import useAddPlugin from '../../../hooks/recoil/channel/useAddPlugin';
import useSyraEngineChannel from "../../../hooks/engine/useSyraEngineChannel";

function ChannelPluginList() {
  const channelId = useContext(ChannelContext);
  const channel = useSyraEngineChannel(channelId);
  const activePluginsForChannelId = useRecoilValue(channelStore.findActivePluginsForChannelId(channelId));
  const [soulPluginIds, setSoulPluginIds] = useRecoilState(channelStore.pluginIds(channelId));
  const addPlugin = useAddPlugin();

  useEffect(() => {
    console.log('active plugins', activePluginsForChannelId);

    channel.setActivePlugins(activePluginsForChannelId.map(plugin => plugin.audioNode));
  }, [activePluginsForChannelId]);

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
        <Box {...props} style={{...props, zIndex: 'unset'}}>
          <Suspense fallback={<Button size={"xs"} disabled colorScheme={"gray"} isLoading/>}>
            <SoulPlugin key={props.key} id={value} />
          </Suspense>
        </Box>
      )}
    />
  );
}

export default ChannelPluginList;
