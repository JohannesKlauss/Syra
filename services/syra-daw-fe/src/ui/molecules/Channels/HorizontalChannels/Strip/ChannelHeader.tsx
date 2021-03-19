import React, { useContext, useMemo } from "react";
import AudioChannelInput from "./Input/AudioChannelInput";
import { useRecoilValue } from "recoil";
import { channelStore } from "../../../../../recoil/channelStore";
import { ChannelContext } from "../../../../../providers/ChannelContext";
import { ChannelType } from "../../../../../types/Channel";
import InstrumentChannelInput from "./Input/InstrumentChannelInput";
import { Button, Flex } from '@chakra-ui/react';

function ChannelHeader() {
  const channelId = useContext(ChannelContext);
  const channelType = useRecoilValue(channelStore.type(channelId));

  const Component = useMemo(() => {
    switch(channelType) {
      case ChannelType.AUDIO:
        return <AudioChannelInput/>;
      case ChannelType.INSTRUMENT:
        return <InstrumentChannelInput/>;
      case ChannelType.MASTER:
        return <Button
          colorScheme={'gray'}
          size={'xs'}
          mt={'2px'}
          flex={2}
          isDisabled
        >
          -
        </Button>;
    }
  }, [channelType]);

  return (
    <Flex p={2}>
      {Component}
    </Flex>
  );
}

export default React.memo(ChannelHeader);
