import React from 'react';
import {
  List,
  ListSubheader,
} from '@material-ui/core';
import ChannelInstrument from '../ui/molecules/ChannelStrip/ChannelInstrument';
import useMidiForChannel from '../hooks/audio/useMidiForChannel';
import ChannelBody from '../ui/molecules/ChannelStrip/ChannelBody';
import ChannelHeader from '../ui/molecules/ChannelStrip/ChannelHeader';

function UI_INSTRUMENT_CHANNEL_EXPERIMENTAL() {
  useMidiForChannel();

  return (
    <>
      <List subheader={<ListSubheader><ChannelHeader/></ListSubheader>}>
        <ChannelInstrument/>
      </List>
      <ChannelBody/>
    </>
  );
}

export default React.memo(UI_INSTRUMENT_CHANNEL_EXPERIMENTAL);
