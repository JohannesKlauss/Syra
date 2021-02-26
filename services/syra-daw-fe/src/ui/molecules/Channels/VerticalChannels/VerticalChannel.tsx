import React, { Suspense, useContext, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { channelStore } from '../../../../recoil/channelStore';
import { ChannelContext } from '../../../../providers/ChannelContext';
import ChannelLetterButtons from '../ChannelLetterButtons';
import useMuteChannelHotkey from '../../../../hooks/hotkeys/channel/useMuteChannelHotkey';
import useSoloChannelHotkey from '../../../../hooks/hotkeys/channel/useSoloChannelHotkey';
import { ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT } from '../../../../const/ui';
import ChannelName from '../ChannelName';
import BackboneAudioMixer from '../../BackboneMixer/BackboneAudioMixer';
import { Box, Flex, useTheme } from '@chakra-ui/react';
import useRegionColor from '../../../../hooks/ui/region/useRegionColor';
import { ViewContext } from '../../../../providers/ViewContext';
import { gridStore } from '../../../../recoil/gridStore';
import ContextMenuTrigger from '../../ContextMenu/ContextMenuTrigger';
import ContextMenu from '../../ContextMenu/ContextMenu';
import ChannelContextMenu from '../ChannelMenu/ChannelContextMenu';

interface Props {
  index: number;
}

function VerticalChannel({ index }: Props) {
  const { view } = useContext(ViewContext);
  const channelId = useContext(ChannelContext);
  const [selectedChannelId, setSelectedChannelId] = useRecoilState(channelStore.selectedId);
  const color = useRegionColor(false);
  const verticalZoomLevel = useRecoilValue(gridStore.verticalZoomLevel(view));
  const theme = useTheme();

  useMuteChannelHotkey();
  useSoloChannelHotkey();

  const backgroundColor = useMemo(() => {
    return channelId === selectedChannelId ? 'gray.700' : 'gray.900';
  }, [channelId, selectedChannelId]);

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Flex
          w={'100%'}
          borderBottom={`1px solid ${theme.colors.gray[600]}`}
          bg={backgroundColor}
          borderLeft={`3px solid ${color}`}
          h={ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT[verticalZoomLevel]}
          p={2}
          flexDir={'column'}
          onClick={() => setSelectedChannelId(channelId)}
        >
          <ChannelName prefix={index} />
          <Box bg={'transparent'}>
            <ChannelLetterButtons />
          </Box>

          <Suspense fallback={null}>
            <BackboneAudioMixer channelId={channelId} />
          </Suspense>
        </Flex>
      </ContextMenuTrigger>
      <ChannelContextMenu />
    </ContextMenu>
  );
}

export default VerticalChannel;
