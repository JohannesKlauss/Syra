import React from 'react';
import HorizontalChannelList from '../molecules/Channels/HorizontalChannels/HorizontalChannelList';
import ArrangeWindow from '../molecules/ArrangeWindow/ArrangeWindow';
import { editorStore } from '../../recoil/editorStore';
import { useRecoilValue } from 'recoil';
import { Box } from '@chakra-ui/react';
import useWebMidi from "../../hooks/midi/useWebMidi";
import TransportView from "../molecules/Transport/TransportView";
import Settings from '../organisms/dialogues/Settings/Settings';
import PianoRoll from "../organisms/views/PianoRoll/PianoRoll";

function Editor() {
  const showMixer = useRecoilValue(editorStore.showMixer);
  const showPianoRoll = useRecoilValue(editorStore.showPianoRoll);

  useWebMidi();

  return (
      <>
        <Box>
          <ArrangeWindow/>
          <Box pos={'fixed'} bottom={78} left={0} w={'100%'} h={'50%'} zIndex={1} display={showMixer || showPianoRoll ? 'block' : 'none'}>
            {showMixer && <HorizontalChannelList/>}
            {showPianoRoll && <PianoRoll minNote={12} maxNote={115}/>}
          </Box>
          <Box pos={'fixed'} bottom={0} left={0} w={'100%'} zIndex={10}>
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
