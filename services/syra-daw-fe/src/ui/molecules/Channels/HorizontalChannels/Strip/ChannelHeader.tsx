import React, { useContext } from 'react';
import AudioChannelInput from './Input/AudioChannelInput';
import { useRecoilValue } from 'recoil';
import { channelStore } from '../../../../../recoil/channelStore';
import { ChannelContext } from '../../../../../providers/ChannelContext';
import { ChannelType } from '../../../../../types/Channel';
import InstrumentChannelInput from './Input/InstrumentChannelInput';
import { Flex } from '@chakra-ui/react';

function ChannelHeader() {
  const channelId = useContext(ChannelContext);
  const channelType = useRecoilValue(channelStore.type(channelId));

  return (
    <Flex p={2}>
      {channelType === ChannelType.AUDIO ? <AudioChannelInput/> : <InstrumentChannelInput/>}
    </Flex>
  );
}

export default React.memo(ChannelHeader);
