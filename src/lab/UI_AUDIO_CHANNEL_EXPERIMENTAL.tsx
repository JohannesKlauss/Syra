import React from 'react';
import ChannelBody from '../ui/molecules/ChannelStrip/ChannelBody';
import ChannelHeader from '../ui/molecules/ChannelStrip/ChannelHeader';

function UI_AUDIO_CHANNEL_EXPERIMENTAL() {
  return (
    <>
      <ChannelHeader/>
      <ChannelBody/>
    </>
  );
}

export default React.memo(UI_AUDIO_CHANNEL_EXPERIMENTAL);
