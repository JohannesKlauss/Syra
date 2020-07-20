import React from 'react';
import useMidiForChannel from '../../hooks/audio/useMidiForChannel';
import ChannelBody from '../../ui/molecules/ChannelStrip/ChannelBody';
import ChannelHeader from '../../ui/molecules/ChannelStrip/ChannelHeader';
import useInstrumentToneConnector from '../../hooks/tone/useInstrumentToneConnector';

function InstrumentChannel() {
  useInstrumentToneConnector();
  useMidiForChannel();

  return (
    <>
      <ChannelHeader/>
      <ChannelBody/>
    </>
  );
}

export default React.memo(InstrumentChannel);
