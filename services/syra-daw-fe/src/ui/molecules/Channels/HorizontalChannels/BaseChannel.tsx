import React, { Suspense, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ChannelType } from '../../../../types/Channel';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { channelStore } from '../../../../recoil/channelStore';
import AudioChannel from './AudioChannel';
import InstrumentChannel from './InstrumentChannel';
import { Box, Button, Flex } from '@chakra-ui/react';
import ChannelHeader from './Strip/ChannelHeader';
import ChannelBody from './Strip/ChannelBody';
import HorizontalChannelSuspenseFallback from "./HorizontalChannelSuspenseFallback";
import ContextMenu from "../../ContextMenu/ContextMenu";
import ContextMenuTrigger from "../../ContextMenu/ContextMenuTrigger";
import ChannelContextMenu from "../ChannelMenu/ChannelContextMenu";

interface Props {
  channelId: string;
  index: number;
}

function BaseChannel({ channelId, index }: Props) {
  const type = useRecoilValue(channelStore.type(channelId));
  const [selectedChannelId, setSelectedChannelId] = useRecoilState(channelStore.selectedId);

  const backgroundColor = useMemo(() => {
    return channelId === selectedChannelId ? 'gray.700' : 'gray.900';
  }, [channelId, selectedChannelId]);

  const ChannelComponent = useMemo(() => {
    switch (type) {
      case ChannelType.AUDIO:
        return <AudioChannel />;
      case ChannelType.INSTRUMENT:
        return <InstrumentChannel />;
    }
  }, [type]);

  return (
    <ChannelContext.Provider value={channelId}>
      <ContextMenu>
        <ContextMenuTrigger>
          <Box
            maxW={'150px'}
            w={'150px'}
            bg={backgroundColor}
            onClick={() => setSelectedChannelId(channelId)}
          >
            <Suspense fallback={<HorizontalChannelSuspenseFallback/>}>
              {ChannelComponent}
            </Suspense>
          </Box>
        </ContextMenuTrigger>
        <ChannelContextMenu/>
      </ContextMenu>
    </ChannelContext.Provider>
  );
}

export default React.memo(BaseChannel);
