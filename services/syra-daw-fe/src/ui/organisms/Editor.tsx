import React, { useState } from 'react';
import HorizontalChannelList from '../molecules/Channels/HorizontalChannels/HorizontalChannelList';
import { editorStore } from '../../recoil/editorStore';
import { useRecoilValue } from 'recoil';
import { Box } from '@chakra-ui/react';
import useWebMidi from '../../hooks/midi/useWebMidi';
import TransportView from '../molecules/Transport/TransportView';
import Settings from '../organisms/dialogues/Settings/Settings';
import PianoRoll from '../organisms/views/PianoRoll/PianoRoll';
import ArrangeWindowV2 from '../organisms/views/ArrangeWindow/ArrangeWindowV2';
import { projectStore } from '../../recoil/projectStore';
import Video from '../organisms/views/Video/Video';
import Debugger from '../debug/Debugger';
import { useHotkeys } from 'react-hotkeys-hook';
import { Prompt } from 'react-router-dom';
import useBlockWindowLeave from '../../hooks/ui/useBlockWindowLeave';
import useAutoSave from '../../hooks/recoil/useAutoSave';
import useSyncMixer from '../../hooks/recoil/useSyncMixer';
import useUndoRedo from '../../hooks/recoil/useUndoRedo';

const Editor: React.FC = () => {
  const [showDebugMenu, setShowDebugMenu] = useState(false);
  const showMixer = useRecoilValue(editorStore.showMixer);
  const showPianoRoll = useRecoilValue(editorStore.showPianoRoll);
  const id = useRecoilValue(projectStore.id);

  useHotkeys('shift+d', () => setShowDebugMenu((currVal) => !currVal));

  useUndoRedo();
  useBlockWindowLeave();
  useWebMidi();
  useAutoSave(id, 5000);

  return (
    <Box>
      <Prompt when={true} message={`Are you sure you want to leave?`} />
      <ArrangeWindowV2 />
      <Box
        pos={'fixed'}
        bottom={78}
        left={0}
        w={'100%'}
        h={showMixer ? 'initial' : '50%'}
        zIndex={1}
        display={showMixer || showPianoRoll ? 'block' : 'none'}
      >
        <HorizontalChannelList showView={showMixer} />
        <PianoRoll minNote={12} maxNote={115} showView={showPianoRoll} />
      </Box>
      <Box pos={'fixed'} bottom={0} left={0} w={'100%'} zIndex={10}>
        <TransportView />
      </Box>
      <>
        <Settings />
        <Video />
      </>

      {process.env.NODE_ENV === 'development' && (
        <Debugger onClose={() => setShowDebugMenu(false)} showMenu={showDebugMenu} />
      )}
    </Box>
  );
};

export default Editor;