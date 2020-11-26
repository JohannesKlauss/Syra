import React from 'react';
import HorizontalChannelList from '../molecules/Channels/HorizontalChannels/HorizontalChannelList';
import ArrangeWindow from '../molecules/ArrangeWindow/ArrangeWindow';
import Piano from '../molecules/Piano/Piano';
import { editorStore } from '../../recoil/editorStore';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useHotkeys } from 'react-hotkeys-hook';
import Video from '../molecules/Video/Video';
import { Box } from '@chakra-ui/react';
import useWebMidiListener from "../../hooks/midi/useWebMidiListener";

function Editor() {
  const showMixer = useRecoilValue(editorStore.showMixer);
  const showPianoRoll = useRecoilValue(editorStore.showPianoRoll);
  const [showVideo, setShowVideo] = useRecoilState(editorStore.showVideo);

  useWebMidiListener();
  useHotkeys('v', () => setShowVideo(currVal => !currVal));

  return (
      <>
        <Box>
          <ArrangeWindow/>
          {showMixer && <HorizontalChannelList/>}
          {showPianoRoll && <Piano min={36} max={67}/>}
          {showVideo && <Video/>}
        </Box>
      </>
  );
}

export default Editor;
