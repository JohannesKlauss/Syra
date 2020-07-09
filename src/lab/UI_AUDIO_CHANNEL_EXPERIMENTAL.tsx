import React from 'react';
import ChannelBody from '../ui/molecules/ChannelStrip/ChannelBody';
import ChannelHeader from '../ui/molecules/ChannelStrip/ChannelHeader';
import { List, ListSubheader } from '@material-ui/core';
import ChannelAudio from '../ui/molecules/ChannelStrip/ChannelAudio';
import useAudioTonePatcher from '../hooks/tone/useAudioTonePatcher';

function UI_AUDIO_CHANNEL_EXPERIMENTAL() {
  const toneChannel = useAudioTonePatcher();

  return (
    <>
      <List subheader={<ListSubheader><ChannelHeader/></ListSubheader>}>
        <ChannelAudio/>
      </List>
      <ChannelBody toneChannel={toneChannel}/>
    </>
  );
}

export default React.memo(UI_AUDIO_CHANNEL_EXPERIMENTAL);
