import React from 'react';
import {
  List,
  ListSubheader,
} from '@material-ui/core';
import ChannelInstrument from '../../ui/molecules/ChannelStrip/ChannelInstrument';
import useMidiForChannel from '../../hooks/audio/useMidiForChannel';
import ChannelBody from '../../ui/molecules/ChannelStrip/ChannelBody';
import ChannelHeader from '../../ui/molecules/ChannelStrip/ChannelHeader';
import useInstrumentToneConnector from '../../hooks/tone/useInstrumentToneConnector';
import LevelMeterVertical from '../../ui/atoms/Meter/LevelMeterVertical';

function UI_INSTRUMENT_CHANNEL_EXPERIMENTAL() {
  const { toneChannel, toneRmsMeter } = useInstrumentToneConnector();
  useMidiForChannel();

  return (
    <>
      <List subheader={<ListSubheader><ChannelHeader/></ListSubheader>}>
        <ChannelInstrument/>
      </List>
      <ChannelBody toneChannel={toneChannel} toneRmsMeter={toneRmsMeter}>
        <LevelMeterVertical toneRmsMeter={toneRmsMeter}/>
      </ChannelBody>
    </>
  );
}

export default React.memo(UI_INSTRUMENT_CHANNEL_EXPERIMENTAL);
