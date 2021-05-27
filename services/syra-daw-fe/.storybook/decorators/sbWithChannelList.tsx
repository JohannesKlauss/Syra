import * as React from 'react';
import useCreateChannel from '../../src/hooks/recoil/channel/useCreateChannel';
import { ChannelMode, ChannelType } from "../../src/types/Channel";
import { useEffect } from "react";

export default function withChannel(Story) {
  const createChannel = useCreateChannel();
  useEffect(() => {
    (async () => {
      await createChannel(ChannelType.AUDIO, ChannelMode.MONO, 0, 'Audio 1');
      await createChannel(ChannelType.AUDIO, ChannelMode.MONO, 0, 'Audio 2');
      await createChannel(ChannelType.INSTRUMENT, ChannelMode.MONO, 0, 'Instrument 1');
      await createChannel(ChannelType.INSTRUMENT, ChannelMode.MONO, 0, 'Instrument 2');
    })();
  }, []);

  return <Story />;
}
