import React from 'react';
import HorizontalChannelList from '../molecules/Channels/HorizontalChannels/HorizontalChannelList';
import ArrangeWindow from '../molecules/ArrangeWindow/ArrangeWindow';
import Piano from '../molecules/Piano/Piano';
import { editorStore } from '../../recoil/editorStore';
import { useRecoilValue } from 'recoil';
import { Box } from '@chakra-ui/react';
import useWebMidi from "../../hooks/midi/useWebMidi";
import TransportView from "../molecules/Transport/TransportView";
import Settings from '../organisms/dialogues/Settings/Settings';

function Editor() {
  const showMixer = useRecoilValue(editorStore.showMixer);
  const showPianoRoll = useRecoilValue(editorStore.showPianoRoll);

  useWebMidi();

  return (
      <>
        <Box>
          <ArrangeWindow/>
          {showMixer && <HorizontalChannelList/>}
          {showPianoRoll && <Piano min={36} max={67}/>}
          <Box pos={'fixed'} bottom={0} left={0} w={'100%'} zIndex={1}>
            <TransportView/>
          </Box>
          <>
            <Settings/>
          </>
        </Box>
      </>
  );
}

export default Editor;
