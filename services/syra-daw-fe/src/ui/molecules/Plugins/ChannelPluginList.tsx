import React, { useCallback, useContext, useEffect } from "react";
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilState, useSetRecoilState } from "recoil";
import SoulPlugin from '../SoulPlugin/SoulPlugin';
import { channelStore } from '../../../recoil/channelStore';
import { createNewId } from '../../../utils/createNewId';
import { List as MovableList, arrayMove } from 'react-movable';
import { Box, Button } from '@chakra-ui/react';
import { mixerUiStore } from "../../../recoil/mixerUiStore";

function ChannelPluginList() {
  const channelId = useContext(ChannelContext);
  const [soulPluginIds, setSoulPluginIds] = useRecoilState(channelStore.pluginIds(channelId));
  const setPluginListLength = useSetRecoilState(mixerUiStore.pluginListLength);

  const onClick = useCallback(() => {
    setSoulPluginIds((currVal) => [...currVal, createNewId(`${channelId}-plugin-`)]);
  }, [setSoulPluginIds, channelId]);

  useEffect(() => {
    setPluginListLength(currVal => Math.max(currVal, soulPluginIds.length));
  }, [soulPluginIds, setPluginListLength]);

  return (
    <MovableList
      values={soulPluginIds}
      onChange={({ oldIndex, newIndex }) => setSoulPluginIds(arrayMove(soulPluginIds, oldIndex, newIndex))}
      renderItem={({ value, props }) => <SoulPlugin key={props.key} id={value} />}
      renderList={({ children, props }) => (
        <Box {...props} px={2}>
          {children}
          <Button onClick={onClick} isFullWidth colorScheme={'teal'} size={'xs'}>
            Add Plugin
          </Button>
        </Box>
      )}
    />
  );
}

export default ChannelPluginList;
