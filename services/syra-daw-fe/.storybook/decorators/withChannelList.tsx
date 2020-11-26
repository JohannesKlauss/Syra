import * as React from 'react';
import useCreateChannel from '../../src/hooks/recoil/channel/useCreateChannel';
import { ChannelType } from '../../src/types/Channel';
import { useEffect, useState } from "react";

export default function withChannel(Story) {
  const createChannel = useCreateChannel();
  useEffect(() => {
    (async () => {
      await createChannel(ChannelType.AUDIO, 0, 'Audio 1');
      await createChannel(ChannelType.AUDIO, 0, 'Audio 2');
      await createChannel(ChannelType.INSTRUMENT, 0, 'Instrument 1');
      await createChannel(ChannelType.INSTRUMENT, 0, 'Instrument 2');
    })();
  }, []);

  return <Story />;
}
