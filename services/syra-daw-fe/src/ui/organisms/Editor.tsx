import React, { useState } from 'react';
import HorizontalChannelList from '../molecules/Channels/HorizontalChannels/HorizontalChannelList';
import { editorStore } from '../../recoil/editorStore';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Box, useTheme } from "@chakra-ui/react";
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
import useAutoSave from '../../hooks/sync/useAutoSave';
import { transportStore } from "../../recoil/transportStore";
import usePublishChangesToClients from "../../hooks/sync/usePublishChangesToClients";
import DrawerContainer from './views/Drawers/DrawerContainer';

const Editor: React.FC = () => {
  const theme = useTheme();
  const [showDebugMenu, setShowDebugMenu] = useState(false);
  const showMixer = useRecoilValue(editorStore.showMixer);
  const showPianoRoll = useRecoilValue(editorStore.showPianoRoll);
  const id = useRecoilValue(projectStore.id);
  const setIsCycleActive = useSetRecoilState(transportStore.isCycleActive);

  useHotkeys('shift+d', () => setShowDebugMenu((currVal) => !currVal));
  useHotkeys('c', () => setIsCycleActive(currVal => !currVal), [setIsCycleActive]);

  useBlockWindowLeave();
  useAutoSave(id, 5000);
  usePublishChangesToClients();

  return (
    <Box>
      <Prompt when={true} message={`Are you sure you want to leave?`} />
      <ArrangeWindowV2 h={showMixer || showPianoRoll ? 'calc(50% - 49px - 78px)' : 'calc(100vh - 49px - 78px)'}/>
      <Box
        pos={'fixed'}
        bottom={78}
        bgColor={'gray.900'}
        left={0}
        w={'100%'}
        h={showMixer ? '50%' : '50%'}
        zIndex={1}
        borderTop={`1px solid ${theme.colors.teal[300]}`}
        overflowY={showMixer ? 'scroll' : 'initial'}
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
        <DrawerContainer/>
      </>

      {process.env.NODE_ENV === 'development' && (
        <Debugger onClose={() => setShowDebugMenu(false)} showMenu={showDebugMenu} />
      )}
    </Box>
  );
};

export default Editor;
