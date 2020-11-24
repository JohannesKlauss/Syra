import React, { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ChannelType } from '../../../../types/Channel';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { channelStore } from '../../../../recoil/channelStore';
import AudioChannel from './AudioChannel';
import InstrumentChannel from './InstrumentChannel';
import { Box } from '@chakra-ui/react';


interface Props {
  channelId: string;
}

function BaseChannel({ channelId }: Props) {
  const type = useRecoilValue(channelStore.type(channelId));
  const [selectedChannelId, setSelectedChannelId] = useRecoilState(channelStore.selectedId);

  const backgroundColor = useMemo(() => {
    return channelId === selectedChannelId ? '#606060' : 'gray.900';
  }, [channelId, selectedChannelId]);

  const ChannelComponent = useMemo(() => {
    switch (type) {
      case ChannelType.AUDIO:
        return <AudioChannel/>;
      case ChannelType.INSTRUMENT:
        return <InstrumentChannel/>;
    }
  }, [type]);

  return (
    <ChannelContext.Provider value={channelId}>
      <Box maxW={'150px'} w={'150px'} ml={1} bg={backgroundColor}>
        {ChannelComponent}
      </Box>
    </ChannelContext.Provider>
  );
}

export default React.memo(BaseChannel);
