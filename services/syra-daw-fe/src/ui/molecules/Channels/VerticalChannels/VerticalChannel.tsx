import React, { useContext, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { channelStore } from '../../../../recoil/channelStore';
import { ChannelContext } from '../../../../providers/ChannelContext';
import ChannelLetterButtons from '../ChannelLetterButtons';
import useMuteChannelHotkey from '../../../../hooks/hotkeys/channel/useMuteChannelHotkey';
import useSoloChannelHotkey from '../../../../hooks/hotkeys/channel/useSoloChannelHotkey';
import { arrangeWindowStore } from '../../../../recoil/arrangeWindowStore';
import { ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT } from '../../../../const/ui';
import ChannelName from '../ChannelName';
import BackboneAudioMixer from '../../BackboneMixer/BackboneAudioMixer';
import { Box, Flex, useTheme } from '@chakra-ui/core';

function VerticalChannel() {
  const channelId = useContext(ChannelContext);
  const [selectedChannelId, setSelectedChannelId] = useRecoilState(channelStore.selectedId);
  const color = useRecoilValue(channelStore.color(channelId));
  const verticalZoomLevel = useRecoilValue(arrangeWindowStore.verticalZoomLevel);
  
  const theme = useTheme();

  useMuteChannelHotkey();
  useSoloChannelHotkey();

  const backgroundColor = useMemo(() => {
    return channelId === selectedChannelId ? '#606060' : theme.colors.gray[900];
  }, [channelId, selectedChannelId]);

  return (
    <Flex
      w={'100%'}
      borderBottom={`1px solid ${theme.colors.gray[800]}`}
      bg={backgroundColor}
      borderRight={`3px solid ${color}`}
      h={ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT[verticalZoomLevel]}
      p={2}
      onClick={() => setSelectedChannelId(channelId)}
    >
      <ChannelName />
      <Box bg={'transparent'}>
        <ChannelLetterButtons />
      </Box>

      <BackboneAudioMixer channelId={channelId} />
    </Flex>
  );
}

export default VerticalChannel;
