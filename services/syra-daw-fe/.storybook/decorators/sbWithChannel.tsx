import { ChannelContext } from "../../src/providers/ChannelContext";
import * as React from "react";
import useCreateChannel from "../../src/hooks/recoil/channel/useCreateChannel";
import { ChannelType } from "../../src/types/Channel";

export default function sbWithChannel(Story) {
  const createChannel = useCreateChannel();

  return (
    <ChannelContext.Provider value={createChannel(ChannelType.AUDIO, 0, 'Channel 1')}>
      <Story/>
    </ChannelContext.Provider>
  )
}