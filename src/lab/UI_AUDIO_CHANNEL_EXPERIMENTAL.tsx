import React from 'react';
import ChannelBody from '../ui/molecules/ChannelStrip/ChannelBody';
import ChannelHeader from '../ui/molecules/ChannelStrip/ChannelHeader';
import { List, ListSubheader } from '@material-ui/core';
import ChannelAudio from '../ui/molecules/ChannelStrip/ChannelAudio';
import useAudioTonePatcher from '../hooks/tone/useAudioTonePatcher';
import LevelMeterVertical from '../ui/atoms/Meter/LevelMeterVertical';

function UI_AUDIO_CHANNEL_EXPERIMENTAL() {
  const { toneChannel, tonePeakMeter, toneRmsMeter } = useAudioTonePatcher();

  return (
    <>
      <List subheader={<ListSubheader><ChannelHeader/></ListSubheader>}>
        <ChannelAudio/>
      </List>
      <ChannelBody toneChannel={toneChannel}>
        <LevelMeterVertical toneRmsMeter={toneRmsMeter} tonePeakMeter={tonePeakMeter}/>
      </ChannelBody>
    </>
  );
}

export default React.memo(UI_AUDIO_CHANNEL_EXPERIMENTAL);
