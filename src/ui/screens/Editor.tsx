import React, { useEffect } from 'react';
import HorizontalChannelList from '../molecules/Channels/HorizontalChannels/HorizontalChannelList';
import ArrangeWindow from '../molecules/ArrangeWindow/ArrangeWindow';
import Piano from '../molecules/Piano/Piano';
import TopBar from '../organisms/TopBar';
import WebMidiListener from '../molecules/Midi/WebMidiListener';
import { editorStore } from '../../recoil/editorStore';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../recoil/channelStore';
import useCreateChannel from '../../hooks/recoil/channel/useCreateChannel';
import { ChannelType } from '../../types/Channel';
import { styled } from '@material-ui/core';

const EditorContainer = styled('div')({
  marginTop: 64,
});

function Editor() {
  const showMixer = useRecoilValue(editorStore.showMixer);
  const showPianoRoll = useRecoilValue(editorStore.showPianoRoll);

  const ids = useRecoilValue(channelStore.ids);
  const createChannel = useCreateChannel();

  useEffect(() => {
    if (ids.length === 0) {
      (async () => {
        await createChannel(ChannelType.AUDIO, 0, 'Audio 1');
      })();
    }
  }, [ids]);

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
