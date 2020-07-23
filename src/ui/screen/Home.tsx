import React from 'react';
import HorizontalChannelList from '../molecules/Channels/HorizontalChannels/HorizontalChannelList';
import ArrangeWindow from '../../lab/ArrangeWindow/ArrangeWindow';
import Piano from '../molecules/Piano/Piano';

function Home() {
  return (
    <>
      <ArrangeWindow/>
      <HorizontalChannelList/>
      <Piano min={36} max={67}/>
    </>
  );
}

export default Home;
