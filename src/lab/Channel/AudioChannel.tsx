import React from 'react';
import ChannelBody from '../../ui/molecules/ChannelStrip/ChannelBody';
import ChannelHeader from '../../ui/molecules/ChannelStrip/ChannelHeader';
import useAudioToneConnector from '../../hooks/tone/useAudioToneConnector';

function AudioChannel() {
  useAudioToneConnector();

  return (
    <>
      <ChannelHeader/>
      <ChannelBody/>
    </>
  );
}

export default React.memo(AudioChannel);
