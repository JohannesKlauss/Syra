import React from 'react';
import ChannelBody from '../../ui/molecules/ChannelStrip/ChannelBody';
import ChannelHeader from '../../ui/molecules/ChannelStrip/ChannelHeader';
import { List, ListSubheader } from '@material-ui/core';
import ChannelAudio from '../../ui/molecules/ChannelStrip/ChannelAudio';
import useAudioToneConnector from '../../hooks/tone/useAudioToneConnector';
import LevelMeterVertical from '../../ui/atoms/Meter/LevelMeterVertical';

function AudioChannel() {
  const { toneChannel, toneRmsMeter } = useAudioToneConnector();

  return (
    <>
      <List subheader={<ListSubheader><ChannelHeader/></ListSubheader>}>
        <ChannelAudio/>
      </List>
      <ChannelBody toneChannel={toneChannel} toneRmsMeter={toneRmsMeter}>
        <LevelMeterVertical toneRmsMeter={toneRmsMeter}/>
      </ChannelBody>
    </>
  );
}

export default React.memo(AudioChannel);
