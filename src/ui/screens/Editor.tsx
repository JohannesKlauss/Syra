import React from 'react';
import HorizontalChannelList from '../molecules/Channels/HorizontalChannels/HorizontalChannelList';
import ArrangeWindow from '../molecules/ArrangeWindow/ArrangeWindow';
import Piano from '../molecules/Piano/Piano';
import TopBar from '../organisms/TopBar';
import WebMidiListener from '../molecules/Midi/WebMidiListener';
import { editorStore } from '../../recoil/editorStore';
import { useRecoilValue } from 'recoil/dist';
import { styled } from '@material-ui/core';

const EditorContainer = styled('div')({
  marginTop: 64,
});

function Editor() {
  const showMixer = useRecoilValue(editorStore.showMixer);
  const showPianoRoll = useRecoilValue(editorStore.showPianoRoll);

  return (
      <>
        <TopBar/>
        <EditorContainer>
          <ArrangeWindow/>
          {showMixer && <HorizontalChannelList/>}
          {showPianoRoll && <Piano min={36} max={67}/>}
          <WebMidiListener/>
        </EditorContainer>
      </>
  );
}

export default Editor;
