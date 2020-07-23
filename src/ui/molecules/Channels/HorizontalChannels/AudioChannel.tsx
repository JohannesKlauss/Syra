import React from 'react';
import ChannelBody from './Strip/ChannelBody';
import ChannelHeader from './Strip/ChannelHeader';
import useAudioToneConnector from '../../../../hooks/tone/useAudioToneConnector';

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
