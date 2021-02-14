import React, { Suspense, useContext, useEffect, useState } from 'react';
import HorizontalChannelList from '../molecules/Channels/HorizontalChannels/HorizontalChannelList';
import { editorStore } from '../../recoil/editorStore';
import { useRecoilValue } from 'recoil';
import { Box } from '@chakra-ui/react';
import useWebMidi from '../../hooks/midi/useWebMidi';
import TransportView from '../molecules/Transport/TransportView';
import Settings from '../organisms/dialogues/Settings/Settings';
import PianoRoll from '../organisms/views/PianoRoll/PianoRoll';
import ArrangeWindowV2 from '../organisms/views/ArrangeWindow/ArrangeWindowV2';
import useInterval from '../../hooks/core/useInterval';
import { projectStore } from '../../recoil/projectStore';
import { saveToDb } from '../../recoil/effects/saveToDatabaseEffect';
import { useMeQuery, useProjectQuery } from '../../gql/generated';
import Video from '../organisms/views/Video/Video';
import LoadingIndicator from '../atoms/LoadingIndicator';
import Debugger from '../debug/Debugger';
import { useHotkeys } from 'react-hotkeys-hook';
import { BackboneMixerContext } from '../../providers/BackboneMixerContext';
import { Prompt, useHistory } from 'react-router-dom';
import { routes } from '../../const/routes';

function Editor() {
  const backboneMixer = useContext(BackboneMixerContext);
  const [showDebugMenu, setShowDebugMenu] = useState(false);
  const showMixer = useRecoilValue(editorStore.showMixer);
  const showPianoRoll = useRecoilValue(editorStore.showPianoRoll);
  const id = useRecoilValue(projectStore.id);

  useHotkeys('shift+d', () => setShowDebugMenu((currVal) => !currVal));

  const { block } = useHistory();

  useEffect(() => {
    const unblock = block((location) => {
      if (
        location.pathname === routes.Editor &&
        window.confirm(`Some changes might not have been saved. Are you sure you want to leave?`)
      ) {
        unblock();
      }
    });

    return () => {
      unblock();
    }
  }, []);

  const { data: projectData } = useProjectQuery({
    variables: {
      id,
    },
  });
  const { data: meData } = useMeQuery();

  useWebMidi();

  // Auto save
  useInterval(
    async (id, ownerId, myId) => {
      if (ownerId === myId) {
        await saveToDb(id);
      }
    },
    5000,
    id,
    projectData?.project?.owner.id,
    meData?.me.id,
  );

  useEffect(() => {
    if (id !== null && id.length > 0 && meData?.me.id) {
      backboneMixer.initPubSub(id, meData?.me.id);
    }
  }, [backboneMixer, id, meData]);

  return (
    <Box>
      <Prompt when={true} message={`Are you sure you want to leave?`} />
      <Suspense fallback={<LoadingIndicator />}>
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
      </Suspense>
    </Box>
  );
}

export default Editor;
