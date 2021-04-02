import React, { Suspense, useMemo } from "react";
import { useRecoilState } from "recoil";
import { ChannelContext } from "../../../../providers/ChannelContext";
import { channelStore } from "../../../../recoil/channelStore";
import { Box, Flex } from '@chakra-ui/react';
import HorizontalChannelSuspenseFallback from "./HorizontalChannelSuspenseFallback";
import ChannelHeader from "./Strip/ChannelHeader";
import ChannelBody from "./Strip/ChannelBody";

interface Props {
  channelId: string;
  index: number;
}

function BaseChannel({ channelId, index }: Props) {
  const [selectedChannelId, setSelectedChannelId] = useRecoilState(channelStore.selectedId);

  const backgroundColor = useMemo(() => {
    return channelId === selectedChannelId ? 'gray.700' : 'gray.900';
  }, [channelId, selectedChannelId]);

  return (
    <ChannelContext.Provider value={channelId}>
          <Box
            maxW={'150px'}
            w={'150px'}
            minH={'100%'}
            bg={backgroundColor}
            onClick={() => setSelectedChannelId(channelId)}
          >
            <Suspense fallback={<HorizontalChannelSuspenseFallback/>}>
              <Flex flexDir={'column'} h={'100%'} justify={'flex-start'}>
                <ChannelHeader/>
                <ChannelBody/>
              </Flex>
            </Suspense>
          </Box>
    </ChannelContext.Provider>
  );
}

export default React.memo(BaseChannel);
