import React, { useEffect } from 'react';
import ChannelBody from '../ui/molecules/ChannelStrip/ChannelBody';
import ChannelHeader from '../ui/molecules/ChannelStrip/ChannelHeader';
import { List, ListSubheader } from '@material-ui/core';
import ChannelAudio from '../ui/molecules/ChannelStrip/ChannelAudio';
import useAudioToneConnector from '../hooks/tone/useAudioToneConnector';
import LevelMeterVertical from '../ui/atoms/Meter/LevelMeterVertical';

function UI_AUDIO_CHANNEL_EXPERIMENTAL() {
  const { toneChannel, toneRmsMeter } = useAudioToneConnector();

  return (
    <>
      <List subheader={<ListSubheader><ChannelHeader/></ListSubheader>}>
        <ChannelAudio/>
      </List>
      <ChannelBody toneChannel={toneChannel}>
        <LevelMeterVertical toneRmsMeter={toneRmsMeter}/>
      </ChannelBody>
    </>
  );
}

export default React.memo(UI_AUDIO_CHANNEL_EXPERIMENTAL);
