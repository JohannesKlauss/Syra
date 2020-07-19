import React from 'react';
import ChannelBody from '../../ui/molecules/ChannelStrip/ChannelBody';
import ChannelHeader from '../../ui/molecules/ChannelStrip/ChannelHeader';
import { List, ListSubheader } from '@material-ui/core';
import ChannelAudio from '../../ui/molecules/ChannelStrip/ChannelAudio';
import useAudioToneConnector from '../../hooks/tone/useAudioToneConnector';
import LevelMeterVertical from '../../ui/atoms/Meter/LevelMeterVertical';

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
