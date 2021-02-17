import React from 'react';
import ChannelBody from './Strip/ChannelBody';
import ChannelHeader from './Strip/ChannelHeader';

function InstrumentChannel() {
  return (
    <>
      <ChannelHeader/>
      <ChannelBody/>
    </>
  );
}

export default React.memo(InstrumentChannel);
