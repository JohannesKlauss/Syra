import React, { useContext } from 'react';
import useConnectMidiWithInstrumentChannel from '../../../../hooks/audio/useConnectMidiWithInstrumentChannel';
import ChannelBody from './Strip/ChannelBody';
import ChannelHeader from './Strip/ChannelHeader';
import { ChannelContext } from '../../../../providers/ChannelContext';

function InstrumentChannel() {
  const channelId = useContext(ChannelContext);
  useConnectMidiWithInstrumentChannel(channelId);

  return (
    <>
      <ChannelHeader/>
      <ChannelBody/>
    </>
  );
}

export default React.memo(InstrumentChannel);
