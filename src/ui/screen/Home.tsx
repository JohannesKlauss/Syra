import React from 'react';
import useAudioContext from '../../hooks/audio/useAudioContext';
import UI_CHANNEL_LIST_EXPERIMENTAL from '../../lab/UI_CHANNEL_LIST_EXPERIMENTAL';

function Home() {
  const context = useAudioContext();

  return (
    <>
      {context.state === 'running' && <UI_CHANNEL_LIST_EXPERIMENTAL/>}
    </>
  );
}

export default Home;
