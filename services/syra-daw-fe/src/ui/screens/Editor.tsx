import React from "react";
import HorizontalChannelList from '../molecules/Channels/HorizontalChannels/HorizontalChannelList';
import { editorStore } from '../../recoil/editorStore';
import { useRecoilValue } from 'recoil';
import { Box } from '@chakra-ui/react';
import useWebMidi from '../../hooks/midi/useWebMidi';
import TransportView from '../molecules/Transport/TransportView';
import Settings from '../organisms/dialogues/Settings/Settings';
import PianoRoll from '../organisms/views/PianoRoll/PianoRoll';
import ArrangeWindowV2 from '../organisms/views/ArrangeWindow/ArrangeWindowV2';
import useInterval from "../../hooks/core/useInterval";
import { projectStore } from "../../recoil/projectStore";
import { saveToDb } from "../../recoil/effects/saveToDatabaseEffect";
import { useMeQuery, useProjectQuery } from "../../gql/generated";
import Video from "../organisms/views/Video/Video";

function Editor() {
  const showMixer = useRecoilValue(editorStore.showMixer);
  const showPianoRoll = useRecoilValue(editorStore.showPianoRoll);
  const id = useRecoilValue(projectStore.id);

  const {data: projectData} = useProjectQuery({
    variables: {
      id,
    }
  });
  const {data: meData} = useMeQuery();

  useWebMidi();

  useInterval(async (id, ownerId, myId) => {
    if (ownerId === myId) {
      await saveToDb(id);
    }
  }, 30000, id, projectData?.project?.owner.id, meData?.me.id);

  return (
    <Box>
      <ArrangeWindowV2 />
      <Box pos={'fixed'} bottom={78} left={0} w={'100%'} h={'50%'} zIndex={1} display={showMixer || showPianoRoll ? 'block' : 'none'}>
        <HorizontalChannelList showView={showMixer} />
        <PianoRoll minNote={12} maxNote={115} showView={showPianoRoll} />
      </Box>
      <Box pos={'fixed'} bottom={0} left={0} w={'100%'} zIndex={10}>
        <TransportView />
      </Box>
      <>
        <Settings />
        <Video/>
      </>
    </Box>
  );
}

export default Editor;
