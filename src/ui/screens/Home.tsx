import React from 'react';
import HorizontalChannelList from '../molecules/Channels/HorizontalChannels/HorizontalChannelList';
import ArrangeWindow from '../molecules/ArrangeWindow/ArrangeWindow';
import Piano from '../molecules/Piano/Piano';
import MidiProvider from '../../providers/MidiProvider';

function Home() {
  return (
    <MidiProvider>
      <ArrangeWindow/>
      <HorizontalChannelList/>
      <Piano min={36} max={67}/>
    </MidiProvider>
  );
}

export default Home;
