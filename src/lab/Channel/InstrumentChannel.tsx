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

function InstrumentChannel() {
  useInstrumentToneConnector();
  useMidiForChannel();

  return (
    <>
      <ChannelHeader/>
      <ChannelBody/>
    </>
  );
}

export default React.memo(InstrumentChannel);
