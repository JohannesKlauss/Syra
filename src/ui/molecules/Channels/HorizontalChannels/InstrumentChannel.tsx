import React from 'react';
import useConnectMidiWithInstrumentChannel from '../../../../hooks/audio/useConnectMidiWithInstrumentChannel';
import ChannelBody from './Strip/ChannelBody';
import ChannelHeader from './Strip/ChannelHeader';
import useInstrumentToneConnector from '../../../../hooks/tone/useInstrumentToneConnector';

function InstrumentChannel() {
  useInstrumentToneConnector();
  useConnectMidiWithInstrumentChannel();

  return (
    <>
      <ChannelHeader/>
      <ChannelBody/>
    </>
  );
}

export default React.memo(InstrumentChannel);
