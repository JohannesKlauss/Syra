import React from 'react';
import HorizontalChannelList from '../molecules/Channels/HorizontalChannels/HorizontalChannelList';
import ArrangeWindow from '../molecules/ArrangeWindow/ArrangeWindow';
import Piano from '../molecules/Piano/Piano';
import { useHistory } from 'react-router-dom';
import useAudioContext from '../../hooks/audio/useAudioContext';
import TopBar from '../organisms/TopBar';

function Home() {
  const history = useHistory();
  const audioContext = useAudioContext();

  if (audioContext.state === 'suspended') {
    history.push('/new');
  }

  return (
      <>
        <TopBar/>
        <ArrangeWindow/>
        <HorizontalChannelList/>
        <Piano min={36} max={67}/>
      </>
  );
}

export default Home;
