import React, { useCallback, useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilState } from 'recoil';
import SoulPlugin from '../SoulPlugin/SoulPlugin';
import { channelStore } from '../../../recoil/channelStore';
import { createNewId } from '../../../utils/createNewId';
import { List as MovableList, arrayMove } from 'react-movable';
import { Box, Button } from '@chakra-ui/react';

function ChannelPluginList() {
  const channelId = useContext(ChannelContext);
  const [soulPluginIds, setSoulPluginIds] = useRecoilState(channelStore.pluginIds(channelId));

  const onClick = useCallback(() => {
    setSoulPluginIds((currVal) => [...currVal, createNewId(`${channelId}-plugin-`)]);
  }, [setSoulPluginIds, channelId]);

  return (
    <MovableList
      values={soulPluginIds}
      onChange={({ oldIndex, newIndex }) => setSoulPluginIds(arrayMove(soulPluginIds, oldIndex, newIndex))}
      renderItem={({ value, props }) => <SoulPlugin {...props} id={value} />}
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
