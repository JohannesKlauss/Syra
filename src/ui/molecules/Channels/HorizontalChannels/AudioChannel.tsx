import React from 'react';
import ChannelBody from './Strip/ChannelBody';
import ChannelHeader from './Strip/ChannelHeader';

function AudioChannel() {
  return (
    <>
      <ChannelHeader/>
      <ChannelBody/>
    </>
  );
}

export default React.memo(AudioChannel);
